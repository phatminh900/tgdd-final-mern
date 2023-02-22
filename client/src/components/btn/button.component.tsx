import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnType: "primary" | "secondary" | "neutral"|'storage';
  active?:boolean
  className?:string
  children: React.ReactNode;
}
const Button = ({ btnType, children,active,className,...rest }: ButtonProps) => {
  const btnClasses = classNames({
    [styles.primary]: btnType === "primary",
    [styles.secondary]: btnType === "secondary",
    [styles.neutral]: btnType === "neutral",
    [styles.storage]:btnType==='storage'
  });
  return (
    <button
      className={`${styles.btn} ${btnClasses} ${active?styles.active:''} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
