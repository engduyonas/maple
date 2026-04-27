import { ImageResponse } from "next/og";

export const alt = "Maple Leaf Foods | Raise the Good in Food";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #003da6 0%, #002a73 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            left: "-60px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.04)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              color: "#ffffff",
              fontWeight: 700,
            }}
          >
            Maple Leaf Foods
          </div>
          <div
            style={{
              fontSize: "32px",
              color: "rgba(255, 255, 255, 0.9)",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            Raise the Good in Food
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: "20px",
              color: "rgba(255, 255, 255, 0.5)",
              maxWidth: "600px",
              textAlign: "center",
              lineHeight: "1.5",
            }}
          >
            Better food, safer workplaces, and a more sustainable protein future.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "6px",
            background: "linear-gradient(90deg, #ffffff 0%, #cfdcf6 50%, #ffffff 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
