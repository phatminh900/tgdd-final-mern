import { URL_API } from "app-constants/apiUrl.constant";
import axios from "axios";
import {
  IPhoneDocument,
  ILaptopDocument,
  IProductDocument,
} from "interfaces/allProductsType.interface";
import {
  getDataFromApiReactRouter,
  handleErrorApiReactRouter,
} from "utils/service.util";

export type PhoneFirm = "Apple" | "Samsung" | "Realme" | "Poco";
export type LaptopFirm = "Lenovo" | "Macbook" | "Acer";
export type Resources = "phones" | "laptops" | "ipads" | "products";

const getTypeData = (
  data: IPhoneDocument[] | ILaptopDocument[],
  resource: Resources
) => {
  switch (resource) {
    case "phones":
      return data as IPhoneDocument[];
    case "laptops":
      return data as ILaptopDocument[];
    case "products":
      return data as unknown as IProductDocument[];

    case "ipads":
      return data as any[];

    default:
      const _exhaustiveCheck: never = resource;
      return _exhaustiveCheck;
  }
};

export const getProductsReactRouter = async (
  resource: Resources,
  query?: string
) => {
  try {
    const url = `${URL_API}${resource}/?original=true&${query ? query : ""}`;

    const { data: dataApi } = await getDataFromApiReactRouter(url, "get");
    // resource === home is a little bit different

    const data = getTypeData(
      dataApi as IPhoneDocument[] | ILaptopDocument[],
      resource
    );

    return data;
  } catch (err) {
    return handleErrorApiReactRouter(err);
  }
};

export const getProductReactRouter = async (
  resource: Resources,
  slug: string
) => {
  try {
    const { data } = await getDataFromApiReactRouter(
      `${URL_API}${resource}/${slug}`,
      "get"
    );
    return data;
  } catch (err) {
    return handleErrorApiReactRouter(err);
  }
};

const getProductSlug = async (resourse: Resources, slug: string) => {
  try {
    const response = await axios.get<{ data: IPhoneDocument[] }>(
      `${URL_API}${resourse}/?slug=${slug}`
    );
    const { data } = response.data;
    // used for other version
    return data;
  } catch (error) {
    return handleErrorApiReactRouter(error);
  }
};

export { getProductSlug };
