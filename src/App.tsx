import React from "react";
import "./App.css";
import PrincipalName from "./components/PrincipalName.tsx";
import ItemsKnowloge from "./components/ItemsKnowlege.tsx";
import Icon from "./components/LinkeDinButton.tsx";
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
import "@radix-ui/themes/styles.css";
// import Modal from "./components/ThemeComponent.tsx";
import DialogDemo from "./components/Modal/ModalTest.tsx";
function App() {
  return (
    //with this className below, was created columns
    <div className="grid grid-cols-[0.5fr_6fr_0.5fr] items-center justify-center text-center h-screen">
      {/*  */}
      {/* ICOMS IN THE LEAFT  */}
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
      </div>
      {/* ICOMS IN THE LEAFT  */}
      {/*  */}
      {/* ITEMS IN THE MIDDLE  */}
      <div className="mt-40">
        <ItemsKnowloge />
        <PrincipalName />
        {/* MODAL ITEMS */}
        <div className="grid grid-cols-[2fr_2fr_2fr] items-center justify-center text-center h-screen ml-40">
          <div className="grid rounded-lg h-80 w-60 bg-red-300 items-center justify-center ">
            <Icon icon={Dumbbell} color="white" size={30} />
          </div>
          <div className="grid rounded-lg h-80 w-60 bg-red-300 items-center justify-center">
            <Icon icon={Dumbbell} color="white" size={30} />
          </div>
          <div className="grid rounded-lg h-80 w-60 bg-red-300 items-center justify-center">
            <Icon icon={Dumbbell} color="white" size={30} />
          </div>
        </div>
        {/* MODAL ITEMS */}
      </div>
      {/* ITEMS IN THE MIDDLE */}
      {/* ICONS IN THE RIGHT */}
      <div className="mt-8 ml-5  ">
        <div className="grid rounded-full h-20 w-20 border-2 border-red-500 items-center justify-center">
          <Icon icon={Stethoscope} color="white" size={28} />
        </div>
        <h4 className="text-white font-k2d text-1xl mr-10 mb-2">Doctors</h4>
        {/*  */}
        <div className="grid rounded-full h-20 w-20 border-2 border-pink-300 items-center justify-center">
          <Icon icon={Plane} color="white" size={28} />
        </div>
        <h4 className="text-white font-k2d text-1xl mr-10 mb-2">Travel</h4>
        {/*  */}
        <div className="grid rounded-full h-20 w-20 border-2 border-green-800 items-center justify-center">
          <Icon icon={Sprout} color="white" size={28} />
        </div>
        <h4 className="text-white font-k2d text-1xl mr-10 mb-2">Farming</h4>
        {/*  */}
        <div className="grid rounded-full h-20 w-20 border-2 border-purple-500 items-center justify-center">
          <Icon icon={Tv} color="white" size={28} />
        </div>
        <h4 className="text-white font-k2d text-1xl mr-10 mb-2">Streaming</h4>
        {/*  */}
        <div className="grid rounded-full h-20 w-20 border-2 border-orange-500 items-center justify-center">
          <Icon icon={Dumbbell} color="white" size={28} />
        </div>
        <h4 className="text-white font-k2d text-1xl mr-10 mb-2">GYM</h4>
        {/*  */}
        <div className="grid rounded-full h-20 w-20 border-2 border-yellow-500 items-center justify-center">
          <Icon icon={Building2} color="white" size={28} />
        </div>
        <h4 className="text-white font-k2d text-1xl mr-10 mb-2">Business</h4>
        {/*  */}
      </div>
      {/* ICONS IN THE RIGHT */}
      {/*  */}
    </div>
  );
}

export default App;
