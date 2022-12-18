import React from "react";
import {
  IPhoneDocument,
  ILaptopDocument,
  IProductDocument,
} from "interfaces/allProductsType.interface";
import styles from "./button-storage.module.scss";
interface ButtonStorageProps {
  configuration:
    | ILaptopDocument["configuration"]
    | IPhoneDocument["configuration"];
  changeCurrentStorage?: (e: React.MouseEvent) => void;
  url: string;
  className?: string;
  value: string | number;
}
const ButtonStorage = ({
  configuration,
  changeCurrentStorage,
  url,
  className,
  value,
}: ButtonStorageProps) => {
  return (
    <button
      data-url={url}
      onClick={changeCurrentStorage}
      className={`${styles.btn} btn ${className} ${
        configuration.internalMemory === +value ? styles.active : ""
      }`}
    >
      {value}GB
    </button>
  );
};

export default ButtonStorage;
