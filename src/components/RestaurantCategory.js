import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils.js/cartSlice";
// import { useCart } from "../utils.js/CartContext";

const RestaurantCategory = ({ data }) => {
    const [open, setOpen] = useState(false);
    // const { addToCart } = useCart();

    const dispatch = useDispatch();

    const handleAddItem= (item)  =>{
        // dispatch an action
        dispatch(addItem(item));
    }

    return (
        <div className="mb-4 border rounded-xl bg-white shadow overflow-hidden">
            
            {/* Header */}
            <div
                className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer hover:bg-gray-200"
                onClick={() => setOpen(!open)}
            >
                <span className="font-semibold text-gray-900">{data.title}</span>
                <span className="text-gray-500">{open ? "▲" : "▼"}</span>
            </div>

            {/* Accordion Body */}
            {open && (
                <div className="p-4 border-t">
                    {data.items.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row gap-3 py-3 border-b last:border-0"
                        >
                            <div className="relative w-full sm:w-28 h-28 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                                <img
                                    src={
                                        item.image ||
                                        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"
                                    }
                                    alt={item.name}
                                    className="h-full w-full object-cover"
                                />
                                <button
                                    type="button"
                                    className="absolute bottom-1.5 left-1.5 right-1.5 bg-orange-500 text-white text-xs py-1.5 rounded font-medium hover:bg-orange-600"
                                    // onClick={() => addToCart(item)}
                                    onClick={() => handleAddItem(item)}
                                
                                >
                                    Add to cart
                                </button>
                            </div>
                            <div className="flex flex-1 justify-between gap-2 items-start">
                                <span className="text-gray-800">
                                    {item.name}{" "}
                                    {item.isBestSeller && (
                                        <span className="text-orange-500" title="Best seller">
                                            🔥
                                        </span>
                                    )}
                                    {item.isNew && (
                                        <span className="text-green-600" title="New">
                                            🆕
                                        </span>
                                    )}
                                </span>
                                <span className="text-orange-600 font-semibold shrink-0">
                                    ₹{item.price}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RestaurantCategory;
