import { LOGO_URL } from "../utils.js/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils.js/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header rendered");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  const linkClass =
    "rounded-lg px-3 py-2 text-sm font-medium text-stone-600 transition hover:bg-orange-50 hover:text-orange-700";

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100/80 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2 no-underline">
          <img
            className="h-12 w-auto rounded-lg object-contain ring-2 ring-orange-100 sm:h-14"
            src={LOGO_URL}
            alt="Food app logo"
          />
          <span className="hidden bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-xl font-bold text-transparent sm:inline">
            Namaste Food
          </span>
        </Link>

        <nav className="nav-items">
          <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
            <li>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm ${
                  onlineStatus
                    ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200"
                    : "bg-rose-50 text-rose-800 ring-1 ring-rose-200"
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
            <li className="pl-1">
              <button
                type="button"
                className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:from-orange-600 hover:to-amber-600 hover:shadow-lg"
                onClick={() => {
                  btnNameReact === "Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login");
                  console.log(btnNameReact);
                }}
              >
                {btnNameReact}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
