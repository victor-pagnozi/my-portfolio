import React from "react";
import "./App.css";
import PrincipalName from "./components/PrincipalName.tsx";
import ItemsKnowloge from "./components/ItemsKnowlege.tsx";
import FacebookButton from "./components/FacebookButton.tsx";
import Icon from "./components/LinkeDinButton.tsx";
import { Facebook, Github, Linkedin, Stethoscope, Plane } from "lucide-react";
function App() {
  return (
    //with this className below, was created columns
    <div className="grid grid-cols-[0.5fr_6fr_0.5fr] items-center justify-center text-center h-screen">
      {/*  */}
      {/*  */}
      <div className="mt-20 ml-5">
        {/* <FacebookButton /> */}
        <div className="grid rounded-full h-20 w-20 border-2 border-blue-500 items-center justify-center mb-5">
          <Icon icon={Facebook} color="white" size={35} />
        </div>
        <div className="grid rounded-full h-20 w-20 border-2  border-green-500 items-center justify-center mb-5">
          <Icon icon={Github} color="white" size={35} />
        </div>
        <div className="grid rounded-full h-20 w-20 border-2 border-blue-300 items-center justify-center mb-5">
          <Icon icon={Linkedin} color="white" size={35} />
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="mt-40">
        <ItemsKnowloge />
        <PrincipalName />
      </div>
      {/*  */}
      {/*  */}
      <div className="mt-20 ml-5 ">
        <h4 className="text-white font-k2d text-1xl mr-10 mb-1">Doctors</h4>
        <div className="grid rounded-full h-20 w-20 border-2 border-blue-500 items-center justify-center mb-2">
          <Icon icon={Stethoscope} color="white" size={28} />
        </div>
        <h4 className="text-white font-k2d text-1xl mr-10 mb-1">Travel</h4>
        <div className="grid rounded-full h-20 w-20 border-2 border-blue-500 items-center justify-center mb-2">
          <Icon icon={Plane} color="white" size={28} />
        </div>
        <FacebookButton />
      </div>
      {/*  */}
      {/*  */}
    </div>
  );
}

export default App;
