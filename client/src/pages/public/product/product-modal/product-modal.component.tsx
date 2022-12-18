import React from "react";
import styles from "../product.module.scss";
import { Modal } from "components";
import { InitialStateProductModal } from "../product.hook";
import { ProductCarousel, ProductCheckout } from "../product.import";
import { ILinks } from "../product.container";
import {
  IPhoneDocument,
  ILaptopDocument,
} from "interfaces/allProductsType.interface";
import { ICartProductDocument } from "store/cart/cartProductDocument";

type ProductModalProps = {
  productModalState: InitialStateProductModal;
  linksColor: {
    id: string;
    hash: string;
    title: string;
  }[];
  links: ILinks[];
  isOpenModal: boolean;
  currentHighlightsImgNumber: number;
  slidesImgs: string[];
  onToggleModal: (
    e?: React.MouseEvent<Element, MouseEvent> | undefined
  ) => void;
  currentProduct: IPhoneDocument | ILaptopDocument;
  onSetCurrentHighlightsImgNumber: (number: number) => void;
  addToCart: (product: ICartProductDocument) => void;
  onChangeCurrentColor: (color:string) => void;
  currentColor: string;
};
const ProductModal = ({
  productModalState,
  linksColor,
  links,
  slidesImgs,
  currentHighlightsImgNumber,
  onSetCurrentHighlightsImgNumber,
  addToCart,
  currentColor,
  onChangeCurrentColor,
  onToggleModal,
  currentProduct,
}: ProductModalProps) => {
  return (
    <Modal isOpen={productModalState.isOpenModal} className={styles.modal}>
      {!productModalState.isOpenCheckoutModal ? (
        <ProductCarousel
          onSetCurrentHighlightsImgNumber={onSetCurrentHighlightsImgNumber}
          currentHighlightsImgNumber={currentHighlightsImgNumber}
          linksColor={linksColor}
          slidesImgs={slidesImgs}
          links={links}
          isOpenModal={productModalState.isOpenModal}
          onToggleModal={onToggleModal}
          currentProduct={currentProduct}
        />
      ) : (
        <>
          <ProductCheckout
            addToCart={addToCart}
            currentColor={currentColor}
            onChangeCurrentColor={onChangeCurrentColor}
            currentProduct={currentProduct}
            onToggleModal={onToggleModal}
          />
        </>
      )}
    </Modal>
  );
};

export default ProductModal;
