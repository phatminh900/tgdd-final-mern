import styles from "./product-configuration-img-box.module.scss";
const ProductConfigurationImgBox = ({
  type,
  title,
  imgConfiguration,
}: {
  type: string;
  imgConfiguration: string;
  title: string;
}) => {
  return (
    <div className={styles["configuration"]}>
      {type === "phone" ? (
        <img
          width={710}
          height={530}
          src={imgConfiguration}
          alt={`${title} configuration`}
        />
      ) : null}
    </div>
  );
};

export default ProductConfigurationImgBox;
