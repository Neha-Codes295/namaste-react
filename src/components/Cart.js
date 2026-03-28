import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { clearCart } from "../utils.js/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const lineQty = (item) => item?.quantity ?? 1;
  const total = cartItems.reduce(
    (sum, item) => sum + (item?.price ?? 0) * lineQty(item),
    0
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Your cart</h1>
        {cartItems.length > 0 && (
          <button
            type="button"
            onClick={handleClearCart}
            className="rounded-lg border border-red-200 bg-white px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
          >
            Clear cart
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-200 bg-white p-10 text-center shadow-sm">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <Link
            to="/"
            className="inline-block rounded-lg bg-orange-500 px-5 py-2 text-sm font-medium text-white hover:bg-orange-600"
          >
            Browse restaurants
          </Link>
        </div>
      ) : (
        <ul className="space-y-3">
          {cartItems.map((item) => (
            <li
              key={item?.id ?? item?.name}
              className="flex gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
            >
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={
                    item?.image ||
                    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"
                  }
                  alt={item?.name || "Item"}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center min-w-0 gap-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="font-medium text-gray-900 truncate">
                    {item?.name}
                  </span>
                  <span className="shrink-0 rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-orange-800">
                    ×{lineQty(item)}
                  </span>
                </div>
                <span className="text-sm text-orange-600 font-semibold">
                  ₹{item?.price} each · ₹{(item?.price ?? 0) * lineQty(item)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 flex items-center justify-between rounded-xl bg-gray-900 px-5 py-4 text-white">
          <span className="font-medium">Total</span>
          <span className="text-lg font-bold">₹{total}</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
