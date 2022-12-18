import styles from "./order-detail-specific.module.scss";
import Price from "components/price/price.component";
const OrderDetailTotal = ({ total }: { total: number }) => {
  return (
    <div className={styles["order-history__summary"]}>
      <div className="flex-column">
        Tổng tiền :<Price price={total} />
      </div>
    </div>
  );
};

export default OrderDetailTotal;
