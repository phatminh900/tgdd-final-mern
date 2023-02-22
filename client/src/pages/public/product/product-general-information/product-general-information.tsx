import React from "react";
import styles from "./product-general-information.module.scss";
import { v4 as uuidv4 } from "uuid";
import { ICurrentProduct } from "../product.interface";
import { Button } from "components";
import { AiOutlineCaretRight } from "react-icons/ai";
interface ProductGeneralInformationProps {
  imgSrc: string;
  generalInformation:string[],
  imgGeneralInformation:string
  className?: string;
  onClick?:()=>void
}
const ProductGeneralInformation = ({
  generalInformation,
  imgGeneralInformation,
  onClick,
  className,
}: ProductGeneralInformationProps) => {
  return (
    <div className={styles["product-general-information-box"]}>
      <div className={`${styles["general-information"]} ${className}`}>
        {/*  */}
        <h3>Thông tin sản phẩm</h3>
        {generalInformation.map((info) => (
          <p key={uuidv4()}>{info}</p>
        ))}

        <img
          width={710}
          height={530}
          src={imgGeneralInformation}
          alt="general information about iphone"
        />
      </div>
      <Button btnType="neutral">
        Xem thêm <AiOutlineCaretRight />
      </Button>
      <button
        onClick={onClick}
        className={`${styles["product-general-information-box__btn"]} btn--border-blue`}
      >
        Xem thêm <AiOutlineCaretRight />
      </button>
    </div>
  );
};

export default React.memo(ProductGeneralInformation);
