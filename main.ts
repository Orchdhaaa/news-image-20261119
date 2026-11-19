// main.ts — news-image-20261119 entrypoint.
//
// The entry is a single pre-built front-page image (entry.png). This program
// copies it byte for byte into the output directory, then reads the copy back
// and checks it matches, so every run writes exactly the same bytes.
//
// The image itself was composed for Thursday 19 November 2026: a newspaper
// front page ("THE WORLD") typeset from verified news of the day, with
// editorial illustrations generated for the three photo stories. The
// front-page text is set in real fonts, so no headline or caption can come
// out garbled. No network is used at run time; everything the program needs
// ships in this repo.
//
// MORNING EDITION: the image was built from news verified by 07:00 WIB on
// 19 November 2026. A refresh pass with the full day's news is planned
// before the deadline (21 November 2026, 07:00 WIB).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(scriptDir, "entry.png");

// make.fun runs the program with MAKEFUN_OUTPUT_DIR set; default to /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.png");

const image = readFileSync(sourcePath);
if (image.length === 0) {
  throw new Error("bundled image is empty");
}

// The gate tells PNG from JPEG by the first bytes, so refuse anything else
// here instead of shipping a file the gate would reject.
const isPng = image.subarray(0, 4).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47]));
const isJpeg = image.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff]));
if (!isPng && !isJpeg) {
  throw new Error("bundled image is neither PNG nor JPEG");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, image);

// Verify the write so a truncated or altered copy fails loudly instead of
// silently submitting different bytes.
const written = readFileSync(outputPath);
if (!image.equals(written)) {
  throw new Error("output does not match the bundled image");
}

console.log(`wrote ${outputPath} (${written.length} bytes, verified)`);
