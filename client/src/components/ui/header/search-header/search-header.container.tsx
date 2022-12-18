import axios from "axios";
import React, { useState, useCallback } from "react";
import FormSearch from "./form-search.component";
import styles from "./search-header.module.scss";
import { ISearchItem } from "./search-header.type";
import SearchList from "./search-list.component";

const SearchHeader = ({ className }: { className: string }) => {
  const [results, setResults] = useState<ISearchItem[]>([]);
  const onSetResults = (products: ISearchItem[]) => setResults(products);
  return (
    <div className={`${styles["search-box"]} ${className}`}>
      <FormSearch onSetResults={onSetResults} />
      {results.length > 1 && <SearchList results={results} />}
    </div>
  );
};

export default SearchHeader;
