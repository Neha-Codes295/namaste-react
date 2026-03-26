// import { useEffect, useState } from "react";
// import { MENU_URL } from "../utils.js/constants";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils.js/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);
    // how to get the data is abstracted now

    // if (resInfo === null) return <Shimmer />;
    <h2 className="text-sm text-gray-400 mb-2">
        Restaurant ID: {resId}
    </h2>

    const info = resInfo?.cards[2]?.card?.card?.info;

    const menuCards =
        resInfo?.cards
            ?.find((c) => c.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    return (
        <div className="menu">
            <h1>{info?.name}</h1>
            <p>{info?.cuisines?.join(", ")}</p>
            <h3>{info?.costForTwoMessage}</h3>
            <h4>{info?.avgRating} ⭐</h4>

            <ul>
                {menuCards?.map((section) =>
                    section?.card?.card?.itemCards?.map((item) => (
                        <li key={item.card.info.id}>
                            {item.card.info.name} - ₹
                            {(item.card.info.price ||
                                item.card.info.defaultPrice) / 100}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default RestaurantMenu;