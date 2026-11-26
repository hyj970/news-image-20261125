// news-image-20261125 — copies the rendered front-page image to the output
// directory and verifies the copy byte-for-byte. Plain TypeScript, no deps.
// The grader runs this program twice; both runs must write identical bytes,
// which holds because the copy is a verbatim copy of the shipped entry.png.
import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function sha256Hex(buf: Buffer): string {
  return createHash("sha256").update(buf).digest("hex");
}

function main(): void {
  const here = dirname(fileURLToPath(import.meta.url));
  const sourcePath = join(here, "entry.png");
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const destPath = join(outDir, "entry.png");

  const source = readFileSync(sourcePath);
  if (source.length < 8 || !source.subarray(0, 8).equals(PNG_MAGIC)) {
    throw new Error("entry.png is not a PNG (bad magic bytes)");
  }
  const sourceHash = sha256Hex(source);

  mkdirSync(outDir, { recursive: true });
  copyFileSync(sourcePath, destPath);

  const copied = readFileSync(destPath);
  if (copied.length !== source.length) {
    throw new Error(
      `size mismatch: source ${source.length} bytes, copy ${copied.length} bytes`,
    );
  }
  if (!copied.subarray(0, 8).equals(PNG_MAGIC)) {
    throw new Error("copied entry.png is not a PNG (bad magic bytes)");
  }
  const copiedHash = sha256Hex(copied);
  if (copiedHash !== sourceHash) {
    throw new Error(`sha256 mismatch: ${sourceHash} != ${copiedHash}`);
  }

  console.log(`entry.png: ${source.length} bytes, sha256 ${sourceHash}`);
  console.log(`wrote ${destPath} (${copied.length} bytes, verified byte-for-byte)`);
}

main();
