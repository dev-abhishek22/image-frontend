import Icon, { type IconName } from "@/components/common/Icon";
import type { ToolColor } from "@/types/image-tool";

const colors: Record<ToolColor, string> = {
  green: "bg-[#eef4e9] text-[#648354]",
  blue: "bg-[#eaf1fa] text-[#6891be]",
  orange: "bg-[#fdf0e4] text-[#ce975f]",
  purple: "bg-[#f0ecfa] text-[#a18bc2]",
  pink: "bg-[#f9ecf1] text-[#c389a0]",
  yellow: "bg-[#faf5e5] text-[#b8a25b]",
  teal: "bg-[#e9f5f3] text-[#78a6a0]",
  lilac: "bg-[#f3edf8] text-[#ad92c0]",
};

export default function ToolIcon({
  name,
  color = "green",
  iconSize = 25,
}: {
  name: IconName;
  color?: ToolColor;
  iconSize?: number;
}) {
  return (
    <span
      className={`inline-flex size-[45px] shrink-0 items-center justify-center rounded-[10px] max-[1100px]:size-10 max-[1100px]:rounded-[9px] max-[850px]:size-11 max-[620px]:size-[37px] max-[620px]:rounded-lg max-[620px]:[&_svg]:size-[22px] ${colors[color]}`}
    >
      <Icon name={name} width={iconSize} height={iconSize} />
    </span>
  );
}
