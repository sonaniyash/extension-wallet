import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useGetAllCollectibles } from "../../hooks/api/collectibles";
import CollectibleItem from "../common/CollectibleItem";
import { ROUTES } from "../../const/routeNames";

const NFTList = (props: any) => {
  const userId = props.userId;
  const navigate = useNavigate();
  const { collectibles, isLoading } = useGetAllCollectibles(userId);

  if (isLoading) return <>Searching...</>;
  else 
  return (
    <>
      {collectibles &&
        collectibles.map((collectible: any) => (
          <CollectibleItem
            key={collectible.title}
            item={collectible}
            onClick={() =>
              navigate(
                ROUTES.DETAIL_COLLECTIBLE.url.replace(":id", collectible.nft_id)
              )
            }
          />
        ))}
    </>
  );
};

export default NFTList;
