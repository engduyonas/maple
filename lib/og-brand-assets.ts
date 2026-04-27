import { readFile } from "node:fs/promises";
import { join } from "node:path";

const MAPLE_LEAF_SVG = "public/brand/maple-leaf-og.svg";

/**
 * Data URL for the maple mark so @vercel/og can draw it in &lt;img&gt; (Satori
 * supports image/png, jpeg, gif, webp; SVG in data URLs is also handled for common cases).
 */
export async function getMapleLeafLogoDataUrl(): Promise<string> {
  const abs = join(process.cwd(), MAPLE_LEAF_SVG);
  const buf = await readFile(abs);
  return `data:image/svg+xml;base64,${buf.toString("base64")}`;
}
