interface IContentProductFilter {
  content: JSX.Element;
  id: number;
}
interface IFirms extends IContentProductFilter {
  "data-firm": string;
}
interface PriceFilter extends IContentProductFilter {
  "data-lt"?: number;
  "data-gt"?: number;
}
interface IProductType extends IContentProductFilter {
  "data-operating-system": string;
}
interface IFilterList {
  id: number;
  title: string;
  content: IFirms[] | PriceFilter[] | IProductType[];
}
interface IProductFilterProps {

  isOpenFilterBox: boolean;
  currentFilterBox: string;
  setIsOpenFilterBox: (value: React.SetStateAction<boolean>) => void;
  setCurrentFilterBox: (value: React.SetStateAction<string>) => void;
  addToFilterQuery: (e: React.MouseEvent<Element, MouseEvent>) => void;
  unQueryFilter: (e: React.MouseEvent<Element, MouseEvent>) => void;
  queryFilter: () => Promise<void>;
}
export type { IFirms, PriceFilter, IProductType, IFilterList ,IProductFilterProps};
