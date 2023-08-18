import { Facebook, Github, Linkedin } from "lucide-react";
import { RoundIcon } from "./RoundIcon";

export function LeftSideBar() {
  return (
    <div className="mt-20 ml-5 ">
      <RoundIcon icon={Facebook} circleColor="rgb(59 130 246)" />
      <RoundIcon icon={Github} circleColor="rgb(34 197 94)" />
      <RoundIcon icon={Linkedin} circleColor="rgb(147 197 253)" />
    </div>
  );
}
