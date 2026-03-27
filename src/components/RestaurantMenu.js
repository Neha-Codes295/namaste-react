import { Link, useParams } from "react-router";
import useRestaurantMenu from "../utils.js/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    const { info, sections, reviews } = resInfo;

    return (
        <div className="menu p-6 max-w-3xl mx-auto">

            {/* 🔙 Back Button */}
            <Link
                to="/"
                className="inline-block mb-6 text-sm text-orange-600 hover:underline"
            >
                ← Back
            </Link>

            {/* 🔥 Restaurant Info */}
            <div className="mb-6 bg-white rounded-xl shadow overflow-hidden">
                {info.image && (
                    <div className="aspect-[2/1] max-h-48 w-full bg-gray-100 overflow-hidden">
                        <img
                            src={info.image}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                )}
                <div className="p-5">
                    <p className="text-xs text-gray-500 mb-2">
                        Demo menu (same for all) · id:{" "}
                        <span className="font-mono text-gray-700">{resId}</span>
                    </p>
                    <h1 className="text-2xl font-bold text-gray-900">{info.name}</h1>
                    <p className="text-gray-600 mt-2">{info.cuisines.join(", ")}</p>
                    <p className="text-sm mt-2">
                        ⭐ {info.rating} ({info.totalRatings}) · {info.costForTwo} ·{" "}
                        {info.deliveryTime}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">📍 {info.address}</p>
                </div>
            </div>

            {/* 🔥 Menu Sections (Accordion) */}
            <div className="mt-4">
                <h2 className="text-sm font-semibold text-orange-600 mb-3">Menu</h2>
                {sections.map((section, index) => (
                    <RestaurantCategory key={index} data={section} />
                ))}
            </div>

            {/* 🔥 Reviews */}
            <div className="mt-8 p-5 bg-white rounded-xl shadow">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Reviews</h2>

                <div className="space-y-3">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-100 pb-3 last:border-0"
                        >
                            <p className="font-medium text-gray-900">
                                {review.user} ⭐{review.rating}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 🔥 Footer */}
            <div className="mt-8 text-center text-xs text-gray-400">
                © 2026 Food App • Built with ❤️
            </div>
        </div>
    );
};

export default RestaurantMenu;
