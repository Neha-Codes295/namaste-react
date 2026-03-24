import {CDN_URL} from "../utils.js/constants";

const RestaurantCard = (props) => {
    // const { resName, cuisine } = props;
    const { resData } = props;
    // console.log(resData);
    // destructuring
    const {
        name,
        cuisines,
        avgRating,
        deliveryTime,
        cloudinaryImageId
    } = resData.info;
    

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}
        // style={styleCard}
        >
            <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            {/* cuisines is an array, ans will be "," separate dishes */}
            <h4>{avgRating} ⭐</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
};

export default RestaurantCard;