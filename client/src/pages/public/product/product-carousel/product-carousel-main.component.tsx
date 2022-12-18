import React from "react";
import { useLocation } from "react-router-dom";
import { ILinks } from "../product.container";
import styles from "./product-carousel.module.scss";

type ProductCarouselMainProps = {
  tabElements: JSX.Element[] ;
  links: ILinks[];
};
const ProductCarouselMain = ({
  tabElements,
  links,
}: ProductCarouselMainProps) => {
  const { hash } = useLocation();
  return (
    <div className={styles["product-details__main"]}>
      {
        tabElements[
          links.findIndex(
            (link) => encodeURI(link.hash) === hash.replace("#", "")
          )
        ]
      }
    </div>
  );
};

export default ProductCarouselMain;
