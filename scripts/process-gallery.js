const sharp = require("sharp");
const path = require("path");

const SRC = path.join(__dirname, "..", "public", "team");
const OUT = path.join(__dirname, "..", "public", "images", "gallery");
// "Vie du cabinet" source photos are curated by hand outside the repo and
// dropped in this folder; re-run this script after adding new ones there.
const LIFE_SRC = "F:/Mes_Projets/Digital_Business_Services/fn-partners/vie-cabinet";

// Candid phone photos shot in a dim office — need real brightening + contrast lift.
// CLAHE (local/adaptive contrast) opens up shadow detail in the suit and skin
// without blowing out the already-bright wall/blinds the way a flat exposure
// boost would.
async function processCandid(file, out, opts = {}) {
  const { brightness = 1.14, saturation = 1.08, lift = 8 } = opts;
  const meta = await sharp(path.join(SRC, file)).metadata();
  await sharp(path.join(SRC, file))
    .rotate()
    .normalise({ lower: 1, upper: 99 })
    .clahe({ width: Math.round(meta.width / 6), height: Math.round(meta.height / 6), maxSlope: 3 })
    .modulate({ brightness, saturation })
    .linear(1.02, lift)
    .sharpen({ sigma: 1 })
    .resize({ width: 1100, withoutEnlargement: true })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(path.join(OUT, out));
  console.log("candid ->", out);
}

// Already-lit studio portraits — light polish only, for consistency across the grid.
async function processStudio(file, out) {
  await sharp(path.join(SRC, file))
    .rotate()
    .normalise({ lower: 1, upper: 99 })
    .modulate({ brightness: 1.03, saturation: 1.05 })
    .sharpen({ sigma: 0.6 })
    .resize({ width: 1100, withoutEnlargement: true })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(OUT, out));
  console.log("studio  ->", out);
}

// "Vie du cabinet" event/candid photos — same adaptive-contrast treatment as
// processCandid, with per-photo tuning since lighting varies a lot (stage
// lighting vs. daylight vs. already-graded studio shots).
async function processLife(file, out, opts = {}) {
  const { brightness = 1.08, saturation = 1.05, lift = 4, clahe = true } = opts;
  const meta = await sharp(path.join(LIFE_SRC, file)).metadata();
  let img = sharp(path.join(LIFE_SRC, file)).rotate().normalise({ lower: 1, upper: 99 });
  if (clahe) {
    img = img.clahe({ width: Math.round(meta.width / 6), height: Math.round(meta.height / 6), maxSlope: 3 });
  }
  await img
    .modulate({ brightness, saturation })
    .linear(1.02, lift)
    .sharpen({ sigma: 1 })
    .resize({ width: 1100, withoutEnlargement: true })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(path.join(OUT, out));
  console.log("life    ->", out);
}

async function main() {
  await processCandid("WhatsApp Image 2026-09-22 at 18.05.08.jpeg", "founder-cabinet-01.jpg");
  await processCandid("WhatsApp Image 2026-09-22 at 18.05.09 (1).jpeg", "founder-cabinet-02.jpg");
  await processCandid("WhatsApp Image 2026-09-22 at 18.05.10 (1).jpeg", "founder-cabinet-03.jpg");
  await processCandid("WhatsApp Image 2026-09-22 at 18.05.10.jpeg", "founder-cabinet-04.jpg");
  await processCandid("WhatsApp Image 2026-09-22 at 18.05.11.jpeg", "founder-cabinet-05.jpg");
  await processCandid("WhatsApp Image 2026-09-22 at 18.05.11 (1).jpeg", "founder-cabinet-06.jpg");

  await processStudio("ChatGPT Image 22 sept. 2026, 14_25_18.png", "team-mathurin.jpg");
  await processStudio("ChatGPT Image 22 sept. 2026, 14_32_07.png", "team-gonde.jpg");
  await processStudio("ChatGPT Image 22 sept. 2026, 14_36_00.png", "team-mando.jpg");
  await processStudio("ChatGPT Image 22 sept. 2026, 14_39_09.png", "team-guy-michel.jpg");
  await processStudio("ChatGPT Image 22 sept. 2026, 14_45_47.png", "team-ghislaine.jpg");
  await processStudio("ChatGPT Image 22 sept. 2026, 15_06_36.png", "team-elise.jpg");
  await processStudio("ChatGPT Image 22 sept. 2026, 16_36_53.png", "team-flavien.jpg");
  await processStudio("isaac-tambia.jpg", "team-isaac.jpg");

  await processLife("ChatGPT Image 23 sept. 2026, 12_19_48.png", "vie-cabinet-portrait.jpg", { brightness: 1.03, saturation: 1.04, lift: 0, clahe: false });
  await processLife("WhatsApp Image 2026-09-20 at 20.00.04.jpeg", "vie-cabinet-distinction.jpg", { brightness: 1.08, saturation: 1.05, lift: 4 });
  await processLife("WhatsApp Image 2026-09-20 at 20.00.58.jpeg", "vie-cabinet-barreau.jpg", { brightness: 1.05, saturation: 1.05, lift: 4 });
  await processLife("WhatsApp Image 2026-09-22 at 16.15.04.jpeg", "vie-cabinet-tradition.jpg", { brightness: 1.03, saturation: 1.05, lift: 2 });
  await processLife("WhatsApp Image 2026-09-22 at 14.01.18.jpeg", "vie-cabinet-bureau-orange.jpg", { brightness: 1.02, saturation: 1.04, lift: 2 });
  await processLife("WhatsApp Image 2026-09-22 at 14.01.58.jpeg", "vie-cabinet-bureau-marine.jpg", { brightness: 1.02, saturation: 1.04, lift: 2 });
  await processLife("WhatsApp Image 2026-09-22 at 14.02.45.jpeg", "vie-cabinet-equipe-01.jpg", { brightness: 1.02, saturation: 1.03, lift: 2 });
  await processLife("WhatsApp Image 2026-09-23 at 15.03.58.jpeg", "vie-cabinet-congres-fauja.jpg", { brightness: 1.05, saturation: 1.04, lift: 4 });
  await processLife("ChatGPT Image 23 sept. 2026, 15_37_36.png", "vie-cabinet-abidjan-distinction.jpg", { brightness: 1.02, saturation: 1.03, lift: 1, clahe: false });
  await processLife("ChatGPT Image 23 sept. 2026, 15_45_05.png", "vie-cabinet-presse-mdtv.jpg", { brightness: 1.02, saturation: 1.03, lift: 1, clahe: false });
  await processLife("WhatsApp Image 2026-09-23 at 15.15.38 (1).jpeg", "vie-cabinet-aja-ci-quarantenaire.jpg", { brightness: 1.06, saturation: 1.05, lift: 3 });
  await processLife("WhatsApp Image 2026-09-23 at 15.18.10.jpeg", "vie-cabinet-intervention-01.jpg", { brightness: 1.03, saturation: 1.04, lift: 2 });
  await processLife("WhatsApp Image 2026-09-23 at 15.18.10 (1).jpeg", "vie-cabinet-panel-01.jpg", { brightness: 1.03, saturation: 1.04, lift: 2 });
  await processLife("WhatsApp Image 2026-09-23 at 15.18.10 (2).jpeg", "vie-cabinet-visite-officielle.jpg", { brightness: 1.02, saturation: 1.04, lift: 2 });
  await processLife("WhatsApp Image 2026-09-23 at 15.18.52.jpeg", "vie-cabinet-fish-festival.jpg", { brightness: 1.03, saturation: 1.04, lift: 2 });

  // Book cover — crop the front cover out of the full wrap (back / spine / front).
  await sharp(path.join(__dirname, "..", "public", "publication.jpeg"))
    .extract({ left: 785, top: 0, width: 495, height: 715 })
    .modulate({ brightness: 1.06, saturation: 1.08 })
    .sharpen({ sigma: 0.6 })
    .resize({ width: 700, withoutEnlargement: true })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(path.join(OUT, "..", "publications", "negociation-contrats-miniers.jpg"));
  console.log("book cover -> negociation-contrats-miniers.jpg");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
