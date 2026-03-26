import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils.js/constants";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [resInfo, setResInfo] = useState(null);

    console.log("resId:", resId);
    useEffect(() => {
        if (resId) fetchMenu();
    }, [resId]);

    const fetchMenu = async () => {
        // const res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.69540&lng=76.85240&restaurantId=794467");
        // console.log("Hey", res.json());
        // this api is blocked due to CORS, so not proceeding further with this 
    };

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