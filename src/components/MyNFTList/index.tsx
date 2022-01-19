import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { useGetAllCollectibles } from '../../hooks/api/collectibles';
import CollectibleItem from '../common/CollectibleItem';
import { ROUTES } from "../../const/routeNames";
import { getUserIdFromToken } from '../../utils/utils';


const MyNFTList = () => {
    const navigate = useNavigate();
    const userId = getUserIdFromToken();
    const { collectibles, isSearching } = useGetAllCollectibles(userId);
    const [collectiblesToShow, setCollectiblesToShow] = useState(collectibles);

    useEffect(() => {
        setCollectiblesToShow(collectibles);
    }, [collectibles]);

    return (
        <>
            {isSearching ? "Searching..." : ""}
            {collectiblesToShow && collectiblesToShow.map((collectible: any) => (
                <CollectibleItem key={collectible.title} item={collectible} onClick={() => navigate(ROUTES.DETAIL_COLLECTIBLE.url.replace(':id', collectible.nft_id))} />
            ))}
        </>
    )
}

export default MyNFTList
