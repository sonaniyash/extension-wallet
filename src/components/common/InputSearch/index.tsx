import React from "react";

import "./styles.scss";

interface Props {
  searchHandler: React.FormEventHandler<HTMLInputElement>;
  addHandler?: React.FormEventHandler<HTMLAnchorElement>;
}

export const InputSearch = ({ searchHandler, addHandler }: Props) => {
  return (
    <div className="input-search">
      <input
        placeholder="Search Contact"
        onInput={searchHandler}
        className="input-search__input"
        type="search"
        id="search-contacts"
      />
      <a onClick={addHandler} className="input-search__add">
        <img src="./assets/plus.png" alt="" />
      </a>
    </div>
  );
};
