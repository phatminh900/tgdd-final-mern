import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import styles from "./product-configuration.module.scss";
import { ILaptopDocument } from "interfaces/allProductsType.interface";
import { Button } from "components";
const LaptopConfiguration = ({
  title,
  configuration,
  tab,
  onOpenProductCarousel,
}: {
  tab: string;
  title: string;
  configuration: ILaptopDocument["configuration"];
  onOpenProductCarousel?: (e: React.MouseEvent) => void;
}) => {
  return (
    <div className={styles.configurations}>
      <h3 className={styles.configurations__header}>Cấu hình Laptop {title}</h3>
      <ul className={styles.configurations__list}>
        <li>
          <p>CPU</p>
          <p>
            {configuration.cpu.type} {configuration.cpu.version}
          </p>
        </li>
        <li>
          <p>Ổ cứng</p>
          <p>{configuration.internalMemory} SSD</p>
        </li>
        <li>
          <p>Màn hình</p>
          <p>
            {configuration.screen.inch}, {configuration.screen.technology}
          </p>
        </li>
        <li>
          <p>Card màn hình</p>
          <p>{configuration.cardScreen.type} </p>
        </li>
        <li>
          <p>Đặc biệt</p>
          <p>{configuration.special}</p>
        </li>
        <li>
          <p>Thiết kế</p>
          {/* @ts-ignore */}
          <p>{configuration.design}</p>
        </li>

        <li>
          <p>Thời điểm ra mắt</p>
          <p>{configuration.launchTime}</p>
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
};

export default LaptopConfiguration;
