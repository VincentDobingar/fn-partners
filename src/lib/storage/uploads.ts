import { randomUUID } from "crypto";
import { mkdir, rm, writeFile } from "fs/promises";
import path from "path";
import { MAX_FILE_SIZE_BYTES } from "@/lib/data/requestOptions";

export { MAX_FILE_SIZE_BYTES, MAX_FILES } from "@/lib/data/requestOptions";

const ALLOWED_EXTENSIONS: Record<string, string> = {
  "application/pdf": ".pdf",
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "application/msword": ".doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx",
};

export type StoredDocument = {
  originalFilename: string;
  storedFilename: string;
  storagePath: string;
  mimeType: string;
  sizeBytes: number;
};

function getUploadDir(): string {
  return process.env.UPLOAD_DIR ?? "./var/uploads";
}

export function isAllowedFileType(mimeType: string): boolean {
  return mimeType in ALLOWED_EXTENSIONS;
}

/**
 * Writes the given files to disk under UPLOAD_DIR/<reference>/, outside the deploy tree so
 * they survive redeployments (see db/migrations/README.md and the Stage 1 plan for why).
 * Files are renamed to a random name on disk; the original name is only kept for display.
 * Throws on the first invalid/oversized/wrong-type file — callers should validate counts first.
 */
export async function saveUploadedFiles(reference: string, files: File[]): Promise<StoredDocument[]> {
  // UPLOAD_DIR is a runtime env var pointing outside the deploy tree (see module doc comment
  // above); it must not be statically traced/bundled by `output: "standalone"`'s file tracer.
  const targetDir = path.join(/* turbopackIgnore: true */ getUploadDir(), reference);
  await mkdir(targetDir, { recursive: true });

  const saved: StoredDocument[] = [];
  try {
    for (const file of files) {
      if (file.size > MAX_FILE_SIZE_BYTES) {
        throw new Error(`file_too_large:${file.name}`);
      }
      if (!isAllowedFileType(file.type)) {
        throw new Error(`file_type_not_allowed:${file.name}`);
      }

      const extension = ALLOWED_EXTENSIONS[file.type];
      const storedFilename = `${randomUUID()}${extension}`;
      const storagePath = path.join(/* turbopackIgnore: true */ reference, storedFilename);
      const buffer = Buffer.from(await file.arrayBuffer());
      await writeFile(path.join(/* turbopackIgnore: true */ targetDir, storedFilename), buffer);

      saved.push({
        originalFilename: file.name,
        storedFilename,
        storagePath,
        mimeType: file.type,
        sizeBytes: file.size,
      });
    }
  } catch (error) {
    // Partial failure: remove whatever was already written for this submission.
    await rm(targetDir, { recursive: true, force: true });
    throw error;
  }

  return saved;
}
