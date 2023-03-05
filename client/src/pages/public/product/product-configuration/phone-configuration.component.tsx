import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import styles from "./product-configuration.module.scss";
import { IPhoneDocument } from "interfaces/allProductsType.interface";
import { Button } from "components";

const PhoneConfiguration = ({
  title,
  configuration,
  tab,
  onOpenProductCarousel,
}: {
  tab: string;
  onOpenProductCarousel?: (e: React.MouseEvent) => void;
  title: string;
  configuration: IPhoneDocument["configuration"];
}) => {
  return (
    <div className={styles.configurations}>
      <h3 className={styles.configurations__header}>
        Cấu hình điện thoại {title}
      </h3>
      <ul className={styles.configurations__list}>
        <li>
          <p>Màn hình</p>
          <p>
            {configuration.monitor.technology} ,
            {configuration.monitor.broadScreen}"
          </p>
        </li>
        <li>
          <p>Hệ điều hành</p>
          <p>
            {configuration.operatingSystem.type}{" "}
            {configuration.operatingSystem.number}
          </p>
        </li>
        <li>
          <p>Camera sau</p>
          <p>
            {configuration.rearCam.quantity}camera{" "}
            {configuration.rearCam.quality}
            MP
          </p>
        </li>
        <li>
          <p>Camera trước</p>
          <p>{configuration.frontCam.quality} MP</p>
        </li>
        <li>
          <p>Chip</p>
          <p>
            {configuration.chip.type} {configuration.chip.technology}{" "}
            {configuration.chip.number}
          </p>
        </li>
        <li>
          <p>Ram</p>
          <p>{configuration.ram} GB</p>
        </li>
        <li>
          <p>Bộ nhớ trong</p>
          <p>{configuration.internalMemory}GB</p>
        </li>
        <li>
          <p>Sim</p>
          <p>
            {configuration.sim.quantity} {configuration.sim.type}SIM
          </p>
        </li>
        <li>
          <p>Pin,Sạc</p>
          <p>
            {configuration.battery.volume} mAh, {configuration.battery.charge}W
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
};

export default PhoneConfiguration;
