import React from "react";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import styles from "./product.module.scss";
import { NotFound } from "../NotFound";
import { Button } from "components";
import {
  ProductAddedToCart,
  ProductReview,
  ProductConfiguration,
  ProductPromotions,
  ProductOverview,
  ProductGeneralInformation,
} from "./product.import";
import useProductHook from "./product.hook";

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
import ProductInfo from "./product-info/product-info.component";
import ProductPrice from "./product-price/product-price.component";

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
        promotion={currentProduct.promotion}
        price={currentProduct.price}
        id={currentProduct._id}
        colors={currentProduct.colors}
        imgColorsCover={currentProduct.imgColorsCover}
        type={currentProduct.type as "phone" | "laptop"}
        title={currentProduct.title}
        imgConfiguration={currentProduct.imgs.imgConfiguration[0]}
        imgGeneralInformation={currentProduct.imgs.imgGeneralInformation[0]}
        generalInformation={currentProduct.generalInformation}
        imgs={currentProduct.imgs}
        productModalState={productModalState}
        onSetCurrentHighlightsImgNumber={onSetCurrentHighlightsImgNumber}
        currentHighlightsImgNumber={currentHighlightsImgNumber}
        linksColor={linksColor}
        slidesImgs={slidesImgs}
        links={links}
        isOpenModal={productModalState.isOpenModal}
        onToggleModal={onToggleModal}
        configuration={currentProduct.configuration}
        addToCart={addToCart}
        currentColor={currentColor}
        onChangeCurrentColor={changeCurrentColor}
      />
      <ProductHeader
        title={currentProduct.title}
        firm={currentProduct.firm}
        category={currentProduct.category}
        ratingAverage={currentProduct.ratingAverage}
        ratingQuantity={currentProduct.ratingQuantity}
      />
      <div className={`${styles.main} flex`}>
        {width <= 1200 ? (
          <>
            <ProductOverview
              onSetCurrentHighlightsImgNumber={onSetCurrentHighlightsImgNumber}
              currentHighlightsImgNumber={currentHighlightsImgNumber}
              linksColor={linksColor}
              links={links}
              slideImgs={slidesImgs}
              imgColorsCover={currentProduct.imgColorsCover}
              onOpenProductCarousel={onOpenProductCarousel}
              tab={links[0].hash}
              isOpenModal={productModalState.isOpenModal}
            />
            <ProductInfo
              ratingAverage={currentProduct.ratingAverage}
              ratingQuantity={currentProduct.ratingQuantity}
              title={currentProduct.title}
            />
            <ProductStorage
              changeCurrentStorage={changeCurrentStorage}
              otherVersions={currentProduct.otherVersions}
              storage={currentProduct.storage}
              internalMemory={currentProduct.configuration.internalMemory}
            />
            <ProductColor
              onChangeCurrentColor={changeCurrentColor}
              currentColor={currentColor}
              colors={currentProduct.colors}
            />
            <ProductPrice price={currentProduct.price} />
            <Button
              className={styles["btn-buy"]}
              btnType="primary"
              onClick={() => {
                onOpenCheckoutModal();
                setIsProductAdded(false);
                onToggleModal();
              }}
            >
              Mua ngay
            </Button>

            <ProductAddedToCart
              setIsProductAdded={setIsProductAdded}
              imgCover={currentProduct.imgCover}
              isProductAdded={isProductAdded}
              title={currentProduct.title}
            />
            <ProductPromotions promotion={currentProduct.promotion} />
            <ProductConfiguration
              // the second last
              tab={links[links.length - 2].hash}
              onToggleModal={onToggleModal}
              configuration={currentProduct.configuration}
              title={currentProduct.title}
              type={currentProduct.type as "laptop" | "phone"}
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
              onClick={onOpenProductCarousel.bind(links[links.length - 1].hash)}
              className={styles["product-general-information-box"]}
              generalInformation={currentProduct.generalInformation}
              imgGeneralInformation={
                currentProduct.imgs.imgGeneralInformation[0]
              }
              imgSrc={currentProduct.imgs.imgGeneralInformation[0]}
            />
            <ProductReview
              type={currentProduct.type}
              id={currentProduct._id}
              imgCover={currentProduct.imgCover}
              category={currentProduct.category}
              title={currentProduct.title}
              ratingAverage={currentProduct.ratingAverage}
              ratingQuantity={currentProduct.ratingQuantity}
              reviews={currentProduct.reviews}
            />
          </>
        ) : (
          <>
            <div className={styles.left}>
              <ProductOverview
                onSetCurrentHighlightsImgNumber={
                  onSetCurrentHighlightsImgNumber
                }
                currentHighlightsImgNumber={currentHighlightsImgNumber}
                linksColor={linksColor}
                links={links}
                slideImgs={slidesImgs}
                imgColorsCover={currentProduct.imgColorsCover}
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

              <ProductGeneralInformation
                onClick={onOpenProductCarousel.bind(
                  links[links.length - 1].hash
                )}
                className={styles["product-general-information-box"]}
                generalInformation={currentProduct.generalInformation}
                imgGeneralInformation={
                  currentProduct.imgs.imgGeneralInformation[0]
                }
                imgSrc={currentProduct.imgs.imgGeneralInformation[0]}
              />

              <ProductReview
                type={currentProduct.type}
                id={currentProduct._id}
                imgCover={currentProduct.imgCover}
                category={currentProduct.category}
                title={currentProduct.title}
                ratingAverage={currentProduct.ratingAverage}
                ratingQuantity={currentProduct.ratingQuantity}
                reviews={currentProduct.reviews}
              />
            </div>
            <div className={styles.right}>
              <ProductStorage
                changeCurrentStorage={changeCurrentStorage}
                otherVersions={currentProduct.otherVersions}
                storage={currentProduct.storage}
                internalMemory={currentProduct.configuration.internalMemory}
              />
              <ProductColor
                colors={currentProduct.colors}
                currentColor={currentColor}
                onChangeCurrentColor={changeCurrentColor}
              />

              <ProductPrice price={currentProduct.price} />
              <ProductPromotions promotion={currentProduct.promotion} />
              <Button
                btnType="primary"
                onClick={() => {
                  onOpenCheckoutModal();
                  setIsProductAdded(false);
                  onToggleModal();
                }}
              >
                Mua ngay
              </Button>

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
                configuration={currentProduct.configuration}
                title={currentProduct.title}
                type={currentProduct.type as "laptop" | "phone"}
                onOpenProductCarousel={onOpenProductCarousel}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Product;

export const loader = ({ params, request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const resourceReg = url.pathname?.match(/(\/.+\/)/i);
  const resource = resourceReg ? resourceReg[0].slice(1, -1) : "";

  return getProductReactRouter(resource as Resources, params.slug!);
};
