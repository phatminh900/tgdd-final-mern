import React from "react";
import styles from "./search-header.module.scss";
import Price from "components/price/price.component";
import { ISearchItem } from "./search-header.type";
type SearchListProps = {
  results: ISearchItem[];
};
const SearchList = ({ results }: SearchListProps) => {
  return (
    <ul className={styles["search-list"]}>
      {results.map((result) => (
        <li key={result._id}>
          <button
            key={result._id}
            onClick={() => {
              window.location.href = `/${result.category}/${result.slug}`;
            }}
          >
            <img height={60} width={60} src={result.imgCover} alt="Product " />
            <div className={styles.details}>
              <p>{result.title}</p>
              <Price price={result.price} />
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SearchList;
