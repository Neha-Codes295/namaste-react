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
        <div className="res-card group h-full overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-md transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                    className="res-logo h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    alt={name}
                    src={CDN_URL + cloudinaryImageId}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
            <div className="p-4">
                <h3 className="line-clamp-1 text-lg font-bold text-stone-900">
                    {name}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-stone-500">
                    {cuisines.join(", ")}
                </p>
                <div className="mt-3 flex items-center justify-between border-t border-stone-100 pt-3 text-sm">
                    <span className="inline-flex items-center gap-1 font-semibold text-amber-700">
                        ★ {avgRating}
                    </span>
                    <span className="text-stone-500">
                        {sla?.deliveryTime ?? "—"} min
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
