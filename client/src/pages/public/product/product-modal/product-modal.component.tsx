import React from "react";
import styles from "../product.module.scss";
import { Modal } from "components";
import { InitialStateProductModal } from "../product.hook";
import { ProductCarousel, ProductCheckout } from "../product.import";
import { ILinks } from "../product.container";

import { ICartProductDocument } from "store/cart/cartProductDocument";
import { IProductType } from "interfaces/allProductsType.interface";
type ProductModalProps = {
  productModalState: InitialStateProductModal;
  linksColor: {
    id: string;
    hash: string;
    title: string;
  }[];
  promotion: string[];
  links: ILinks[];
  isOpenModal: boolean;
  currentHighlightsImgNumber: number;
  slidesImgs: string[];
  configuration: IProductType["currentProduct"]["configuration"];
  imgConfiguration: string;
  type: "laptop" | "phone";
  title: string;
  price: number;
  id: string;
  colors: string[];
  imgColorsCover: string[];
  onToggleModal: (
    e?: React.MouseEvent<Element, MouseEvent> | undefined
  ) => void;
  imgs: IProductType["currentProduct"]["imgs"];
  imgGeneralInformation: string;
  generalInformation: string[];
  onSetCurrentHighlightsImgNumber: (number: number) => void;
  addToCart: (product: ICartProductDocument) => void;
  onChangeCurrentColor: (color: string) => void;
  currentColor: string;
};
const ProductModal = ({
  productModalState,
  linksColor,
  colors,
  imgColorsCover,
  id,
  promotion,
  price,
  links,
  slidesImgs,
  type,
  imgGeneralInformation,
  generalInformation,
  configuration,
  imgConfiguration,
  title,
  imgs,
  currentHighlightsImgNumber,
  onSetCurrentHighlightsImgNumber,
  addToCart,
  currentColor,
  onChangeCurrentColor,
  onToggleModal,
}: ProductModalProps) => {
  return (
    <Modal isOpen={productModalState.isOpenModal} className={styles.modal}>
      {!productModalState.isOpenCheckoutModal ? (
        <ProductCarousel
          type={type}
          title={title}
          imgConfiguration={imgConfiguration}
          configuration={configuration}
          onSetCurrentHighlightsImgNumber={onSetCurrentHighlightsImgNumber}
          currentHighlightsImgNumber={currentHighlightsImgNumber}
          linksColor={linksColor}
          slidesImgs={slidesImgs}
          imgs={imgs}
          generalInformation={generalInformation}
          imgGeneralInformation={imgGeneralInformation}
          links={links}
          isOpenModal={productModalState.isOpenModal}
          onToggleModal={onToggleModal}
        />
      ) : (
        <>
          <ProductCheckout
            addToCart={addToCart}
            title={title}
            imgColorsCover={imgColorsCover}
            colors={colors}
            id={id}
            promotion={promotion}
            price={price}
            currentColor={currentColor}
            onChangeCurrentColor={onChangeCurrentColor}
            onToggleModal={onToggleModal}
          />
        </>
      )}
    </Modal>
  );
};

export default ProductModal;
