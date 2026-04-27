/**
 * Social preview card (1200×630) — @vercel/og / Satori layout.
 * Brand mark is passed as a data URL from public/brand/maple-leaf-og.svg.
 */
type BrandOgContentProps = {
  /** data: URL (SVG) for the maple leaf, loaded in opengraph-image / twitter-image */
  logoSrc: string;
};

export function BrandOgContent({ logoSrc }: BrandOgContentProps) {
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
          gap: 22,
          padding: "56px 80px",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 220,
            height: 220,
            borderRadius: 32,
            background: "rgba(255, 255, 255, 0.1)",
            border: "2px solid rgba(255, 255, 255, 0.28)",
            boxShadow: "0 12px 48px rgba(0,0,0,0.3)",
            overflow: "hidden",
            marginBottom: 6,
          }}
        >
          <img
            src={logoSrc}
            width={180}
            height={180}
            alt=""
            style={{ objectFit: "contain" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: 62,
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
            fontSize: 36,
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
            marginTop: 4,
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
