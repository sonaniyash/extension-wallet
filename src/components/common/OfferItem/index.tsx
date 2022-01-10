import React, { MouseEventHandler, useEffect } from "react";
import { OfferItemContainer } from "./styles";

interface Props {
  item: any;
  onClick?: MouseEventHandler;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OfferItem = ({ item, onClick }: Props) => {
  useEffect(() => { }, []);

  return (
    <OfferItemContainer>
        
    </OfferItemContainer>
  );
};

export default OfferItem;
