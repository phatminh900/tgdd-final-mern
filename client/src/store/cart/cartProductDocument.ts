export interface ICartProductDocument {
  title: string;
  price: number;
  colors: string[];
  imgColorsCover: Array<string>;
  currentColorImgCover: string;
  id: string;
  currentColor: string;
  quantity: number;
  promotion?: string[];
  discount?: { code: string; discount: number }[];
  link: string;
}
