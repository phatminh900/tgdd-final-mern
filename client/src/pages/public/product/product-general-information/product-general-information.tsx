import React from "react";
import styles from "./product-general-information.module.scss";
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
          <p key={info}>{info}</p>
        ))}

        <img
          width={710}
          height={530}
          src={imgGeneralInformation}
          alt="general information about iphone"
        />
      </div>
      <Button btnType="neutral"   className={`${styles["product-general-information-box__btn"]}`}>
        Xem thêm <AiOutlineCaretRight />
      </Button>

    </div>
  );
};

export default React.memo(ProductGeneralInformation);
