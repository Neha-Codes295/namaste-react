import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
    const [listOfRests, setListOfRests] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");
    // always call useState hooksinside ur body of func comp*****
    // it is used to create local state var, inside func comp
    // call hooks on top, just create them on top, no where else
    // dont create inside if/else/for loop/ fxn -> inconsistency


    // whenever state var updates, react triggers a reconciliaton cycle(re-renders the comp)
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
        // optional chaining: good way of handling data

        setListOfRests(restaurants);
        // now let's put api data into list of rests

        setFilteredList(restaurants);
    };

    return listOfRests.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}></input>
                    {/* we need to change search state , as it is empty rn , so add onChange  */}
                    {/* ********whenever we change local state var, react re-renders the comp */}
                    {/* on each key entered in search bar, whole of it got re-rendered */}
                    <button
                        onClick={() => {
                            // filter rest cards & update UI
                            // searchText
                            console.log(searchText);
                            // input buttn isn't working rn

                            const filteredRestList = listOfRests.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setFilteredList(filteredRestList);
                        }}
                    >Search</button>
                </div>
                <button className="filter-btn"
                    onClick={() => {

                        const filteredRests = listOfRests.filter(
                            (res) => res.info.avgRating > 4.5
                        );
                        setListOfRests(filteredRests);

                        // whenever a state var updates, react re-renders the comp
                    }}
                >
                    Top Rated Restaurants</button>
                {/* onClick attribute passed, callback fxn which will be called on click */}
            </div>
            <div className="res-container">
                {filteredList.map((restaurant) => (
                    <Link key={restaurant.info.id}
                        to={"/restaurant/" + restaurant.info.id}
                    >
                        <RestaurantCard
                            resData={restaurant}
                        />
                    </Link>
                ))}
            </div>
        </div >
    )
};

export default Body;