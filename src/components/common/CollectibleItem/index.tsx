import React, { useEffect } from "react";

import "./styles.scss";

interface Props {
  item: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CollectibleItem = ({ item }: Props) => {
  useEffect(() => {}, []);

  const clickItem = () => {};

  return (
    <>
      <a className="collectible" onClick={clickItem}>
        <img className="collectible__img" />
        <div className="collectible__body">
          <span className="collectible__body__title">Digital Ninja</span>
          <span>
            by <a className="collectible__body__link"> jhondoe.near</a>
          </span>
        </div>
        <img
          className="collectible__chevron"
          src="./assets/chevron-r-black.svg"
          alt=""
        />
      </a>
    </>
  );
};

export default CollectibleItem;
