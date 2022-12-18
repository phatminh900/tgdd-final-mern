import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ILinks } from "../product.container";
import styles from "./product-carousel.module.scss";

type ProductCarouselListProps = {
  links: ILinks[];
};
const ProductCarouselList = ({ links }: ProductCarouselListProps) => {
  const { hash } = useLocation();

  const navigate = useNavigate();
  return (
    <ul className={`${styles["product-details__list"]} flex`}>
      {links.map((link, i) => {
        return (
          <li
            data-test={`#${encodeURI(link.hash)}`}
            data-testid={`#${encodeURI(link.hash)}`}
            className={`${styles["product-details__title-list"]} ${
              encodeURI(link.hash) === hash.replace("#", "")
                ? styles.active
                : ""
            }`}
            key={link.title}
          >
            <button
              onClick={() => {
                navigate(`#${link.hash}`);
              }}
            >
              {link.title}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductCarouselList;
