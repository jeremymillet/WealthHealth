import { PropsWithChildren } from "react";
import './Modal.css'
import { Modal } from "antd";

type ModalProps = PropsWithChildren<{
  open: boolean;   
  setIsOpen: (open: boolean) => void
}>;



const ModalComponent: React.FC<ModalProps> = ({ children, open, setIsOpen }) => {
    return (
      <Modal open={open}  onCancel={() => setIsOpen(false)} footer={null} centered width={500}> 
        <div className="text-container">
          {children}
        </div>
      </Modal>
    
  );
}

export default ModalComponent;