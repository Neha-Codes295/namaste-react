import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils.js/useOnlineStatus";

const Body = () => {
    const [listOfRests, setListOfRests] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

    console.log("body rendered");

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
            <div className="mx-auto max-w-lg px-4 py-16 text-center">
                <div className="rounded-2xl border border-rose-100 bg-white p-8 shadow-lg ring-1 ring-rose-50">
                    <p className="text-4xl mb-3">📡</p>
                    <h1 className="text-xl font-semibold text-stone-900">
                        You&apos;re offline
                    </h1>
                    <p className="mt-2 text-stone-600">
                        Check your internet connection and try again.
                    </p>
                </div>
            </div>
        );
    }

    return listOfRests.length === 0 ? (
        <Shimmer />
    ) : (
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
                        Desserts near you
                    </h1>
                    <p className="mt-1 text-stone-600">
                        Search restaurants or filter by top ratings
                    </p>
                </div>
            </div>

            <div className="filter mb-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <div className="search flex w-full max-w-xl flex-1 flex-col gap-2 sm:flex-row sm:items-stretch">
                    <input
                        type="text"
                        className="search-box flex-1 rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-800 shadow-sm outline-none ring-orange-100 transition placeholder:text-stone-400 focus:border-orange-300 focus:ring-2"
                        placeholder="Search restaurants…"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        type="button"
                        className="rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-orange-700"
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
                    className="filter-btn inline-flex items-center justify-center rounded-xl border border-amber-200 bg-amber-50 px-5 py-3 text-sm font-semibold text-amber-900 shadow-sm transition hover:bg-amber-100"
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
                <p className="rounded-xl border border-stone-200 bg-white py-12 text-center text-stone-500">
                    No restaurants match your search. Try a different name.
                </p>
            ) : (
                <div className="res-container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredList.map((restaurant) => (
                        <Link
                            key={restaurant.info.id}
                            to={"/restaurant/" + restaurant.info.id}
                            className="block no-underline"
                        >
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    ))}
                </div>
            )}
        </main>
    );
};

export default Body;
