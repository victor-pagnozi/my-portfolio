import React from "react";
import { LucideIcon } from "lucide-react";

interface Props {
  color: string;
  size: number;
  icon: LucideIcon;
}

const Icon = (props: Props) => {
  return <props.icon color={props.color} size={props.size} />;
};

export default Icon;
