import React from "react";
import { useLocation } from "react-router-dom";

import Slider from "components/slider/slider.component";

import styles from "./product-overview.module.scss";
import { type ILinks } from "../product.container";
import {
  IProductHighlightsImgState,
  IProductModalState,
} from "../product.interface";
import useProductOverview from "./useProductOverview.hook";

interface ProductOverviewProps
  extends Omit<IProductModalState, "onToggleModal">,
    IProductHighlightsImgState {
  slideImgs: string[];
  isOpenModal: boolean;
  imgColorsCover: string[];
  linksColor: { id: string; hash: string; title: string }[];
  links: ILinks[];
  onOpenProductCarousel: (e: React.MouseEvent) => void;
  tab: string;
}
const ProductOverview = ({
  isOpenModal,
  tab,
  imgColorsCover,
  linksColor,
  links,
  onOpenProductCarousel,
  onSetCurrentHighlightsImgNumber,
  slideImgs,
  currentHighlightsImgNumber,
}: ProductOverviewProps) => {
  const productCarouselListTab = useProductOverview(linksColor, imgColorsCover);
  const { hash } = useLocation();
  return (
    <div className={styles["product-overview"]}>
      <Slider
        onSetCurrentSlideNumber={onSetCurrentHighlightsImgNumber}
        currentSlideNumber={currentHighlightsImgNumber}
        isOpenModal={isOpenModal}
        onToggleModal={(ev) =>
          onOpenProductCarousel.call(tab, ev as React.MouseEvent)
        }
        usingDots={false}
        className={styles["product-overview__slider"]}
        slides={slideImgs}
        maxSlideLength={slideImgs.length}
      />

      <ul
        className={`${styles["product-overview__carousel-list"]} flex gap-12px`}
      >
        {productCarouselListTab.map((el, i) => (
          <li key={el.id}>
            <button onClick={onOpenProductCarousel.bind(links[i].hash)}>
              <p
                className={`${styles["product-overview__tab-img"]} ${
                  links[i].hash === hash.replace("#", "") ||
                  (hash === "" && i === 0)
                    ? styles.active
                    : ""
                } flex-both-ct `}
              >
                {el.icon}
              </p>
              <p className={styles["product-overview__tab-title"]}>
                {el.title}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(ProductOverview);
