import { LOGO_URL } from "../utils.js/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils.js/useOnlineStatus";

const Header = () => {
  // let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header rendered");

  const onlineStatus = useOnlineStatus();

  // // if no dependency array , useEffect is called on every render of the component
  // useEffect(()=>{
  //   console.log("useEffect called");
  // });

  // // if empty dependency array , useEffect is called on only initial render of the component(just once)
  // useEffect(()=>{
  //   console.log("useEffect called");
  // }, []);

  // if dependency array is [btnNameReact], useEffect is called every time btnNameReact is updated
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <button
              className={`px-3 py-1 rounded-md text-white font-semibold ${
                onlineStatus ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {onlineStatus ? "🟢 Online" : "🔴 Offline"}
            </button>
          </li>
          <li>
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          {/* <li>Cart</li> */}
          {/* ******but in react, when we need to route onto other page , never use anchor tag
          bcz the whole page got refreshed /reloaded
          there's a magic for this:
          use Link
          */}
          <button
            className="login"
            onClick={() => {
              // btnName = "Logout";
              // console.log(btnName);
              // btnName fot updated, but UI didn't render
              // bcz react will not know it
              // to make it dynamic , useState is used

              // can't do it directly - use 2nd prm
              // btnNameReact = "Logout";
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              // when state var change , react will re-render header comp , with updated vals
              // on click of login , only that chnages wiht new btnNameReact, diff algo
              // header gets rendered again & again , but only that btn changes
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

// export
export default Header;
