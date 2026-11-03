import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  variant?: "green" | "dark";
  size?: "default" | "header" | "hero" | "closing" | "dialog";
} & (
  | ({ href: string } & ComponentPropsWithoutRef<"a">)
  | ({ href?: never } & ComponentPropsWithoutRef<"button">)
);

const variants = {
  green: "bg-brand text-white hover:bg-brand-dark",
  dark: "bg-[#283b2f] text-white hover:bg-[#172c20]",
};

const sizes = {
  default: "min-h-12 gap-[18px] px-[23px] text-[13px]",
  header:
    "min-h-10 gap-4 px-[17px] text-[12px] max-[850px]:min-h-9 max-[850px]:gap-[9px] max-[850px]:px-[13px] max-[850px]:text-[10px] max-[620px]:hidden",
  hero: "min-h-12 gap-[18px] px-[23px] text-[13px] max-[850px]:min-h-[43px] max-[850px]:px-[19px] max-[850px]:text-[12px] max-[620px]:min-h-[45px] max-[620px]:gap-[14px] max-[620px]:px-[18px]",
  closing:
    "relative min-h-[43px] gap-[18px] px-[19px] text-[11px] max-[850px]:gap-2.5 max-[850px]:px-[15px] max-[850px]:text-[10px] max-[620px]:gap-[18px] max-[620px]:px-[18px] max-[620px]:text-[11px]",
  dialog: "min-h-12 w-full gap-[18px] px-[23px] text-[12px]",
};

export default function Button({
  variant = "green",
  size = "default",
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-lg text-center leading-[1.3] font-[550] whitespace-nowrap transition-[background,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_5px_14px_#24362b12] disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");

  if (props.href !== undefined) {
    return <Link {...props} className={classes} />;
  }

  return <button type="button" {...props} className={classes} />;
}
