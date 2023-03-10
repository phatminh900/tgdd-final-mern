import LaptopList from "./laptops-list.component";
import styles from "./laptop.module.scss";
import DocumentTitle from "react-document-title";
import { ProductHeader } from "components";
import useLaptopsHook from "./laptops.hooks";
import ProductsFilter from "components/product/product-filter/product-filter.container";
import { Resources } from "service/product.service";
import { useLoaderData } from "react-router-dom";
import { ILaptopDocument } from "interfaces/allProductsType.interface";
const Laptops = () => {
  //
  const laptops = useLoaderData() as ILaptopDocument[];
  const { headerLinks, filterList, resource } = useLaptopsHook();

  return (
    <DocumentTitle title="Laptops-TGDD">
      <section className={styles.laptop}>
        <ProductHeader links={headerLinks} />
        <ProductsFilter
          resource={resource as Resources}
          filterList={filterList}
        />
        <LaptopList laptops={laptops} />
      </section>
    </DocumentTitle>
  );
};

export default Laptops;
