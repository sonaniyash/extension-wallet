import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { useGetAllCollectibles } from '../../hooks/api/collectibles';
import OfferItem from '../common/OfferItem';
import { ROUTES } from "../../const/routeNames";


const OffersList = () => {
    const navigate = useNavigate();
    const { collectibles, isSearching } = useGetAllCollectibles();
    const [collectiblesToShow, setCollectiblesToShow] = useState(collectibles);

    useEffect(() => {
        setCollectiblesToShow(collectibles);
    }, [collectibles]);

    return (
        <>
            {isSearching ? "Searching..." : ""}
              {collectiblesToShow && collectiblesToShow.map((collectible: any) => (
                <OfferItem item={collectible} onClick={() => navigate(ROUTES.DETAIL_COLLECTIBLE.url.replace(':id', collectible.id))} />
              ))}
        </>
    )
}

export default OffersList
