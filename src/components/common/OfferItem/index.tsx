import React, { MouseEventHandler, useEffect } from "react";
import { OfferItemContainer } from "./styles";
import tagImg from "../../../public/assets/tag.png";
import moment from 'moment';

interface Props {
  item: any;
  onClick?: MouseEventHandler;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OfferItem = ({ item, onClick }: Props) => {

  return (
    <OfferItemContainer onClick={onClick}>
      <img className="offer-item-img" src={tagImg} alt="" />
      <div className="offer-item-body">
         <div className="offer-item-id"> #{item.id}</div>
         <div className="">
            <button className="button btn-dark offer-item-button">Edit Offer</button>
            <button className="button btn-dark offer-item-button --white">Revoke</button>
         </div>
         <div className="offer-item-time"> { moment(item.date).fromNow(true) + ' left'}  </div>
      </div>
      <div className="offer-item-ammount">
        {item.ammount} NEAR
      </div>
        
    </OfferItemContainer>
  );
};

export default OfferItem;
