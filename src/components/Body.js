import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils.js/useOnlineStatus";

const Body = () => {
    const [listOfRests, setListOfRests] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

    console.log("body rendered", listOfRests);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.69540&lng=76.85240&collection=83661&tags=layout_CCS_Desserts&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );
        const json = await data.json();
        console.log(json);

        const restaurants = json.data.cards
            .filter((item) => item.card?.card?.info)
            .map((item) => item.card.card);

        setListOfRests(restaurants);
        setFilteredList(restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) {
        return (
            <div className="p-6 max-w-lg mx-auto text-center">
                <div className="p-8 bg-white rounded-xl shadow">
                    <p className="text-4xl mb-3">📡</p>
                    <h1 className="text-xl font-bold text-gray-900">
                        You&apos;re offline
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Check your internet connection and try again.
                    </p>
                </div>
            </div>
        );
    }

    return listOfRests.length === 0 ? (
        <Shimmer />
    ) : (
        <main className="p-6 max-w-7xl mx-auto">
            <div className="mb-6">
                <p className="text-sm text-orange-600">Order fresh</p>
                <h1 className="text-2xl font-bold text-gray-900 mt-1">
                    Desserts near you
                </h1>
                <p className="text-gray-600 mt-2">
                    Search restaurants or filter by top ratings
                </p>
            </div>

            <div className="filter mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <div className="search flex flex-1 flex-col gap-2 sm:flex-row sm:max-w-xl">
                    <input
                        type="text"
                        className="search-box flex-1 border border-gray-200 rounded-lg px-3 py-2 text-gray-900 min-w-0"
                        placeholder="Search restaurants…"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        type="button"
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600"
                        onClick={() => {
                            console.log(searchText);
                            const filteredRestList = listOfRests.filter((res) =>
                                res.info.name
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase())
                            );
                            setFilteredList(filteredRestList);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    type="button"
                    className="filter-btn border border-gray-200 px-4 py-2 rounded-lg text-sm bg-white hover:bg-gray-50"
                    onClick={() => {
                        const filteredRests = listOfRests.filter(
                            (res) => res.info.avgRating > 4.5
                        );
                        setFilteredList(filteredRests);
                    }}
                >
                    ⭐ Top rated (4.5+)
                </button>
            </div>

            {filteredList.length === 0 ? (
                <p className="py-12 text-center text-gray-500 border border-dashed border-gray-200 rounded-xl">
                    No restaurants match your search. Try a different name.
                </p>
            ) : (
                <div className="res-container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
                    {filteredList.map((restaurant) => (
                        <Link
                            key={restaurant.info.id}
                            to={"/restaurant/" + restaurant.info.id}
                            className="flex h-full min-h-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                        >
                            {/* if rest is promoted, then add a promoted label to it 
                            for it make RestaurantCard to be HOC */}
                            {
                                restaurant.info.promoted ? (
                                    <PromotedRestaurantCard resData={restaurant} />
                                ) : (
                                    <RestaurantCard resData={restaurant} />
                                )
                            }
                        </Link>
                    ))}
                </div>
            )}
        </main>
    );
};

export default Body;
