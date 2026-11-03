"use client";

import useDialog from "@/utils/hooks/useDialog";
import Icon from "@/components/common/Icon";
import Button from "@/components/common/Button";
import ToolIcon from "@/components/common/ToolIcon";
import CheckBadge from "@/components/common/CheckBadge";
import type { ImageTool } from "@/types/image-tool";

export default function ToolDetailsDialog({
  tool,
  onClose,
}: {
  tool: ImageTool | null;
  onClose: () => void;
}) {
  const dialogRef = useDialog(tool !== null);

  return (
    <dialog
      ref={dialogRef}
      className="fixed top-1/2 left-1/2 m-0 max-h-[calc(100dvh-48px)] w-[min(440px,calc(100%-32px))] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[17px] border border-[#e0e6d8] bg-[#fffefb] p-0 text-foreground shadow-[0_30px_100px_#182b1b33] backdrop:bg-[#14261980] backdrop:backdrop-blur-[5px]"
      aria-labelledby="tool-dialog-title"
      onClose={() => onClose()}
      onCancel={() => onClose()}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {tool && (
        <div className="relative p-[34px] max-[620px]:p-7">
          <button
            type="button"
            className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-[#f1f4ec] text-[#87967a] hover:bg-[#e7eede]"
            aria-label="Close tool details"
            onClick={() => onClose()}
          >
            <Icon name="close" width="20" height="20" />
          </button>
          <ToolIcon name={tool.icon} color={tool.color} iconSize={27} />
          <span className="eyebrow mt-6 block text-[8px] tracking-[1.5px]">
            COMING TO THE TOOLBOX
          </span>
          <h2 id="tool-dialog-title" className="mt-[9px] mb-[11px] text-[30px]">
            {tool.name}
          </h2>
          <p className="m-0 text-[13px] leading-[1.85] text-muted">
            {tool.description}
          </p>
          <p className="mt-4 rounded-lg border border-line bg-background px-3 py-2 text-xs leading-6 text-muted">
            This editor is not available yet. Planned features include:
          </p>
          <ul className="mb-2 grid list-none gap-[13px] py-[23px]">
            {tool.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2.5 text-[12px] leading-[1.6] text-muted"
              >
                <CheckBadge /> {feature}
              </li>
            ))}
          </ul>
          <Button size="dialog" onClick={() => onClose()}>
            Back to browsing <Icon name="arrow" width="17" height="17" />
          </Button>
        </div>
      )}
    </dialog>
  );
}
