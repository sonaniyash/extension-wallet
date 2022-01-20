import React, { useEffect, useState } from 'react'
import { useGetHistory } from '../../hooks/api/tradeHistory';
import TradeHistoryItem from '../TradeHistoryItem';


const TradeHistoryList = () => {
    const { history, isSearching } = useGetHistory();
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
