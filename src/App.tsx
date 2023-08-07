import React from "react";
import "./App.css";
import PrincipalName from "./components/PrincipalName.tsx";
import ItemsKnowloge from "./components/ItemsKnowlege.tsx";
import FacebookButton from "./components/FacebookButton.tsx";
import Icon from "./components/LinkeDinButton.tsx";
import { Facebook, Github, Linkedin } from "lucide-react";
function App() {
  return (
    //with this className below, was created columns
    <div className="grid grid-cols-[0.5fr_6fr_0.5fr] items-center justify-center text-center h-screen">
      <div>
        {/* <FacebookButton /> */}
        <div className="grid rounded-full h-20 w-20 border-2 border-blue-500 items-center justify-center mt-40 ml-5 mr-5 mb-5">
          <Icon icon={Facebook} color="white" size={35} />
        </div>
        <div className="grid rounded-full h-20 w-20 border-2  border-green-500 items-center justify-center ml-5 mr-5 mb-5">
          <Icon icon={Github} color="white" size={35} />
        </div>
        <div className="grid rounded-full h-20 w-20 border-2 border-blue-300 items-center justify-center ml-5 mr-5 mb-5">
          <Icon icon={Linkedin} color="white" size={35} />
        </div>
      </div>
      <div>
        <ItemsKnowloge />
        <PrincipalName />
      </div>
      <div>
        <FacebookButton />
        <FacebookButton />
        <FacebookButton />
      </div>
      l,
    </div>
  );
}

export default App;
