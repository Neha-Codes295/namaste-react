import { LOGO_URL } from "../utils.js/constants";
import { useState } from "react";

const Header = () => {
  // let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header rendered");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
