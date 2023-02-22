import { v4 as uuidv4 } from "uuid";

import styles from "./product-configuration-carousel.module.scss";
import { IPhoneDocument, IProductType } from "interfaces/allProductsType.interface";

interface ProductConfigurationCarouselProps  {
  configuration:IProductType['currentProduct']['configuration']
  type:'laptop'|'phone'
  title:string,
  imgConfiguration:string;
}

const ProductConfigurationCarousel = ({
  type,configuration,title,imgConfiguration
}: ProductConfigurationCarouselProps) => {
  (configuration);
  let content;
  // Phone document
  if (type==='phone') {
    const phoneConfiguration = configuration as IPhoneDocument['configuration'];
    content = (
      <>
        <img
          width={700}
          height={500}
          src={imgConfiguration}
          alt={title + " configuration"}
        />
        <div className={styles["product-details__configuration-list"]}>
          <ul className={styles["product-details__monitor"]}>
            <h3 className={styles["product-details__title"]}>Màn Hình</h3>
            <li>
              <p>Công nghệ màn hình</p>
              <p>{phoneConfiguration.monitor.technology}</p>
            </li>
            <li>
              <p>Độ phân giải</p>
              <p>{phoneConfiguration.monitor.resolution}</p>
            </li>
            <li>
              <p>Màn hình rộng</p>
              <p>{phoneConfiguration.monitor.broadScreen}"</p>
            </li>
            <li>
              <p>Độ sáng tối đa</p>
              <p>{phoneConfiguration.monitor.maximumLight} nits</p>
            </li>
          </ul>
          <ul>
            <h3 className={styles["product-details__title"]}>Camera sau</h3>
            <li>
              <p>Độ phân giải</p>
              <p>
                {phoneConfiguration.rearCam.quality} camera{" "}
                {phoneConfiguration.rearCam.quality}MP
              </p>
            </li>
            <li>
              <p>Quay phim</p>
              <ul className={styles["product-details__features"]}>
                {phoneConfiguration.rearCam.film.map((f) => (
                  <li key={uuidv4()}>{f}</li>
                ))}
              </ul>
            </li>
            <li>
              <p>Đèn Flash</p>
              <p>Yes</p>
            </li>
            <li>
              <p>Tính năng</p>
              <ul className={styles["product-details__features"]}>
                {phoneConfiguration.rearCam.features.map((f) => (
                  <li key={uuidv4()}>{f}</li>
                ))}
              </ul>
            </li>
          </ul>
          <ul>
            <h3 className={styles["product-details__title"]}>Camera trước</h3>
            <li>
              <p>Độ phân giải</p>
              <p>{phoneConfiguration.frontCam.quality} MP</p>
            </li>
            <li>
              <p>Tính năng</p>
              <ul className={styles["product-details__features"]}>
                {phoneConfiguration.rearCam.features.map((f) => (
                  <li key={uuidv4()}>{f}</li>
                ))}
              </ul>
            </li>
          </ul>
          <ul>
            <h3 className={styles["product-details__title"]}>
              Hệ điều hành & CPU
            </h3>
            <li>
              <p>Hệ đều hành</p>
              <p>
                {phoneConfiguration.operatingSystem.type}{" "}
                {phoneConfiguration.operatingSystem.number}
              </p>
            </li>
            <li>
              <p>Chip xử lý (CPU)</p>
              <p>
                {phoneConfiguration.chip.type} {phoneConfiguration.operatingSystem.number}{" "}
                {phoneConfiguration.chip.technology}
              </p>
            </li>
          </ul>
          <ul>
            <h3 className={styles["product-details__title"]}>
              Bộ nhớ & Lưu trữ
            </h3>
            <li>
              <p>RAM</p>
              <p>{phoneConfiguration.ram}GB</p>
            </li>
            <li>
              <p>Bộ nhớ trong</p>
              <p>{phoneConfiguration.internalMemory}GB</p>
            </li>
            <li>
              <p>Bộ nhớ còn lại (khả dụng) khoảng</p>
              <p>{phoneConfiguration.residualMemory}GB</p>
            </li>
            <li>
              <p>Danh bạ</p>
              <p>Không giới hạn</p>
            </li>
          </ul>
          <ul>
            <h3 className={styles["product-details__title"]}>Pin & Sạc</h3>
            <li>
              <p>Dung lượng pin</p>
              <p>{phoneConfiguration.battery.volume} mAh</p>
            </li>
            <li>
              <p>Loại pin</p>
              <p>{phoneConfiguration.battery.type}</p>
            </li>
            <li>
              <p>Hỗ trợ sạc tối đa</p>
              <p>{phoneConfiguration.battery.W} W</p>
            </li>
            <li>
              <p>Danh bạ</p>
              <p>Không giới hạn</p>
            </li>
          </ul>
          <ul>
            <h3 className={styles["product-details__title"]}>
              Thông tin chung
            </h3>
            <li>
              <p>Thiết kế</p>
              <p>{phoneConfiguration.design}</p>
            </li>
            <li>
              <p>Chất liệu</p>
              <p>{phoneConfiguration.material}</p>
            </li>
            <li>
              <p>Kích thước,khối lượng</p>
              <p>
                Dài: {phoneConfiguration.size.length}mm,Rộng:{" "}
                {phoneConfiguration.size.width},Dày: {phoneConfiguration.volume.depth},
                Nặng: {phoneConfiguration.volume.weight}
              </p>
            </li>
            <li>
              <p>Thời điểm ra mắt</p>
              <p>{phoneConfiguration.launchTime}</p>
            </li>
          </ul>
        </div>
      </>
    );
  }
  // if (isLaptopDocument(currentProduct)) {
  //   const configuration = currentProduct.configuration;
  //   content = (
  //     <div className={styles["product-details__configuration-list"]}>
  //       <ul className={styles.configurations__list}>
  //         <li>
  //           <p>CPU</p>
  //           <p>
  //             {configuration.cpu.type} {configuration.cpu.version}
  //           </p>
  //         </li>
  //         <li>
  //           <p>Ổ cứng</p>
  //           <p>{configuration.internalMemory} SSD</p>
  //         </li>
  //         <li>
  //           <p>Màn hình</p>
  //           <p>
  //             {configuration.screen.inch}, {configuration.screen.technology}
  //           </p>
  //         </li>
  //         <li>
  //           <p>Card màn hình</p>
  //           <p>{configuration.cardScreen.type} </p>
  //         </li>
  //         <li>
  //           <p>Đặc biệt</p>
  //           <p>{configuration.special}</p>
  //         </li>
  //         <li>
  //           <p>Thiết kế</p>
  //           {/* @ts-ignore */}
  //           <p>{configuration.design}</p>
  //         </li>

  //         <li>
  //           <p>Thời điểm ra mắt</p>
  //           <p>{configuration.launchTime}</p>
  //         </li>
  //       </ul>
  //     </div>
  //   );
  // }

  return <>{content}</>;
};

export default ProductConfigurationCarousel;
