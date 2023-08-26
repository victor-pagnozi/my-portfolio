import { LucideIcon } from "lucide-react";

export interface IconProps {
  icon: LucideIcon;
}

const Icon = (props: IconProps) => {
  return <props.icon  />;
};

export default Icon;
