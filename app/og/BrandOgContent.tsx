/**
 * Social preview card (1200×630) — @vercel/og / Satori layout.
 * Designed for “summary_large_image” style previews (e.g. Telegram, X).
 */
export function BrandOgContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(165deg, #0a4d3a 0%, #032e22 45%, #021a12 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.09) 0%, transparent 55%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 40,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.04)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -60,
          left: -40,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(0, 0, 0, 0.2)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          padding: "60px 80px",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 24,
            background: "rgba(255, 255, 255, 0.12)",
            border: "2px solid rgba(255, 255, 255, 0.25)",
            marginBottom: 8,
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: -2,
            }}
          >
            MLF
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: -1,
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          Maple Leaf Foods
        </div>

        <div
          style={{
            display: "flex",
            color: "rgba(255, 255, 255, 0.95)",
            fontSize: 38,
            fontWeight: 600,
            textAlign: "center",
            maxWidth: 920,
            lineHeight: 1.25,
          }}
        >
          Raise the Good in Food
        </div>

        <div
          style={{
            display: "flex",
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: 24,
            fontWeight: 500,
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.45,
            marginTop: 8,
          }}
        >
          Global food company on a journey through better nutrition, safer food, humane
          animal care, and sustainability.
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 8,
          background: "linear-gradient(90deg, #1a6b52 0%, #3d9a7a 40%, #1a6b52 100%)",
        }}
      />
    </div>
  );
}
