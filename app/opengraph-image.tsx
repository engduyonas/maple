import { ImageResponse } from "next/og";
import { BrandOgContent } from "./og/BrandOgContent";

export const alt = "Maple Leaf Foods | Raise the Good in Food";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(<BrandOgContent />, { ...size });
}
