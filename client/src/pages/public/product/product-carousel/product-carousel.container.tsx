import React from "react";
import styles from "./product-carousel.module.scss";
import { v4 as uuidv4 } from "uuid";

import { useLocation, useNavigate } from "react-router-dom";
import ProductInfoSlide from "./product-info-carousel/product-info-carousel.component";
import { ILinks } from "../product.container";
import ProductGeneralInformation from "../product-general-information/product-general-information";
import { BtnClose } from "components";
import ProductConfigurationCarousel from "./productconfiguration-carousel/product-configuration-carousel.component";
import {
  IProductModalState,
  ICurrentProduct,
  IProductHighlightsImgState,
} from "../product.interface";
import { IPhoneDocument } from "interfaces/allProductsType.interface";
import ProductCarouselList from "./product-carousel-list.component";
import ProductCarouselMain from "./product-carousel-main.component";

interface ProductCarouselProps
  extends IProductModalState,
    ICurrentProduct,
    IProductHighlightsImgState {
  slidesImgs: string[];
  links: ILinks[];
  linksColor: { id: string; hash: string; title: string }[];
}
const ProductCarousel = ({
  currentProduct,
  links,
  linksColor,
  slidesImgs,
  isOpenModal,
  currentHighlightsImgNumber,
  onSetCurrentHighlightsImgNumber,
  onToggleModal,
}: ProductCarouselProps) => {
  const navigate = useNavigate();
  const tabElements = [
    <ProductInfoSlide
      currentHighlightsImgNumber={currentHighlightsImgNumber}
      onSetCurrentHighlightsImgNumber={onSetCurrentHighlightsImgNumber}
      slidesImgs={slidesImgs}
      onToggleModal={onToggleModal}
      isOpenModal={isOpenModal}
    />,
    // colors,
    ...linksColor.map((linkColor) => (
      <ProductInfoSlide
        key={uuidv4()}
        onToggleModal={onToggleModal}
        isOpenModal={isOpenModal}
        slidesImgs={currentProduct.imgs[linkColor.hash]}
      />
    )),
    <ProductConfigurationCarousel currentProduct={currentProduct} />,
    <ProductGeneralInformation
      imgSrc={currentProduct.imgs.imgGeneralInformation[0]!}
      currentProduct={currentProduct}
    />,
  ];
  const { hash } = useLocation();
  return (
    <div className={styles["product-details"]}>
      <ProductCarouselList links={links} />

      <ProductCarouselMain links={links} tabElements={tabElements} />
      <button
        onClick={onToggleModal}
        className={`${styles["btn-close"]} ${styles["btn-close--small"]}`}
      >
        &times;
      </button>
      <BtnClose
        className={`${styles["btn-close"]} ${styles["btn-close--big"]}`}
        onClick={onToggleModal}
      />
    </div>
  );
};

export default React.memo(ProductCarousel);
