import React from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.scss";
interface ModalProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
}

document.body.insertAdjacentHTML(
  "afterbegin",
  `<div data-testid='modal' id='modal'></div>`
);
const Modal = ({ children, className, isOpen }: ModalProps) => {
  const ModalEl = () => {
    return isOpen ? (
      <div className={`${styles.overlay} `}>
        <div className={`${styles.modal} ${className}`}>{children}</div>
      </div>
    ) : null;
  };
  return createPortal(<ModalEl />, document.querySelector("#modal")!);
};
export default Modal;
