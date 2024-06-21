import React from "react";

import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ setProductName }) => {
  return (
    <>
      <label className="search-bar__label">
        <IoSearchOutline className="search-bar__icon" />
        <input
          className="filters__input"
          type="text"
          placeholder="Buscar..."
          onChange={(e) =>
            setProductName((prev) => {
              return {
                ...prev,
                name: e.target.value,
              };
            })
          }
        />
      </label>
    </>
  );
};

export default SearchBar;
