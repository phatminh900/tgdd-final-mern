import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import styles from "./product-configuration.module.scss";
import { ICurrentProduct, IProductModalState } from "../product.interface";
import { Button } from "components";
import {
  ILaptopDocument,
  IPhoneDocument,
} from "interfaces/allProductsType.interface";
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
  if (type === "phone") {
    const phoneConfiguration = configuration as IPhoneDocument["configuration"];

    content = (
      <div className={styles.configurations}>
        <h3 className={styles.configurations__header}>
          Cấu hình điện thoại {title}
        </h3>
        <ul className={styles.configurations__list}>
          <li>
            <p>Màn hình</p>
            <p>
              {phoneConfiguration.monitor.technology} ,
              {phoneConfiguration.monitor.broadScreen}"
            </p>
          </li>
          <li>
            <p>Hệ điều hành</p>
            <p>
              {phoneConfiguration.operatingSystem.type}{" "}
              {phoneConfiguration.operatingSystem.number}
            </p>
          </li>
          <li>
            <p>Camera sau</p>
            <p>
              {phoneConfiguration.rearCam.quantity}camera{" "}
              {phoneConfiguration.rearCam.quality}
              MP
            </p>
          </li>
          <li>
            <p>Camera trước</p>
            <p>{phoneConfiguration.frontCam.quality} MP</p>
          </li>
          <li>
            <p>Chip</p>
            <p>
              {phoneConfiguration.chip.type}{" "}
              {phoneConfiguration.chip.technology}{" "}
              {phoneConfiguration.chip.number}
            </p>
          </li>
          <li>
            <p>Ram</p>
            <p>{phoneConfiguration.ram} GB</p>
          </li>
          <li>
            <p>Bộ nhớ trong</p>
            <p>{phoneConfiguration.internalMemory}GB</p>
          </li>
          <li>
            <p>Sim</p>
            <p>
              {phoneConfiguration.sim.quantity} {phoneConfiguration.sim.type}SIM
            </p>
          </li>
          <li>
            <p>Pin,Sạc</p>
            <p>
              {phoneConfiguration.battery.volume} mAh,{" "}
              {phoneConfiguration.battery.charge}W
            </p>
          </li>
        </ul>
        <Button
          btnType="neutral"
          onClick={onOpenProductCarousel?.bind(tab)}
          className={`${styles.configurations__btn} `}
        >
          Xem thêm cấu hình chi tiết <AiOutlineCaretRight />
        </Button>
      </div>
    );
  }
  if (type === "laptop") {
    const laptopConfiguration =
      configuration as ILaptopDocument["configuration"];
    content = (
      <div className={styles.configurations}>
        <h3 className={styles.configurations__header}>
          Cấu hình Laptop {title}
        </h3>
        <ul className={styles.configurations__list}>
          <li>
            <p>CPU</p>
            <p>
              {laptopConfiguration.cpu.type} {laptopConfiguration.cpu.version}
            </p>
          </li>
          <li>
            <p>Ổ cứng</p>
            <p>{laptopConfiguration.internalMemory} SSD</p>
          </li>
          <li>
            <p>Màn hình</p>
            <p>
              {laptopConfiguration.screen.inch},{" "}
              {laptopConfiguration.screen.technology}
            </p>
          </li>
          <li>
            <p>Card màn hình</p>
            <p>{laptopConfiguration.cardScreen.type} </p>
          </li>
          <li>
            <p>Đặc biệt</p>
            <p>{laptopConfiguration.special}</p>
          </li>
          <li>
            <p>Thiết kế</p>
            {/* @ts-ignore */}
            <p>{laptopConfiguration.design}</p>
          </li>

          <li>
            <p>Thời điểm ra mắt</p>
            <p>{laptopConfiguration.launchTime}</p>
          </li>
        </ul>

        <Button
          className={styles.configurations__btn}
          onClick={onOpenProductCarousel?.bind(tab)}
          btnType="neutral"
        >
          Xem thêm cấu hình chi tiết <AiOutlineCaretRight />
        </Button>
      </div>
    );
  }
  return content;
};

export default (ProductConfiguration);
