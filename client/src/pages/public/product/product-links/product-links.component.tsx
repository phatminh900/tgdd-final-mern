import React from "react";
import { Link } from "react-router-dom";
import styles from "../product.module.scss";
import styles1 from "./product-links.module.scss";
type ProductLinksProps = {
  category: string;
  firm: string;
};
const ProductLinks = ({ category, firm }: ProductLinksProps) => {
  return (
    <ul className={`${styles.links} links-hierarchy ${styles1.links}`}>
      <Link to={`/${category.toLowerCase()}`}>{category}</Link>
      <Link to={`/${category.toLowerCase()}?firm=${firm}`}>{firm}</Link>
    </ul>
  );
};

export default ProductLinks;
