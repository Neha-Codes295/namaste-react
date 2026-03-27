import { CDN_URL } from "../utils.js/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        name,
        cuisines,
        avgRating,
        cloudinaryImageId,
        sla,
    } = resData.info;

    return (
        <div className="res-card flex h-full min-h-0 w-full flex-col overflow-hidden rounded-xl border bg-white shadow hover:shadow-md transition">
            <div className="aspect-[4/3] w-full shrink-0 overflow-hidden bg-gray-100">
                <img
                    className="res-logo h-full w-full object-cover"
                    alt={name}
                    src={CDN_URL + cloudinaryImageId}
                />
            </div>
            <div className="flex min-h-0 flex-1 flex-col p-4">
                <h3 className="line-clamp-1 font-bold text-gray-900">
                    {name}
                </h3>
                <p className="mt-1 min-h-[2.5rem] flex-1 text-sm leading-snug text-gray-500 line-clamp-2">
                    {cuisines.join(", ")}
                </p>
                <div className="mt-auto flex shrink-0 justify-between border-t border-gray-100 pt-3 text-sm">
                    <span className="font-medium text-amber-700">★ {avgRating}</span>
                    <span className="text-gray-500">
                        {sla?.deliveryTime ?? "—"} min
                    </span>
                </div>
            </div>
        </div>
    );
};


// HOC for promoted restaurant card
// input: RestaurantCard
// output: PromotedRestaurantCard
export const withPromotedLabel = (RestaurantCard) => {
    // passing props
    return (props) => {
        return (
            <div className="relative flex h-full min-h-0 w-full flex-col">
                {/* <label> */}
                <label className="absolute left-2 top-2 z-10 rounded bg-black px-2 py-1 text-xs text-white">
                    PROMOTED
                </label>
                {/* passing data here */}
                <RestaurantCard {...props} />
            </div>
        );
    };
}

// restaurant card isn't changed anywhere

export default RestaurantCard;
