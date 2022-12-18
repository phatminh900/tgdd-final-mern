import styles from "./product-filter.module.scss";
import { type IFilterList } from "./product-filter.type";
import { Resources } from "service/product.service";
import useProductFilterHook from "./product-filter.hook";
import ProductFilterList from "./product-filter-list.component";
interface ProductFilterProps {
  //
  filterList: IFilterList[];
  resource: Resources;
}
const ProductsFilter = ({ filterList, resource }: ProductFilterProps) => {
  const {
    isOpenFilterBox,
    setIsOpenFilterBox,
    currentFilterBox,
    setCurrentFilterBox,
    addToFilterQuery,
    unQueryFilter,
    queryFilter,
  } = useProductFilterHook(resource);
  return (
    <div className={styles["product-filter"]}>
      <ProductFilterList
        filterList={filterList}
        setCurrentFilterBox={setCurrentFilterBox}
        queryFilter={queryFilter}
        unQueryFilter={unQueryFilter}
        addToFilterQuery={addToFilterQuery}
        isOpenFilterBox={isOpenFilterBox}
        currentFilterBox={currentFilterBox}
        setIsOpenFilterBox={setIsOpenFilterBox}
      />
    </div>
  );
};

export default ProductsFilter;
