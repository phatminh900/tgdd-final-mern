import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import styles from "./btn-submit.module.scss";
import Button from "../button.component";
const BtnSubmit = ({
  text,
  isLoading,
  isSuccess,
  className,
}: {
  text: string;
  isLoading: boolean;
  isSuccess: boolean;
  className?: string;
}) => {
  return (
    <Button btnType="secondary" className={`${styles.btn} ${className}`} disabled={isSuccess}>
      {!isSuccess && !isLoading && text}
      {isLoading && text}
      {isSuccess && <BsCheckCircle />}
    </Button>
  );
};

export default BtnSubmit;
