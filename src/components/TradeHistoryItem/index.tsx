import React from "react";
import moment from 'moment';
import { StyledTradeHistoryItem } from "./styles";

interface Props {
    item: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TradeHistoryItem = ({ item }: Props) => {

    return (
        <StyledTradeHistoryItem>
            {
                item.type == 'send' ? (

                    <>
                        <img className="history-item-img" src={item.image} alt="" />
                        <div className="history-item-body">
                            <span>
                                <span className="history-item-owner">{item.owner} </span>
                                bought <span className="history-item-id">#{item.id}</span> from
                                <span className="history-item-to"> {item.to}</span>
                            </span>
                            <div className="history-item-time"> {moment(item.date).fromNow(true) + ' ago'}  </div>
                        </div>
                    </>
                ) : (
                    <>
                        <img className="history-item-img" src={item.image} alt="" />
                        <div className="history-item-body">
                            <span>
                                <span className="history-item-owner">{item.owner} </span>
                                minted <span className="history-item-id">#{item.id}</span>
                            </span>
                            <div className="history-item-time"> {moment(item.date).fromNow(true) + ' ago'}  </div>
                        </div>
                    </>
                )

            }
        </StyledTradeHistoryItem>
    );
};

export default TradeHistoryItem;
