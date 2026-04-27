import { ImageResponse } from "next/og";
import { getMapleLeafLogoDataUrl } from "@/lib/og-brand-assets";
import { BrandOgContent } from "./og/BrandOgContent";

export const runtime = "nodejs";
export const alt = "Maple Leaf Foods | Raise the Good in Food";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  const logoSrc = await getMapleLeafLogoDataUrl();
  return new ImageResponse(<BrandOgContent logoSrc={logoSrc} />, { ...size });
}
