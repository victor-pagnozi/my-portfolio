import { Dumbbell } from "lucide-react";
import PrincipalName from "./PrincipalName";
import ItemKnowledge from "./ItemsKnowledge";
import Modal from "./Modal/ModalTest";

export function MiddleSide() {
  return (
    <div className="mt-40">
      {/* <Modal>Teste</Modal> */}
      <ItemKnowledge />
      <PrincipalName />
      <div className="grid grid-cols-[2fr_2fr_2fr] items-center justify-center text-center h-screen ml-40">
        <div className="grid rounded-lg h-80 w-60 bg-red-300 items-center justify-center">
          <Dumbbell size={30} />
        </div>
        <div className="grid rounded-lg h-80 w-60 bg-red-300 items-center justify-center">
          <Dumbbell size={30} />
        </div>
        <div className="grid rounded-lg h-80 w-60 bg-red-300 items-center justify-center">
          <Dumbbell size={30} />
        </div>
      </div>
    </div>
  );
}
