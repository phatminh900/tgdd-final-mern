import React from "react";
import { Button } from "components";
import styles from "../product.module.scss";
import {
  ILaptopDocument,
  IPhoneDocument,
} from "interfaces/allProductsType.interface";

type ProductStorageProps = {
  storage:number[];
  internalMemory:number;
  otherVersions:string[]
  changeCurrentStorage: (url: string) => void;
};
const ProductStorage = ({
  storage,
  internalMemory,
  otherVersions,
  changeCurrentStorage,
}: ProductStorageProps) => {
  return (
    <div className={`${styles.storage} flex`}>
      {storage.map((st: number, i: number) => (
        <Button
        key={st}
          btnType="storage"
          onClick={() => changeCurrentStorage(otherVersions[i])}
          className={`${styles["btn-storage"]}  `}
          active={  internalMemory === +st }
          
        >
          {st}GB
        </Button>
      ))}
    </div>
  );
};

export default ProductStorage;
