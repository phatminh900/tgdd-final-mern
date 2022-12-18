import ProductFilterItem from "./product-filter-item.component";
import styles from "./product-filter.module.scss";
import { IFilterList, IProductFilterProps } from "./product-filter.type";
interface ProductFilterListProps extends IProductFilterProps {
  filterList: IFilterList[];
}
const ProductFilterList = ({
  filterList,
  isOpenFilterBox,
  currentFilterBox,
  setIsOpenFilterBox,
  setCurrentFilterBox,
  addToFilterQuery,
  unQueryFilter,
  queryFilter,
}: ProductFilterListProps) => {
  return (
    <ul className={`${styles["product-filter__list"]} flex-vt-ct gap-12px`}>
      {filterList.map((filter) => (
        <ProductFilterItem
          key={filter.id}
          filter={filter}
          setCurrentFilterBox={setCurrentFilterBox}
          queryFilter={queryFilter}
          unQueryFilter={unQueryFilter}
          addToFilterQuery={addToFilterQuery}
          isOpenFilterBox={isOpenFilterBox}
          currentFilterBox={currentFilterBox}
          setIsOpenFilterBox={setIsOpenFilterBox}
        />
      ))}
    </ul>
  );
};

export default ProductFilterList;
