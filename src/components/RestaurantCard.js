import { CDN_URL } from "../utils.js/constants";
import { Link } from "react-router";

const RestaurantCard = (props) => {
    // const { resName, cuisine } = props;
    const { resData } = props;
    // console.log(resData);
    // destructuring
    const {
        id,
        name,
        cuisines,
        avgRating,
        cloudinaryImageId,
        sla
    } = resData.info;


    return (
        // <Link to={"/restaurant/" + resData.info.id}>
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>{sla?.deliveryTime} mins</h4>
        </div>
        // </Link>
    )
};

export default RestaurantCard;