import { GiBroadsword } from "react-icons/gi";
import styles from "./page-loading.module.scss";
import { useEffect, useRef } from "react";
const PageLoading = () => {

  return (
    <div className={`${styles.loading} flex-both-ct`}>
      <div className={`${styles.content} flex-both-ct flex`}>
        <GiBroadsword />
        <h2>LOADING...</h2>
      </div>
    </div>
  );
};

export default PageLoading;
