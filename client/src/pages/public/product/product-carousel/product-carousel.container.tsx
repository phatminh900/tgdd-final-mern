import React from "react";
import styles from "./product-carousel.module.scss";

import ProductInfoSlide from "./product-info-carousel/product-info-carousel.component";
import { ILinks } from "../product.container";
import { BtnClose } from "components";
import ProductConfigurationCarousel from "./productconfiguration-carousel/product-configuration-carousel.component";
import {
  IProductModalState,
  IProductHighlightsImgState,
} from "../product.interface";
import { IProductType } from "interfaces/allProductsType.interface";
import ProductCarouselList from "./product-carousel-list.component";
import ProductCarouselMain from "./product-carousel-main.component";

interface ProductCarouselProps
  extends IProductModalState,
    IProductHighlightsImgState {
  slidesImgs: string[];
  imgs: IProductType["currentProduct"]["imgs"];
  configuration: IProductType["currentProduct"]["configuration"];
  title: string;
  imgConfiguration: string;
  imgGeneralInformation: string;
  generalInformation: string[];
  type: "phone" | "laptop";

  links: ILinks[];
  linksColor: { id: string; hash: string; title: string }[];
}
const ProductCarousel = ({
  links,
  imgs,
  type,
  title,
  configuration,
  imgConfiguration,
  linksColor,
  slidesImgs,
  generalInformation,
  imgGeneralInformation,
  isOpenModal,
  currentHighlightsImgNumber,
  onSetCurrentHighlightsImgNumber,
  onToggleModal,
}: ProductCarouselProps) => {
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
        key={linkColor.id}
        onToggleModal={onToggleModal}
        isOpenModal={isOpenModal}
        slidesImgs={imgs[linkColor.hash]}
      />
    )),
    <ProductConfigurationCarousel
      type={type}
      title={title}
      imgConfiguration={imgConfiguration}
      configuration={configuration}
    />,
   
  ];

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

export default ProductCarousel;
