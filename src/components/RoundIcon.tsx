import { LucideIcon } from "lucide-react";

interface RoundIconProps {
  circleColor: string;
  icon: LucideIcon;
}

export function RoundIcon(props: RoundIconProps) {
  return (
    <div
      className="grid rounded-full h-20 w-20
      border-2 items-center justify-center mb-5"
      style={{ borderColor: props.circleColor }}
    >
      <props.icon color="white" size="35" />
    </div>
  );
}
