import { DivBrackgroundModal } from "../style/modal";

interface iModal {
  children: React.ReactNode;
}
const Modal = ({ children }: iModal) => {
  return (
    <DivBrackgroundModal>
      <div className="div_background_modal">{children}</div>
    </DivBrackgroundModal>
  );
};
export default Modal;
