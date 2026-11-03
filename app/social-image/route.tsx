import { ImageResponse } from "next/og";
import { APP_NAME } from "@/utils/env";

export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "#f3f6ee",
        color: "#24362b",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34 }}
      >
        <div
          style={{
            display: "flex",
            width: 44,
            height: 44,
            borderRadius: 12,
            background: "#2d7251",
          }}
        />
        {APP_NAME}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            lineHeight: 1.08,
            letterSpacing: -3,
            maxWidth: 960,
          }}
        >
          Every image task. One toolbox.
        </div>
        <div style={{ display: "flex", fontSize: 27, color: "#586b55" }}>
          Edit · Optimize · Convert · Prepare photos
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 22, color: "#2d7251" }}>
        JPG · PNG · WebP · AVIF
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
