import React, { MouseEventHandler, useEffect } from "react";

import "./styles.scss";

interface Props {
  item: any;
  onClick?: MouseEventHandler;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CollectibleItem = ({ item, onClick }: Props) => {
  useEffect(() => { }, []);

  return (
    <>
      <div className="collectible" onClick={onClick}>
        <img className="collectible__img" src={item.file_url} />
        <div className="collectible__body">
          <span className="collectible__body__title">{item.title}</span>
          <span>
            by <a className="collectible__body__link">{item.owner_id}</a>
          </span>
        </div>
        <img
          className="collectible__chevron"
          src="./assets/chevron-r-black.svg"
          alt=""
        />
      </div>
    </>
  );
};

export default CollectibleItem;
