import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import styles from "./search-header.module.scss";
import { ISearchItem } from "./search-header.type";

interface FormSearchProps {
  onSetResults: (products: ISearchItem[]) => void;
}

const FormSearch = ({ onSetResults }: FormSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const onChangeSearchTerm = (search: string) => {
    setSearchTerm(search);
  };

  const search = async () => {
    if (!searchTerm.match(/^[A-Za-z]/i)) return;

    const { data } = await axios.get(`/api/v1/products/search/${searchTerm}`);
    const products: ISearchItem[] = data.products;
    if (!products.length) return onSetResults([]);
    onSetResults(products);
  };

  const findProducts = (e: React.ChangeEvent) => {
    const searchValue = (e.target as HTMLInputElement).value;
    // if (searchValue.match(/\W/)) return;
    setSearchTerm(searchValue);
  };
  useEffect(() => {
    if (!searchTerm.length) onSetResults([]);
    const timer = setTimeout(() => {
      search();
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);
  return (
    <form className={`${styles.search} flex-vt-ct`}>
      <input
        type="text"
        placeholder="What are you looking for?"
        onChange={findProducts}
      />
      <BiSearch />
    </form>
  );
};

export default FormSearch;
