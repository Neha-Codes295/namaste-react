import { useParams, Link } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils.js/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return <Shimmer />;
    }

    const info = resInfo?.cards[2]?.card?.card?.info;

    const menuCards = resInfo?.cards
        ?.find((c) => c.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const flatItems =
        menuCards?.flatMap((section) => section?.card?.card?.itemCards ?? []) ??
        [];

    return (
        <div className="menu mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:max-w-4xl lg:px-8">
            <Link
                to="/"
                className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-orange-700 hover:text-orange-800"
            >
                ← Back to restaurants
            </Link>

            <div className="overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-lg ring-1 ring-orange-50">
                <div className="border-b border-stone-100 bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-8 sm:px-8">
                    <p className="text-xs font-medium uppercase tracking-wide text-orange-600">
                        Menu · ID {resId}
                    </p>
                    <h1 className="mt-1 text-2xl font-bold text-stone-900 sm:text-3xl">
                        {info?.name ?? "Restaurant"}
                    </h1>
                    <p className="mt-2 text-stone-600">
                        {info?.cuisines?.join(", ") ?? ""}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4 text-sm">
                        <span className="rounded-full bg-white/80 px-3 py-1 font-medium text-stone-800 shadow-sm">
                            {info?.costForTwoMessage}
                        </span>
                        <span className="rounded-full bg-white/80 px-3 py-1 font-medium text-amber-800 shadow-sm">
                            ★ {info?.avgRating}
                        </span>
                    </div>
                </div>

                <div className="p-6 sm:p-8">
                    <h2 className="text-lg font-semibold text-stone-900">
                        Items
                    </h2>
                    <ul className="mt-4 divide-y divide-stone-100">
                        {flatItems.length === 0 ? (
                            <li className="py-8 text-center text-stone-500">
                                No menu items loaded (API may be blocked or format
                                changed).
                            </li>
                        ) : (
                            flatItems.map((item, idx) => {
                                const card = item?.card;
                                const id = card?.info?.id ?? idx;
                                const name = card?.info?.name ?? "Item";
                                const raw =
                                    card?.info?.price ?? card?.info?.defaultPrice;
                                const price =
                                    raw != null ? raw / 100 : null;
                                return (
                                    <li
                                        key={id}
                                        className="flex flex-wrap items-center justify-between gap-2 py-4 first:pt-0"
                                    >
                                        <span className="font-medium text-stone-800">
                                            {name}
                                        </span>
                                        <span className="text-sm font-semibold text-orange-700">
                                            {price != null ? `₹${price}` : "—"}
                                        </span>
                                    </li>
                                );
                            })
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;
