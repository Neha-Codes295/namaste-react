import { LOGO_URL } from "../utils.js/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils.js/useOnlineStatus";
import UserContext from "../utils.js/UserContext";
// import { useCart } from "../utils.js/CartContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header rendered");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // const { cartCount } = useCart();

  // subscribing to store using selector
  const cartItems = useSelector((store) => store.cart.items);
  const cartCount = cartItems.reduce(
    (n, item) => n + (item?.quantity ?? 1),
    0
  );
  console.log("New", cartItems);

  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  const linkClass =
    "px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-100";

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <img
            className="h-12 w-auto rounded-lg object-contain sm:h-14"
            src={LOGO_URL}
            alt="Food app logo"
          />
          <span className="hidden text-xl font-bold text-orange-600 sm:inline">
            Namaste Food
          </span>
        </Link>

        <nav className="nav-items">
          <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
            <li>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  onlineStatus
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {onlineStatus ? "🟢 Online" : "🔴 Offline"}
              </span>
            </li>
            <li>
              <Link className={linkClass} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={linkClass} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={linkClass} to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className={linkClass} to="/grocery">
                Grocery
              </Link>
            </li>
            <li>
              <Link
                className={`${linkClass} inline-flex items-center gap-1`}
                to="/cart"
                aria-label={`Cart, ${cartCount} items`}
              >
                🛒 Cart
                <span className="bg-orange-500 text-white text-xs min-w-[1.25rem] px-1.5 py-0.5 rounded-full text-center">
                  {cartCount}
                </span>
              </Link>
            </li>
            <li className="pl-1">
              <button
                type="button"
                className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600"
                onClick={() => {
                  btnNameReact === "Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login");
                  console.log(btnNameReact);
                }}
              >
                {btnNameReact}
              </button>
              <span className="ml-2 text-sm text-gray-700">{loggedInUser}</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
