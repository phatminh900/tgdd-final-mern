import React from "react";
import styles from "../product-overview.module.scss";
import { ILinks } from "./../../product.container";
import { useLocation } from "react-router-dom";
const ProductOverviewCarouselList = ({
  onOpenProductCarousel,
  links,
  productCarouselListTab,
}: {
  links: ILinks[];
  productCarouselListTab: { id: string; icon: JSX.Element; title: string }[];
  onOpenProductCarousel: (e: React.MouseEvent) => void;
}): JSX.Element => {
  const { hash } = useLocation();
  const content = productCarouselListTab.map((el, i) => (
    <li data-testid="carousel-item" key={el.id}>
      <button aria-label={`carousel-${links[i].hash}`} onClick={onOpenProductCarousel.bind(links[i].hash)}>
        <p
          className={`${styles["product-overview__tab-img"]} ${
            links[i].hash === hash.replace("#", "") || (hash === "" && i === 0)
              ? styles.active
              : ""
          } flex-both-ct `}
        >
          {el.icon}
        </p>
        <p className={styles["product-overview__tab-title"]}>{el.title}</p>
      </button>
    </li>
  ));
  return <>{content}</>;
};

export default ProductOverviewCarouselList;
