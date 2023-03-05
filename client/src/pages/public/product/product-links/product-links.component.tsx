import { LinksHierarchy } from "components";
type ProductLinksProps = {
  category: string;
  firm: string;
};
const ProductLinks = ({ category, firm }: ProductLinksProps) => {
  const productLinks = [
    { to: category.toLowerCase(), label: category },
    { to: `${category.toLowerCase()}?firm=${firm}`, label: firm },
  ];

  return <LinksHierarchy links={productLinks} />;
};

export default ProductLinks;
