export default function Logo({
  name,
  compact = false,
}: {
  name: string;
  compact?: boolean;
}) {
  return (
    <span
      className={`inline-flex max-w-[260px] items-center gap-[9px] leading-none font-[720] whitespace-nowrap max-[620px]:max-w-[min(260px,53vw)] ${compact ? "text-[18px] tracking-[-0.8px]" : "text-[23px] tracking-[-1px] max-[850px]:text-[21px]"}`}
    >
      <span
        className={`grid shrink-0 place-items-center text-brand ${compact ? "size-[26px] [&_svg]:size-[19px]" : "size-[33px] max-[620px]:size-7"}`}
        aria-hidden="true"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3z" fill="currentColor" />
          <path d="m17 12 5 5-5 5-5-5 5-5Z" fill="currentColor" />
        </svg>
      </span>
      <span className="min-w-0 truncate">{name}</span>
      <span className="-ml-2 text-brand">.</span>
    </span>
  );
}
