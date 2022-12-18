import React from "react";
import { ButtonStorage } from "components";
import styles from "../product.module.scss";
import {
  ILaptopDocument,
  IPhoneDocument,
} from "interfaces/allProductsType.interface";

type ProductStorageProps = {
  currentProduct: ILaptopDocument | IPhoneDocument;
  changeCurrentStorage: (e: React.MouseEvent<Element, MouseEvent>) => void;
};
const ProductStorage = ({
  currentProduct,
  changeCurrentStorage,
}: ProductStorageProps) => {

  return (
    <div className={`${styles.storage} flex`}>
      {currentProduct.storage.map((st: number, i: number) => (
        <ButtonStorage
          key={st}
          className={styles["btn-storage"]}
          configuration={currentProduct.configuration}
          changeCurrentStorage={changeCurrentStorage}
          value={st}
          url={currentProduct.otherVersions[i]}
        />
      ))}
    </div>
  );
};

export default ProductStorage;
