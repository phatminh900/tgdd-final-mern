import React from "react";
import { ICurrentProduct, IProductModalState } from "../product.interface";
import {
  ILaptopDocument,
  IPhoneDocument,
} from "interfaces/allProductsType.interface";
import PhoneConfiguration from "./phone-configuration.component";
import LaptopConfiguration from "./laptop-configuration.component";
interface ProductConfigurationProps extends IProductModalState {
  tab: string;
  configuration: ICurrentProduct["currentProduct"]["configuration"];
  type: "phone" | "laptop";
  title: string;
}

const ProductConfiguration = ({
  type,
  configuration,
  title,
  tab,
  onOpenProductCarousel,
}: ProductConfigurationProps) => {
  let content = <></>;
  (tab);
  if (type === "phone") {
    const phoneConfiguration = configuration as IPhoneDocument["configuration"];

    content = (
      <PhoneConfiguration
      onOpenProductCarousel={onOpenProductCarousel}
        configuration={phoneConfiguration}
        title={title}
        tab={tab}
      />
    );
  }
  if (type === "laptop") {
    const laptopConfiguration =
      configuration as ILaptopDocument["configuration"];
    content = (
      <LaptopConfiguration
      onOpenProductCarousel={onOpenProductCarousel}
        configuration={laptopConfiguration}
        title={title}
        tab={tab}
      />
    );
  }
  return content;
};

export default ProductConfiguration;
