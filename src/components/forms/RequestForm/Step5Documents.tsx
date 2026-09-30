import { useId } from "react";
import type { Locale } from "@/lib/data/firm";
import { ALLOWED_MIME_TYPES, MAX_FILES, MAX_FILE_SIZE_BYTES } from "@/lib/data/requestOptions";
import { copy } from "./copy";
import type { StepProps } from "./types";

export function Step5Documents({ state, update, locale }: StepProps & { locale: Locale }) {
  const t = copy[locale].step5;
  const inputId = useId();

  function handleFilesSelected(files: FileList | null) {
    if (!files) return;
    const incoming = Array.from(files);
    const combined = [...state.documents, ...incoming].slice(0, MAX_FILES);
    update("documents", combined);
  }

  function removeFile(index: number) {
    update(
      "documents",
      state.documents.filter((_, i) => i !== index)
    );
  }

  return (
    <div className="space-y-5">
      <h3 className="font-serif text-lg text-navy">{t.title}</h3>
      <p className="text-xs text-muted">{t.hint}</p>

      <label
        htmlFor={inputId}
        className="inline-flex items-center rounded-sm border border-line px-5 py-2.5 text-sm hover:border-gold hover:text-gold-deep cursor-pointer"
      >
        {t.addFiles}
      </label>
      <input
        id={inputId}
        type="file"
        multiple
        accept={ALLOWED_MIME_TYPES.join(",")}
        className="sr-only"
        onChange={(e) => handleFilesSelected(e.target.files)}
      />

      {state.documents.length > 0 && (
        <ul className="space-y-2">
          {state.documents.map((file, i) => {
            const typeInvalid = !ALLOWED_MIME_TYPES.includes(file.type as (typeof ALLOWED_MIME_TYPES)[number]);
            const sizeInvalid = file.size > MAX_FILE_SIZE_BYTES;

            return (
              <li
                key={`${file.name}-${i}`}
                className="flex items-center justify-between gap-3 rounded-sm border border-line px-4 py-2.5 text-sm"
              >
                <div className="min-w-0">
                  <div className="truncate text-ink-soft">{file.name}</div>
                  {(typeInvalid || sizeInvalid) && (
                    <div className="text-xs text-red-700">{typeInvalid ? t.typeNotAllowed : t.tooLarge}</div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="shrink-0 text-xs font-mono uppercase tracking-wider text-gold-deep hover:text-gold-light"
                >
                  {t.remove}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {state.documents.length >= MAX_FILES && <p className="text-xs text-muted">{t.tooMany}</p>}
    </div>
  );
}
