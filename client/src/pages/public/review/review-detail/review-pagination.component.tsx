import React from "react";
import styles from "../review.module.scss";
import { v4 as uuidv4 } from "uuid";
interface ReviewPaginationProps {
  paginationNumbers: number;
  changePage: (e: React.MouseEvent<Element, MouseEvent>) => void;
  page: string | null;
}
const ReviewPagination = ({
  paginationNumbers,
  changePage,
  page,
}: ReviewPaginationProps) => {
  return (
    <ul className={`${styles["reviews__pagination-list"]} flex-vt-ct`}>
      {paginationNumbers >= 5
        ? Array.from({ length: paginationNumbers }, (_, i) => {
            return (
              <li key={uuidv4()} className={styles["reviews__pagination-item"]}>
                <button
                  onClick={changePage}
                  data-page={i + 1}
                  className={`${styles["reviews__pagination-btn"]} ${
                    !page && i + 1 === 1 && styles.active
                  } ${page && +page === i + 1 ? styles.active : ""}`}
                >
                  {i + 1}
                </button>
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default ReviewPagination;
