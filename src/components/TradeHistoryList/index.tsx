import React, { useEffect, useState } from 'react'
import { useGetHistory } from '../../hooks/api/tradeHistory';
import TradeHistoryItem from '../TradeHistoryItem';
interface Props {
    id: any;
}


const TradeHistoryList = ({ id }: Props) => {
    const { history, isSearching } = useGetHistory(id);
    const [historyToShow, setHistoryToShow] = useState(history);

    useEffect(() => {
        setHistoryToShow(history);
    }, [history]);

    return (
        <>
            {isSearching ? "Searching..." : ""}
            {historyToShow && historyToShow.map((history: any) => (
                <TradeHistoryItem key={history.id} item={history} />
            ))}
        </>
    )
}

export default TradeHistoryList
