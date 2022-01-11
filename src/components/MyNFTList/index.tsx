import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { useGetAllCollectibles } from '../../hooks/api/collectibles';
import CollectibleItem from '../common/CollectibleItem';
import { ROUTES } from "../../const/routeNames";


const MyNFTList = () => {
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
                <CollectibleItem key={collectible.name} item={collectible} onClick={() => navigate(ROUTES.DETAIL_COLLECTIBLE.url.replace(':id', collectible.id))} />
              ))}
        </>
    )
}

export default MyNFTList
