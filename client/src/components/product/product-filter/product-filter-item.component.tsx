import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

import styles from "./product-filter.module.scss";
import { IFilterList, IProductFilterProps } from "./product-filter.type";
interface ProductFilterItemProps extends IProductFilterProps {
  filter: IFilterList;
}
const ProductFilterItem = ({
  isOpenFilterBox,
  currentFilterBox,
  filter,
  setIsOpenFilterBox,
  setCurrentFilterBox,
  addToFilterQuery,
  unQueryFilter,
  queryFilter,
}: ProductFilterItemProps) => {
  return (
    <li
      className={`${styles["product-filter__item"]} ${
        isOpenFilterBox && currentFilterBox === filter.title
          ? styles.active
          : ""
      } `}
      key={filter.id}
    >
      <button
        onClick={() => {
          setIsOpenFilterBox((prev) => !prev);
          setCurrentFilterBox(filter.title);
        }}
        className={`${styles["product-filter__btn"]} product-filter__btn-box flex-vt-ct`}
      >
        {filter.title} <AiFillCaretDown />
      </button>
      <ul className={styles["product-filter__list-child"]}>
        <div
          className={`${styles["product-filter__options"]}  flex-vt-ct gap-12px`}
        >
          {filter.content &&
            filter.content.map((child) => {
              const { content, id, ...dataset } = child;
              return (
                <button
                  {...dataset}
                  key={id}
                  onClick={addToFilterQuery}
                  className={`${styles["product-filter__btn"]} `}
                >
                  {child.content}
                </button>
              );
            })}
        </div>
        <div
          className={`${styles["product-filter__actions"]} flex-both-ct gap-12px`}
        >
          <button onClick={unQueryFilter}>Bỏ chọn</button>
          <button onClick={queryFilter}>Xem kết quả</button>
        </div>
      </ul>
    </li>
  );
};

export default ProductFilterItem;
