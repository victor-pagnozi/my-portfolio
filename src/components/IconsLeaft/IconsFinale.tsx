import React from "react";
import Icon from "../LinkeDinButton";
import "@radix-ui/themes/styles.css";
import {
  Facebook,
  Github,
  Linkedin,
  Stethoscope,
  Plane,
  Sprout,
  Tv,
  Dumbbell,
  Building2,
} from "lucide-react";

export default function IconsFinale (){
return

<div className="mt-20 ml-5 ">
  <div className="grid rounded-full h-20 w-20 border-2 border-blue-500 items-center justify-center mb-5">
    <Icon icon={Facebook} color="white" size={35} />
  </div>
  {/*  */}
  <div className="grid rounded-full h-20 w-20 border-2  border-green-500 items-center justify-center mb-5">
    <Icon icon={Github} color="white" size={35} />
  </div>
  {/*  */}
  <div className="grid rounded-full h-20 w-20 border-2 border-blue-300 items-center justify-center mb-5">
    <Icon icon={Linkedin} color="white" size={35} />
  </div>
</div>;
}
