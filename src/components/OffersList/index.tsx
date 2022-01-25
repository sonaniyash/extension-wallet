import React, { useEffect, useState } from 'react'
import { useGetMyoffers } from '../../hooks/api/offers';
import OfferItem from '../common/OfferItem';

interface Props {
    fromNFT?: boolean;
}

const OffersList = ({ fromNFT }: Props) => {
    const { offers, isSearching } = useGetMyoffers();
    const [offersToShow, setCollectiblesToShow] = useState(offers);

    useEffect(() => {
        setCollectiblesToShow(offers);
    }, [offers]);

    return (
        <>
            {isSearching ? "Searching..." : ""}
            {offersToShow && offersToShow.map((offers: any) => (
                <OfferItem key={offers.id} item={offers} onClick={() => { }} fromNFT={fromNFT} />
            ))}
        </>
    )
}

export default OffersList
