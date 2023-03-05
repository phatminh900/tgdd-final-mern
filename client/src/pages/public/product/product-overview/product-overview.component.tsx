import React from "react";
import { GiAlliedStar } from "react-icons/gi";
import { FiBox } from "react-icons/fi";
import Slider from "components/slider/slider.component";

import styles from "./product-overview.module.scss";
import { type ILinks } from "../product.container";
import {
  IProductHighlightsImgState,
  IProductModalState,
} from "../product.interface";
import ProductOverviewCarouselList from "./overview-carousel-list/overview-carousel-list.component";

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
  const productCarouselListTab = React.useMemo(
    () => [
      {
        id: crypto.randomUUID(),
        icon: <GiAlliedStar />,
        title: "Điểm nổi bật",
      },
      // colors
      ...linksColor.map((linkColor, i) => ({
        id: crypto.randomUUID(),
        icon: (
          <img
            width={40}
            height={40}
            src={imgColorsCover[i]}
            alt="Product color "
          />
        ),
        title: linkColor.title,
      })),
      {
        id: crypto.randomUUID(),
        icon: <FiBox />,
        title: "Thông số kĩ thuật",
      },
    ],
    [linksColor, imgColorsCover]
  );
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
        <ProductOverviewCarouselList
          links={links}
          productCarouselListTab={productCarouselListTab}
          onOpenProductCarousel={onOpenProductCarousel}
        />
      </ul>
    </div>
  );
};

export default ProductOverview;
