// components/Modal.tsx
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-50 items-center">
      <div className=" rounded-lg shadow-lg my-20 w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl p-2 rounded-full hover:text-gray-50"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
