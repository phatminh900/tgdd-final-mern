import React, { useMemo } from "react";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { AiOutlineCaretRight } from "react-icons/ai";
import DocumentTitle from "react-document-title";
import styles from "./product.module.scss";
import { NotFound } from "../NotFound";
import { ReviewOverall } from "components";
import {
  ProductAddedToCart,
  ProductReview,
  ProductConfiguration,
  ProductPromotions,
  ProductOverview,
  ProductGeneralInformation,
} from "./product.import";
import useProductHook from "./product.hook";
import BtnBuy from "components/btn/btn-buy/btn-buy.component";
import Price from "components/price/price.component";

import {
  ILaptopDocument,
  IPhoneDocument,
} from "interfaces/allProductsType.interface";
import { isPhoneDocument } from "utils/recognizeDocument";
import { getProductReactRouter, Resources } from "service/product.service";
import ProductStorage from "./product-storage/product-storage.component";
import ProductColor from "./product-color/product-color.component";
import ProductModal from "./product-modal/product-modal.component";
import ProductHeader from "./product-header/product-header.component";
import { useEffect } from "react";

export interface ILinks {
  id: string;
  title: string;
  hash: string;
}

const Product = () => {
  const currentProduct = useLoaderData() as IPhoneDocument | ILaptopDocument;

  const {
    productModalState,
    currentColor,
    isProductAdded,
    slidesImgs,
    onToggleModal,
    currentHighlightsImgNumber,
    onSetCurrentHighlightsImgNumber,
    onOpenCheckoutModal,
    addToCart,
    linksColor,
    changeCurrentStorage,
    changeCurrentColor,
    setIsProductAdded,
    width,
    onOpenProductCarousel,
    links,
  } = useProductHook(currentProduct);
  // configuration-modal
  if (!currentProduct) return <NotFound />;
  useEffect(() => {
    document.title = currentProduct.title;
  });
  return (
    <section className={styles.product}>
      <ProductModal
        productModalState={productModalState}
        onSetCurrentHighlightsImgNumber={onSetCurrentHighlightsImgNumber}
        currentHighlightsImgNumber={currentHighlightsImgNumber}
        linksColor={linksColor}
        slidesImgs={slidesImgs}
        links={links}
        isOpenModal={productModalState.isOpenModal}
        onToggleModal={onToggleModal}
        currentProduct={currentProduct}
        addToCart={addToCart}
        currentColor={currentColor}
        onChangeCurrentColor={changeCurrentColor}
      />
      <ProductHeader currentProduct={currentProduct} />
      <div className={`${styles.main} flex`}>
        {width <= 1200 ? (
          <>
            <ProductOverview
              onSetCurrentHighlightsImgNumber={onSetCurrentHighlightsImgNumber}
              currentHighlightsImgNumber={currentHighlightsImgNumber}
              linksColor={linksColor}
              links={links}
              slideImgs={slidesImgs}
              currentProduct={currentProduct}
              onOpenProductCarousel={onOpenProductCarousel}
              tab={links[0].hash}
              isOpenModal={productModalState.isOpenModal}
            />

            <div className={`${styles.info}  flex-vt-ct`}>
              <h3 className={styles.title}>
                Điện thoại {currentProduct.title}{" "}
              </h3>
              <a href="#reviews" className="flex-vt-ct">
                <ReviewOverall
                  ratingAverage={currentProduct.ratingAverage}
                  ratingQuantity={currentProduct.ratingQuantity}
                  className={styles.reviews}
                />
                <span className={styles["reviews__text"]}>
                  {currentProduct.ratingQuantity} Đánh giá
                </span>
              </a>
            </div>
            <ProductStorage
              changeCurrentStorage={changeCurrentStorage}
              currentProduct={currentProduct}
            />
            <ProductColor
              onChangeCurrentColor={changeCurrentColor}
              currentColor={currentColor}
              colors={currentProduct.colors}
            />
            <div>
              <div className={`${styles.price} flex-vt-ct`}>
                Giá: <Price price={currentProduct.price} />
              </div>
            </div>
            <BtnBuy
              onClick={() => {
                onOpenCheckoutModal();
                setIsProductAdded(false);
                onToggleModal();
              }}
              text="Mua ngay"
            />
            <ProductAddedToCart
              setIsProductAdded={setIsProductAdded}
              imgCover={currentProduct.imgCover}
              isProductAdded={isProductAdded}
              title={currentProduct.title}
            />
            <ProductPromotions currentProduct={currentProduct} />
            <ProductConfiguration
              // the second last
              tab={links[links.length - 2].hash}
              onToggleModal={onToggleModal}
              currentProduct={currentProduct}
              onOpenProductCarousel={onOpenProductCarousel}
            />
            <div className={styles["Product-configuration-img-box"]}>
              {isPhoneDocument(currentProduct) ? (
                <img
                  width={710}
                  height={530}
                  src={currentProduct.imgs.imgConfiguration[0]}
                  alt={`${currentProduct.title} configuration`}
                />
              ) : null}
            </div>
            <ProductGeneralInformation
              className={styles["product-general-information-box"]}
              currentProduct={currentProduct}
              imgSrc={currentProduct.imgs.imgGeneralInformation[0]}
            />
            <ProductReview currentProduct={currentProduct} />
          </>
        ) : (
          <>
            <div className={styles.left}>
              {/* <div onClick={onOpenProductCarousel.bind(listHash[0])}> */}
              <ProductOverview
                onSetCurrentHighlightsImgNumber={
                  onSetCurrentHighlightsImgNumber
                }
                currentHighlightsImgNumber={currentHighlightsImgNumber}
                linksColor={linksColor}
                links={links}
                slideImgs={slidesImgs}
                currentProduct={currentProduct}
                onOpenProductCarousel={onOpenProductCarousel}
                tab={links[0].hash}
                isOpenModal={productModalState.isOpenModal}
              />
              {/* </div> */}
              <div className={styles["Product-configuration-img-box"]}>
                {isPhoneDocument(currentProduct) ? (
                  <img
                    width={710}
                    height={530}
                    src={currentProduct.imgs.imgConfiguration[0]}
                    alt={`${currentProduct.title} configuration`}
                  />
                ) : null}
              </div>

              <div className={styles["product-general-information-box"]}>
                <ProductGeneralInformation
                  className={styles["product-general-information-box"]}
                  currentProduct={currentProduct}
                  imgSrc={currentProduct.imgs.imgGeneralInformation[0]}
                />
                <button
                  onClick={onOpenProductCarousel.bind(
                    links[links.length - 1].hash
                  )}
                  className={`${styles["product-general-information-box__btn"]} btn--border-blue`}
                >
                  Xem thêm <AiOutlineCaretRight />
                </button>
              </div>
              <ProductReview currentProduct={currentProduct} />
            </div>
            <div className={styles.right}>
              <ProductStorage
                currentProduct={currentProduct}
                changeCurrentStorage={changeCurrentStorage}
              />
              <ProductColor
                colors={currentProduct.colors}
                currentColor={currentColor}
                onChangeCurrentColor={changeCurrentColor}
              />

              <div>
                <div className={`${styles.price} flex-vt-ct`}>
                  Giá: <Price price={currentProduct.price} />
                </div>
              </div>
              <ProductPromotions currentProduct={currentProduct} />
              <BtnBuy
                onClick={() => {
                  onOpenCheckoutModal();
                  setIsProductAdded(false);
                  onToggleModal();
                }}
                text="Mua ngay"
              />
              <ProductAddedToCart
                setIsProductAdded={setIsProductAdded}
                imgCover={currentProduct.imgCover}
                isProductAdded={isProductAdded}
                title={currentProduct.title}
              />
              <ProductConfiguration
                // the second last
                tab={links[links.length - 2].hash}
                onToggleModal={onToggleModal}
                currentProduct={currentProduct}
                onOpenProductCarousel={onOpenProductCarousel}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default React.memo(Product);

export const loader = ({ params, request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const resourceReg = url.pathname?.match(/(\/.+\/)/i);
  const resource = resourceReg ? resourceReg[0].slice(1, -1) : "";

  return getProductReactRouter(resource as Resources, params.slug!);
};
