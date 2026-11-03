import type { SVGProps } from "react";

const paths = {
  arrow: "M5 12h14m-6-6 6 6-6 6",
  diagonal: "M6 18 18 6M6 6h12v12",
  search: "m21 21-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
  resize: "M8 3H3v5m13 13h5v-5M3 3l6 6m12 12-6-6M14 3h7v7M3 14v7h7",
  compress:
    "M4 4h5v5H4zM15 15h5v5h-5zM15 4h5v5h-5zM4 15h5v5H4zM9 9l3 3 3-3m-6 6 3-3 3 3",
  convert: "M4 7h15m-4-4 4 4-4 4M20 17H5m4-4-4 4 4 4",
  background:
    "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2ZM3 16l5-5 5 5 3-3 5 5M15 7h.01",
  crop: "M6 3v13a2 2 0 0 0 2 2h13M3 6h13a2 2 0 0 1 2 2v13",
  passport:
    "M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2ZM8 17h8M16 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 10h8M12 6c-2 2-2 6 0 8 2-2 2-6 0-8",
  check: "m5 12 4 4L19 6",
  upload: "M12 16V3m-5 5 5-5 5 5M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4",
  download: "M12 3v13m-5-5 5 5 5-5M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3",
  sparkles:
    "m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3ZM20 2v4m-2-2h4M3 18v4m-2-2h4",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "m6 6 12 12M6 18 18 6",
  plus: "M12 5v14M5 12h14",
  image:
    "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2ZM3 17l6-6 5 5 3-3 4 4M16 7h.01",
  sliders: "M4 7h9m4 0h3M4 17h3m4 0h9M13 4v6M7 14v6",
  watermark:
    "M12 3c-2 4-7 8-7 12a7 7 0 0 0 14 0c0-4-5-8-7-12ZM9 16a3 3 0 0 0 3 3",
  rotate: "M3 11a9 9 0 1 1 2.7 7M3 4v7h7",
} as const;

export type IconName = keyof typeof paths;

export default function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}
