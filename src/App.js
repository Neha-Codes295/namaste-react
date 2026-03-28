// //DOM manipulation operations r so costly , React optimize them 
// // react uses JS only 

// // const heading = React.createElement("h1", {}, "Hello World from React!"); 
// //{} object : here u'll give attributes to ur tags
// // 3 arguments
// // 1-> type of argument/ name of tag, 2-> object/ attributes, 3-> children
// const heading = React.createElement(
//     "h1",
//     //props
//     { id: "heading", xyz: "abc" }, //attr
//     "Hello World from React!" //child
// );

// // let's add css too
// console.log(heading); //returns object
// // props : attributes + chlidren

// // heading is React.createElement creates a JS object
// // render method takes the object & convert it into h1 tag and put on DOM
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



// ***Episode 1 - Part 4***

// Most of the times HTML structure is nested
/**
  *
  * <div id="parent">
  *     <div id="child">
  *         <h1>I'm h1 tag</h1>
  *         <h2>I'm h2 tag</h2>
  *     </div>
  *     <div id="child2">
  *         <h1>I'm h1 tag</h1>
  *         <h2>I'm h2 tag</h2>
  *     </div>
  * </div>
  *  
*/
// ReactElement(object) =(becomes)> HTML(browser understands)

// we can create siblings too
// h1 & h2
// convert 3rd argument of chilren to an array

// we can have multiple children too via an array

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [React.createElement("div", { id: "child" }, [
//         React.createElement("h1", {}, "I'm h1 tag"),
//         React.createElement("h2", {}, "I'm h2 tag"),
//     ]),
//     React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", {}, "I'm h1 tag"),
//         React.createElement("h2", {}, "I'm h2 tag"),
//     ]),
// ]);
// // but now the code looks so ugly & messy
// // it was just to tell & show that this is core of react 
// // & react isn't only be written with JSX
// // JSX makes it so easy when we have to create tags
// // Bye Bye React.createElement
// // so we will use *JSX* in next episode 


// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);





// ***Episode 1 - Part 5***

// order of files matters a lot
// see in index.html
// if in scripts, we place ./app.js before react scripts , it will throq errors

// why crossorigin, where to place it, where not

// why scripts not in head tag, why in body, can we put them in head 

// if in root div, we have h1 tag already, <h1>Neha is already here</h1>, what will happen? 
// for very few milliseconds it shows h1 tag but then
// h1 tag is replaced(not appended) then by parent 

// h1 tags above & below root, will they work?
// yes will do , cz root in div is of react , every other portion is of HTML

// diff btwn lib & framework
// bcz of we can apply react in short/small portions like div with id root
// react can work independently in a small portion of ur app as well
// react is a piece of JS code
// framework comes with all loads of things







// ***Episode 4 - Part 2***  

// import React from "react"; //coming from react modules
// // import ReactDOM from "react-dom";
// import ReactDOM from "react-dom/client"; // to remove warning 
// // but these imports are not normal JS
// // so we need to tell that it isn't a normal JS file , but a module , write in index.html script

// // now as soon as we save the file , our browser also automatically refresh

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [React.createElement("div", { id: "child" }, [
//         React.createElement("h1", {}, "Neha in this tag"),
//         React.createElement("h2", {}, "I'm h2 tag"),
//     ]),
//     React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", {}, "I'm h1 tag"),
//         React.createElement("h2", {}, "I'm h2 tag"),
//     ]),
// ]);

// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);




// ***Episode 3 - Part 2***
// let's build from scratch
// import React from "react";
// import ReactDOM from "react-dom/client";

// React Element === DOM element
// it is an object
// when we render it onto DOM, it becomes an HTML
// React.createElement => ReactElement(JS Object) => HTMLElement(render)
// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Namaste React"
// );
// // this is core of react, creating React element
// console.log(heading);

// // const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(heading);




// ***Episode 3 - Part 3***
// React.createElement, it is clumsy, it's not a good way , not dev friendly
// JSX was developed -> JS syntax 
// it isn't part of react
// react is diff & jsx is diff, react can be written without jsx too, but jsx makes life easy

// jsx != html inside JS
// jsx is HTML-like or XML-like syntax
// const jsxHeading = <h1 id="heading" className="head">Namaste React using JSX</h1>
// console.log(jsxHeading);

// heading & jsxHeading are both same objects

// jsxHeading is the valid JS 
// jsxHeading isn't the valid pure JS as JS engine can't understand/read it
// but parcel is doing the job BTS
// when the code is wirtten, even before it goes to JS engine, it is transpiled(React.createElement) before & then JS engine gets the code which browser understands
// JSX (transpiled before it reaches JS Engine) - PARCEL - Babel(JS Compiler/Transpiler)

// how is the code running?
// JSX - Babel transpiles it to => React.createElement => ReactElement(JS Object) => HTMLElement(render)
// JSX != HTML , it is HTML-like
// as in HTML it is class, in JSX it is className
// JSX use "camelCase" in attributes
// H.W how to wirte an inage tag, anchor tag inside JSX

// writitng in multiple lines need wrapping with "(, )" bz babel needs to know where JSX starts & ends
// const jsxHeading = (
//     <h1 id="heading" className="head">
//         Namaste React using JSX
//     </h1>
// );
// // use prettier extension

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);






// ***Episode 3 - Part 4***

// // React Element - JSX
// const heading = (
//     <h1 id="heading" className="head" tabIndex="5">
//         Namaste React using JSX
//     </h1>
// );

// // React Component - evrything is a comp in React(head, search , fotter, list of cards, evrything)
// // what's a comp? 2 types of comp in react
// // 1. Class Based Components - OLD - uses JS classes
// // 2. Functional Components - NEW - uses JS Fxn to create comp 

// // React functional comp: just a normal JS fxn, which returns some JSX(React Elt)
// const HeadingComponent = () => {
//     return <h1 className="heading">Namaste React Functional Component</h1>;
// };
// // or
// const HeadingComponent2 = () => <h1 className="heading">Namaste React Functional Component</h1>;
// // or
// // common syntax
// const HeadingComponent3 = () => (
//     <div id="dabba">
//         <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// );
// // all 3 r same

// // if single line, return keyword x , on same fn line
// // const fn = () => true;
// // or 
// // const fn = () => {
//     //     return true;
//     // };

//     // react elt => react func comp : adding array fxn syntax to react elt & making name initials capital

//     // const Title = function () {
//         //     return (
//             //         <h1 className="head" tabIndex="5">
//             //             Namaste React using JSX - Title
//             //         </h1>
//             //     );
//             // };
//             // or
//             const Title = () => (
//                 <h1 className="head" tabIndex="5">
//         Namaste React using JSX - Title
//     </h1>
// );

// // react elt inside react elt
// const elem = <span>React Element</span>
// const title = (
//     <h1 className="head">
//         {elem}
//         Namaste React using JSX - elt
//     </h1>
// );

// const num = 10000;

// // ***cross site scripting - can steal cookie, localStorage, etc, etc
// // const data= api.getData();

// const HeadingComponentt = () => (
//     <div id="dabba">
//         {/* <Title /> */}
//         {/* this is called component compositions: FC inside FC*/}
//         {/* or */}
//         {/* <Title></Title> */}
//         {/* or */}
//         {Title()}        
//         {/* all 3 r same */}

//         {/* right now we r inside jsx btwn "(....JSX....);" -> we can write any JS code inside {} */}
//         {/* {num} */}
//         <h1>{num}</h1>
//         <h1>{console.log("Neha")}</h1>
//         {12+21}

//         {/* react elt inside FC */}
//         {title}

//         {/* {data} */}
//         {/* but JSX is so amazing that it takes care of this kinda injection attacks, JSX escapes it , JSX sanitizes it and then pass 
//         H.W. read more about it*/}
//         <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // render react elt   

// // how to render react func comp?
// root.render(<HeadingComponentt />)






// ***Episode 4 - Part 1***

// Header: logo, nav items
// Body: search, RestaurantContainer(RestaurantCard: img, name of res, star, rating, cuisine, delivery time)
// Footer: copyright, links, address, contact

import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // import -> no need of extension, keep it simple
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import UserContext from "./utils.js/UserContext";
import { CartProvider } from "./utils.js/CartContext";

import { Provider } from "react-redux";
import appStore from "./utils.js/appStore";
// import Grocery from "./components/Grocery";// don't do it 

// const Header = () => {
//     return (
//         <div className="header">
//             <div className="logo-container">
//                 <img className="logo" src="https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-unique-food-logo-png-image_15488394.png" />
//             </div>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About Us</li>
//                     <li>Contact Us</li>
//                     <li>Cart</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// styles be give here too via JS object
// const styleCard = {
//     // backgroundColor : "pink",
//     backgroundColor : "#f0f0f0",
// };
// or in styles={}object directly

// const RestaurantCard = (props) => {
// console.log(props);
// destructuring on the fly
// const RestaurantCard = ({ resName, cuisine }) => {
// or
// const RestaurantCard = (props) => {
//     // const { resName, cuisine } = props;
//     const { resData } = props;
//     // console.log(resData);
//     // destructuring
//     const {
//         name,
//         cuisines,
//         avgRating,
//         sla,
//         cloudinaryImageId
//     } = resData.info;
//     const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

//     return (
//         <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}
//         // style={styleCard}
//         >
//             {/* but all this data is hard-coded, we want to make it dynamic(diff data in diff cards) instead */}



//             {/* ***Episode 4 - Part 2*** */}
//             {/* how we can use same res-card for other res than daawat -> by passing props/ properties just like passing argument to a fxn */}
//             {/* <img
//                 className="res-logo"
//                 alt="res-logo" 
//                 src="https://b.zmtcdn.com/data/pictures/8/21402688/d3dc832107d4c745b8ece63c074fd493_o2_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" />
//                 <h3>Daawat</h3>
//                 <h4>North Indian, Chinese, Mexican</h4>
//                 <h4>4.3 stars</h4>
//                 <h4>8 minutes</h4> */}
//             {/* <img
//                 className="res-logo"
//                 alt="res-logo"
//                 src="https://b.zmtcdn.com/data/pictures/8/21402688/d3dc832107d4c745b8ece63c074fd493_o2_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" /> */}
//             {/* <h3>{props.resName}</h3>
//             <h4>{props.cuisine}</h4> */}
//             {/* destructuring on the fly -JS*/}
//             {/* <h3>{resName}</h3>
//             <h4>{cuisine}</h4>
//             <h4>4.3 stars</h4>
//             <h4>8 minutes</h4> */}

//             <img
//                 className="res-logo"
//                 alt="res-logo"
//                 src={CDN_URL + cloudinaryImageId}
//             />
//             <h3>{name}</h3>
//             <h4>{cuisines.join(", ")}</h4>
//             {/* cuisines is an array, ans will be "," separate dishes */}
//             <h4>{avgRating} ⭐</h4>
//             <h4>{sla.deliveryTime} mins</h4>
//         </div>
//     )
// }
// data come from backend from APIs in form of JSON
// *****CONFIG driven UI (Frontend System Design)
// /ui is driven by Config

// const resObj = {
//     info: {
//         id: "299370",
//         name: "The Prashadam",
//         city: "Chandigarh",
//         slugs: {
//             restaurant: "the-prashadam-panchkula-panchkula",
//             city: "chandigarh"
//         },
//         uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
//         cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/3/b00fee83-ae90-46e8-a8b9-d8e5e4f50497_299370.JPG",
//         locality: "Manimajra",
//         areaName: "Manimajra",
//         costForTwo: "25000",
//         costForTwoMessage: "₹250 for two",
//         cuisines: [
//             "Sweets",
//             "Indian"
//         ],
//         avgRating: 4.5,
//         veg: true,
//         feeDetails: {
//             restaurantId: "299370",
//             fees: [
//                 {}
//             ]
//         },
//         parentId: "212768",
//         avgRatingString: "4.5",
//         totalRatingsString: "19K+ ratings",
//         sla: {
//             restaurantId: "299370",
//             deliveryTime: 25,
//             minDeliveryTime: 25,
//             maxDeliveryTime: 30,
//             lastMileTravel: 3,
//             serviceability: "SERVICEABLE",
//             stressFactor: 1,
//             rainMode: "RAIN_MODE_NONE",
//             longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
//             zoneId: 385,
//             slaString: "25-30 MINS",
//             lastMileTravelString: "3.0 km",
//             iconType: "ICON_TYPE_EMPTY"
//         },
//         availability: {
//             nextCloseTime: "2026-03-23 00:00:00",
//             visibility: true,
//             opened: true,
//             restaurantClosedMeta: {}
//         },
//         aggregatedDiscountInfo: {
//             header: "70% Off",
//             shortDescriptionList: [
//                 {
//                     meta: "70% Off | Use FIRSTBITE",
//                     discountType: "Percentage",
//                     operationType: "RESTAURANT"
//                 },
//                 {
//                     meta: "Get every item @ 128",
//                     discountType: "FinalPrice",
//                     operationType: "RESTAURANT"
//                 }
//             ],
//             descriptionList: [
//                 {
//                     meta: "70% Off | Use FIRSTBITE",
//                     discountType: "Percentage",
//                     operationType: "RESTAURANT"
//                 },
//                 {
//                     meta: "Get every item @ 128",
//                     discountType: "FinalPrice",
//                     operationType: "RESTAURANT"
//                 }
//             ],
//             visible: true
//         },
//         badges: {},
//         slugString: "the-prashadam-panchkula-panchkula",
//         isOpen: true,
//         labels: [
//             {
//                 title: "Timings",
//                 message: "null"
//             },
//             {
//                 title: "Address",
//                 message: "Prashadam Sweets Sco 810 Nac,Chandigarh 160101"
//             },
//             {
//                 title: "Cuisines",
//                 message: "Sweets,Indian"
//             }
//         ],
//         totalRatings: 19000,
//         aggregatedDiscountInfoV2: {
//             header: "70% Off",
//             shortDescriptionList: [
//                 {
//                     meta: "70% Off | Use FIRSTBITE",
//                     discountType: "Percentage",
//                     operationType: "RESTAURANT"
//                 },
//                 {
//                     meta: "Get every item @ 128",
//                     discountType: "FinalPrice",
//                     operationType: "RESTAURANT"
//                 }
//             ],
//             descriptionList: [
//                 {
//                     meta: "70% Off | Use FIRSTBITE",
//                     discountType: "Percentage",
//                     operationType: "RESTAURANT"
//                 },
//                 {
//                     meta: "Get every item @ 128",
//                     discountType: "FinalPrice",
//                     operationType: "RESTAURANT"
//                 }
//             ],
//             couponDetailsCta: "View coupon details"
//         },
//         type: "F",
//         nudgeBanners: [
//             {
//                 priority: 2,
//                 discountInfo: {
//                     discountType: "FinalPrice",
//                     value: 128
//                 },
//                 unlockedMessage: "Deal of the Day unlocked!",
//                 minItemCount: 1,
//                 maxItemCount: 1,
//                 type: "SILD",
//                 nudgeTagInfo: {
//                     title: "Deal of the Day",
//                     fontName: "FONT_NAME_CONDENSED_BOLD"
//                 },
//                 logoCtx: {},
//                 movComputationType: "MOV_COMPUTATION_TYPE_DISCOUNTED_PRICE"
//             }
//         ],
//         headerBanner: {
//             url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/299370"
//         },
//         ratingSlab: "RATING_SLAB_5",
//         orderabilityCommunication: {
//             title: {},
//             subTitle: {},
//             message: {},
//             customIcon: {},
//             commsStyling: {}
//         },
//         hasBestsellerItems: true,
//         cartOrderabilityNudgeBanner: {
//             parameters: {},
//             presentation: {}
//         },
//         latLong: "30.711351,76.844459",
//         backgroundImageOverlayInfo: {},
//         featuredSectionInfo: {}
//     },
//     analytics: {}
// }

// const resJson = {
//     "statusCode": 0, "data": { "statusMessage": "done successfully", "pageOffset": { "nextOffset": "CLpmEOskKIC4+pmqkbr5czC7EDgC", "widgetOffset": { "restaurantCountWidget": "", "inlineFacetFilter": "", "collectionV5RestaurantListWidget_SimRestoRelevance_food": "10", "collectionV5MastheadWidget": "" } }, "cards": [{ "card": { "card": { "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead", "collectionId": "83661", "title": "Desserts", "description": "Feast on amazing desserts to satisfy your sweet tooth.", "imageId": "COLLECTIONS/IMAGES/MERCH/2024/8/20/05c15369-c8fc-4d35-a823-706bd8b8ce1c_desserts (1).png", "aspectRatio": "3.44", "cta": { "link": "swiggy://collectionV2?collection_id=83661&tags=layout_CCS_Dessert,dessert", "type": "collectionv2" }, "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT", "count": "130 restaurants", "navBarConfig": {} } } }, { "card": { "card": { "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget", "sortConfigs": [{ "key": "relevance", "title": "Relevance (Default)", "selected": true, "defaultSelection": true }, { "key": "deliveryTimeAsc", "title": "Delivery Time" }, { "key": "modelBasedRatingDesc", "title": "Rating" }, { "key": "costForTwoAsc", "title": "Cost: Low to High" }, { "key": "costForTwoDesc", "title": "Cost: High to Low" }], "restaurantCount": 130, "facetList": [{ "label": "10 Mins Delivery", "id": "isRestaurantBolt", "selection": "SELECT_TYPE_SINGLESELECT", "facetInfo": [{ "label": "10 Mins Delivery", "id": "isRestaurantBoltfacetquery0", "analytics": {}, "openFilter": true }], "viewType": "VIEW_TYPE_FLATTENED", "subLabel": "Filter by", "icon": "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png", "selectedIcon": "COLLECTIONS/IMAGES/MERCH/2024/12/26/3072d307-2f8e-471c-862d-d426fb93c0bf_4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png" }, { "label": "Veg/Non-Veg", "id": "isVeg", "selection": "SELECT_TYPE_MULTISELECT", "facetInfo": [{ "label": "Non Veg", "id": "isVegfacetquery0", "analytics": {}, "openFilter": true }, { "label": "Pure Veg", "id": "isVegfacetquery1", "analytics": {}, "openFilter": true }], "viewType": "VIEW_TYPE_HALF_CARD", "subLabel": "Filter by", "openFilter": true }, { "label": "Ratings", "id": "rating", "selection": "SELECT_TYPE_MULTISELECT", "facetInfo": [{ "label": "Ratings", "id": "ratingfacetquery0", "analytics": {}, "openFilter": true }, { "label": "Ratings 4.0+", "id": "ratingfacetquery1", "analytics": {}, "openFilter": true }, { "label": "Ratings 4.5+", "id": "ratingfacetquery2", "analytics": {}, "openFilter": true }], "viewType": "VIEW_TYPE_HALF_CARD", "subLabel": "Filter by", "openFilter": true }, { "label": "Delivery Time", "id": "deliveryTime", "selection": "SELECT_TYPE_MULTISELECT", "facetInfo": [{ "label": "Less than 30 mins", "id": "deliveryTimefacetquery0", "analytics": {}, "openFilter": true }, { "label": "Less than 45 mins", "id": "deliveryTimefacetquery1", "analytics": {}, "openFilter": true }], "viewType": "VIEW_TYPE_HALF_CARD", "subLabel": "Filter by", "openFilter": true }, { "label": "Cost For Two", "id": "costForTwo", "selection": "SELECT_TYPE_MULTISELECT", "facetInfo": [{ "label": "Less than Rs. 300", "id": "costForTwofacetquery0", "analytics": {}, "openFilter": true }, { "label": "Rs.300 - Rs.600", "id": "costForTwofacetquery1", "analytics": {}, "openFilter": true }, { "label": "Greater than Rs. 600", "id": "costForTwofacetquery2", "analytics": {}, "openFilter": true }], "viewType": "VIEW_TYPE_HALF_CARD", "subLabel": "Filter by", "openFilter": true }], "widgetId": "inlineFacetFilter" } } }, { "card": { "card": { "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget", "layout": { "rows": 1, "widgetPadding": { "left": 16, "top": 12, "right": 16 }, "widgetTheme": { "defaultMode": { "backgroundColour": "#FFFFFF", "theme": "THEME_TYPE_LIGHT" }, "darkMode": { "backgroundColour": "#1B3028", "theme": "THEME_TYPE_DARK" } } }, "id": "restaurantCountWidget", "gridElements": { "infoWithStyle": { "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2", "text": "130 Restaurants to explore", "headerStyling": { "textSize": 15, "textColor": "text_color_highest_emphasis", "textFontName": "FONT_NAME_HEADER_H5", "maxLines": 1 } } } } } }, { "card": { "card": { "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant", "info": { "id": "40757", "name": "New Panna Sweets", "cloudinaryImageId": "upm1vaopvuy5zhzhtkbq", "locality": "Manimajra", "areaName": "Manimajra", "costForTwo": "₹200 for two", "cuisines": ["Sweets", "South Indian", "Chinese", "Bakery", "Chaat", "Fast Food", "Beverages", "Desserts", "Street Food"], "avgRating": 4.4, "veg": true, "parentId": "147447", "avgRatingString": "4.4", "totalRatingsString": "83K+", "promoted": true, "adTrackingId": "cid=b3945416-4d17-4897-9e31-673b7d542a86~p=0~adgrpid=b3945416-4d17-4897-9e31-673b7d542a86#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=40757~plpr=COLLECTION~eid=ff4c9541-b349-4a3e-a8c4-3703e6eed1f1~srvts=1774168072197~collid=83661", "sla": { "deliveryTime": 34, "lastMileTravel": 3, "serviceability": "SERVICEABLE", "slaString": "30-35 mins", "lastMileTravelString": "3.0 km", "iconType": "ICON_TYPE_EMPTY" }, "availability": { "nextCloseTime": "2026-03-22 23:15:00", "opened": true }, "badges": {}, "isOpen": true, "type": "F", "badgesV2": { "entityBadges": { "textExtendedBadges": {}, "textBased": {}, "imageBased": {} } }, "aggregatedDiscountInfoV3": { "header": "70% OFF", "subHeader": "UPTO ₹140", "logoCtx": { "text": "BENEFITS" } }, "orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} }, "differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } }, "reviewsSummary": {}, "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT", "restaurantOfferPresentationInfo": {}, "externalRatings": { "aggregatedRating": { "rating": "3.8", "ratingCount": "943" }, "source": "GOOGLE", "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag" }, "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY", "campaignId": "b3945416-4d17-4897-9e31-673b7d542a86" }, "analytics": {}, "cta": { "link": "swiggy://menu?restaurant_id=40757&source=collection&query=Dessert", "text": "RESTAURANT_MENU", "type": "DEEPLINK" }, "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food" }, "relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" } } }, { "card": { "card": { "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant", "info": { "id": "407830", "name": "The Belgian Waffle Co.", "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/e3c84a17-f192-4fad-8f07-796851ff8eaa_407830.JPG", "locality": "SECTOR-9", "areaName": "Panchkula", "costForTwo": "₹200 for two", "cuisines": ["Waffle", "Desserts", "Ice Cream", "Beverages"], "avgRating": 4.5, "veg": true, "parentId": "2233", "avgRatingString": "4.5", "totalRatingsString": "2.3K+", "sla": { "deliveryTime": 25, "lastMileTravel": 0.8, "serviceability": "SERVICEABLE", "slaString": "20-25 mins", "lastMileTravelString": "0.8 km", "iconType": "ICON_TYPE_EMPTY" }, "availability": { "nextCloseTime": "2026-03-23 02:00:00", "opened": true }, "badges": { "imageBadges": [{ "imageId": "android/static-assets/icons/big_rx.png", "description": "bolt!" }, { "imageId": "v1695133679/badges/Pure_Veg111.png", "description": "pureveg" }] }, "isOpen": true, "aggregatedDiscountInfoV2": {}, "type": "F", "badgesV2": { "entityBadges": { "textBased": {}, "imageBased": { "badgeObject": [{ "attributes": { "description": "bolt!", "imageId": "android/static-assets/icons/big_rx.png" } }, { "attributes": { "imageId": "v1695133679/badges/Pure_Veg111.png", "description": "pureveg" } }] }, "textExtendedBadges": {} } }, "orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} }, "differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } }, "reviewsSummary": {}, "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT", "restaurantOfferPresentationInfo": {}, "externalRatings": { "aggregatedRating": { "rating": "--" } }, "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY" }, "analytics": {}, "cta": { "link": "swiggy://menu?restaurant_id=407830&source=collection&query=Dessert", "text": "RESTAURANT_MENU", "type": "DEEPLINK" }, "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food" }, "relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" } } }, { "card": { "card": { "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant", "info": { "id": "1003835", "name": "Bakingo", "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/18/3a431caf-ac95-4962-a916-494a114c6749_1003835.JPG", "locality": "Zirakpur", "areaName": "Muchalla", "costForTwo": "₹299 for two", "cuisines": ["Bakery", "Desserts", "Beverages", "Snacks"], "avgRating": 4.6, "parentId": "3818", "avgRatingString": "4.6", "totalRatingsString": "1.2K+", "promoted": true, "adTrackingId": "cid=95b84150-78da-4af1-a902-52d8e37fec8b~p=3~adgrpid=95b84150-78da-4af1-a902-52d8e37fec8b#ag13~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1003835~plpr=COLLECTION~eid=e7442dc3-10af-484a-bd9d-545e766ee76c~srvts=1774168072197~collid=83661", "sla": { "deliveryTime": 29, "lastMileTravel": 5, "serviceability": "SERVICEABLE", "slaString": "25-30 mins", "lastMileTravelString": "5.0 km", "iconType": "ICON_TYPE_EMPTY" }, "availability": { "nextCloseTime": "2026-03-23 00:00:00", "opened": true }, "badges": { "imageBadges": [{ "imageId": "Rxawards/_CATEGORY-Desserts.png", "description": "Delivery!" }] }, "isOpen": true, "type": "F", "badgesV2": { "entityBadges": { "textBased": {}, "imageBased": { "badgeObject": [{ "attributes": { "imageId": "Rxawards/_CATEGORY-Desserts.png", "description": "Delivery!" } }] }, "textExtendedBadges": {} } }, "aggregatedDiscountInfoV3": { "header": "60% OFF", "subHeader": "UPTO ₹110", "logoCtx": { "text": "BENEFITS" } }, "orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} }, "differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } }, "reviewsSummary": {}, "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT", "restaurantOfferPresentationInfo": {}, "externalRatings": { "aggregatedRating": { "rating": "--" } }, "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY", "campaignId": "95b84150-78da-4af1-a902-52d8e37fec8b" }, "analytics": {}, "cta": { "link": "swiggy://menu?restaurant_id=1003835&source=collection&query=Dessert", "text": "RESTAURANT_MENU", "type": "DEEPLINK" }, "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food" }, "relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" } } }, { "card": { "card": { "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant", "info": { "id": "711000", "name": "Cheesecake & co.", "cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2", "locality": "Indl Area", "areaName": "Indl Area", "costForTwo": "₹500 for two", "cuisines": ["Bakery", "Desserts"], "avgRating": 4.7, "veg": true, "parentId": "387417", "avgRatingString": "4.7", "totalRatingsString": "841", "sla": { "deliveryTime": 35, "lastMileTravel": 7.4, "serviceability": "SERVICEABLE", "slaString": "35-40 mins", "lastMileTravelString": "7.4 km", "iconType": "ICON_TYPE_EMPTY" }, "availability": { "nextCloseTime": "2026-03-23 00:00:00", "opened": true }, "badges": { "imageBadges": [{ "imageId": "newg.png", "description": "Gourmet" }] }, "isOpen": true, "type": "F", "badgesV2": { "entityBadges": { "textBased": {}, "imageBased": { "badgeObject": [{ "attributes": { "imageId": "newg.png", "description": "Gourmet" } }] }, "textExtendedBadges": {} } }, "aggregatedDiscountInfoV3": { "header": "50% OFF", "subHeader": "UPTO ₹100", "logoCtx": { "text": "BENEFITS" } }, "orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} }, "differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } }, "reviewsSummary": {}, "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT", "restaurantOfferPresentationInfo": {}, "externalRatings": { "aggregatedRating": { "rating": "--" } }, "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY" }, "analytics": {}, "cta": { "link": "swiggy://menu?restaurant_id=711000&source=collection&query=Dessert", "text": "RESTAURANT_MENU", "type": "DEEPLINK" }, "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food" }, "relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" } } }, { "card": { "card": { "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant", "info": { "id": "350219", "name": "NIC Ice Creams", "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/4/6bd25e69-3be7-46ea-8607-19e85df628fa_350219.JPG", "locality": "Sector-6", "areaName": "Panchkula", "costForTwo": "₹120 for two", "cuisines": ["Ice Cream", "Desserts"], "avgRating": 4.8, "veg": true, "parentId": "6249", "avgRatingString": "4.8", "totalRatingsString": "4.7K+", "promoted": true, "adTrackingId": "cid=47b9d757-eab8-4cd9-b9ea-5eec78799c54~p=7~adgrpid=47b9d757-eab8-4cd9-b9ea-5eec78799c54#ag10~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=350219~plpr=COLLECTION~eid=2698aef7-66a1-4e42-a614-91e9a71efe3a~srvts=1774168072197~collid=83661", "sla": { "deliveryTime": 16, "lastMileTravel": 1.9, "serviceability": "SERVICEABLE", "slaString": "15-20 mins", "lastMileTravelString": "1.9 km", "iconType": "ICON_TYPE_EMPTY" }, "availability": { "nextCloseTime": "2026-03-22 23:00:00", "opened": true }, "badges": { "imageBadges": [{ "imageId": "android/static-assets/icons/big_rx.png", "description": "bolt!" }] }, "isOpen": true, "type": "F", "badgesV2": { "entityBadges": { "imageBased": { "badgeObject": [{ "attributes": { "imageId": "android/static-assets/icons/big_rx.png", "description": "bolt!" } }] }, "textExtendedBadges": {}, "textBased": {} } }, "aggregatedDiscountInfoV3": { "header": "ITEMS", "subHeader": "AT ₹42", "logoCtx": { "text": "BENEFITS" } }, "orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} }, "differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } }, "reviewsSummary": {}, "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT", "restaurantOfferPresentationInfo": {}, "externalRatings": { "aggregatedRating": { "rating": "--" } }, "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY", "campaignId": "47b9d757-eab8-4cd9-b9ea-5eec78799c54" }, "analytics": {}, "cta": { "link": "swiggy://menu?restaurant_id=350219&source=collection&query=Dessert", "text": "RESTAURANT_MENU", "type": "DEEPLINK" }, "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food" }, "relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" } } }, { "card": { "card": { "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant", "info": { "id": "299370", "name": "The Prashadam", "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/3/b00fee83-ae90-46e8-a8b9-d8e5e4f50497_299370.JPG", "locality": "Manimajra", "areaName": "Manimajra", "costForTwo": "₹250 for two", "cuisines": ["Sweets", "Indian", "Chinese", "Continental", "Snacks", "Desserts", "Beverages", "Thalis", "Fast Food", "Chaat"], "avgRating": 4.5, "veg": true, "parentId": "212768", "avgRatingString": "4.5", "totalRatingsString": "19K+", "sla": { "deliveryTime": 28, "lastMileTravel": 3, "serviceability": "SERVICEABLE", "slaString": "25-30 mins", "lastMileTravelString": "3.0 km", "iconType": "ICON_TYPE_EMPTY" }, "availability": { "nextCloseTime": "2026-03-23 00:00:00", "opened": true }, "badges": { "imageBadges": [{ "imageId": "v1695133679/badges/Pure_Veg111.png", "description": "pureveg" }] }, "isOpen": true, "type": "F", "badgesV2": { "entityBadges": { "textBased": {}, "imageBased": { "badgeObject": [{ "attributes": { "imageId": "v1695133679/badges/Pure_Veg111.png", "description": "pureveg" } }] }, "textExtendedBadges": {} } }, "aggregatedDiscountInfoV3": { "header": "70% OFF", "subHeader": "UPTO ₹140", "logoCtx": { "text": "BENEFITS" } }, "orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} }, "differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } }, "reviewsSummary": {}, "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT", "restaurantOfferPresentationInfo": {}, "externalRatings": { "aggregatedRating": { "rating": "4.2", "ratingCount": "1.1K+" }, "source": "GOOGLE", "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag" }, "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY" }, "analytics": {}, "cta": { "link": "swiggy://menu?restaurant_id=299370&source=collection&query=Dessert", "text": "RESTAURANT_MENU", "type": "DEEPLINK" }, "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food" }, "relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" } } }, { "card": { "card": { "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant", "info": { "id": "958149", "name": "The Belgian Waffle Xpress", "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/4/36814bab-aac0-44c2-a729-2e2bd5dd4f34_958149.JPG", "locality": "Panchkula", "areaName": "Sector 14", "costForTwo": "₹300 for two", "cuisines": ["Waffle", "Desserts", "Beverages"], "avgRating": 4.2, "veg": true, "parentId": "22469", "avgRatingString": "4.2", "totalRatingsString": "271", "promoted": true, "adTrackingId": "cid=c634d2fa-a524-43ae-a7ab-32ff5b155bb6~p=8~adgrpid=c634d2fa-a524-43ae-a7ab-32ff5b155bb6#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=958149~plpr=COLLECTION~eid=75f3b32d-1678-401c-a20a-e905f110b12c~srvts=1774168072197~collid=83661", "sla": { "deliveryTime": 27, "lastMileTravel": 1.8, "serviceability": "SERVICEABLE", "slaString": "25-30 mins", "lastMileTravelString": "1.8 km", "iconType": "ICON_TYPE_EMPTY" }, "availability": { "nextCloseTime": "2026-03-23 03:00:00", "opened": true }, "badges": { "imageBadges": [{ "imageId": "android/static-assets/icons/big_rx.png", "description": "bolt!" }] }, "isOpen": true, "type": "F", "badgesV2": { "entityBadges": { "textBased": {}, "imageBased": { "badgeObject": [{ "attributes": { "description": "bolt!", "imageId": "android/static-assets/icons/big_rx.png" } }] }, "textExtendedBadges": {} } }, "aggregatedDiscountInfoV3": { "header": "60% OFF", "subHeader": "UPTO ₹120", "logoCtx": { "text": "BENEFITS" } }, "orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} }, "differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } }, "reviewsSummary": {}, "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT", "restaurantOfferPresentationInfo": {}, "externalRatings": { "aggregatedRating": { "rating": "--" } }, "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY", "campaignId": "c634d2fa-a524-43ae-a7ab-32ff5b155bb6" }, "analytics": {}, "cta": { "link": "swiggy://menu?restaurant_id=958149&source=collection&query=Dessert", "text": "RESTAURANT_MENU", "type": "DEEPLINK" }, "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food" }, "relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" } } }, { "card": { "card": { "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant", "info": { "id": "553446", "name": "Ram Dairy", "cloudinaryImageId": "df7ukxdja4t57rrdbixb", "locality": "Panchkula", "areaName": "Sector 21 Panchkula", "costForTwo": "₹200 for two", "cuisines": ["Sweets", "Snacks", "Indian", "Beverages", "Desserts", "Healthy Food", "Home Food"], "avgRating": 4.6, "veg": true, "parentId": "166269", "avgRatingString": "4.6", "totalRatingsString": "5.0K+", "sla": { "deliveryTime": 23, "lastMileTravel": 3, "serviceability": "SERVICEABLE", "slaString": "20-25 mins", "lastMileTravelString": "3.0 km", "iconType": "ICON_TYPE_EMPTY" }, "availability": { "nextCloseTime": "2026-03-22 21:40:00", "opened": true }, "badges": { "imageBadges": [{ "imageId": "v1695133679/badges/Pure_Veg111.png", "description": "pureveg" }] }, "isOpen": true, "type": "F", "badgesV2": { "entityBadges": { "textBased": {}, "imageBased": { "badgeObject": [{ "attributes": { "imageId": "v1695133679/badges/Pure_Veg111.png", "description": "pureveg" } }] }, "textExtendedBadges": {} } }, "aggregatedDiscountInfoV3": { "header": "₹550 OFF", "subHeader": "ABOVE ₹2499", "discountTag": "FLAT DEAL", "logoCtx": { "text": "BENEFITS" } }, "orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} }, "differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } }, "reviewsSummary": {}, "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT", "restaurantOfferPresentationInfo": {}, "externalRatings": { "aggregatedRating": { "rating": "--" } }, "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY" }, "analytics": {}, "cta": { "link": "swiggy://menu?restaurant_id=553446&source=collection&query=Dessert", "text": "RESTAURANT_MENU", "type": "DEEPLINK" }, "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food" }, "relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" } } }, { "card": { "card": { "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant", "info": { "id": "856752", "name": "Captain Sam's Pizza", "cloudinaryImageId": "dd99a006af6c771c04af5d63d972588a", "locality": "Sector 5", "areaName": "Sector 5, MDC", "costForTwo": "₹300 for two", "cuisines": ["Pizzas", "Italian", "American", "Fast Food", "Pastas", "Sweets", "Desserts", "Beverages"], "avgRating": 3.8, "veg": true, "parentId": "382786", "avgRatingString": "3.8", "totalRatingsString": "2.1K+", "promoted": true, "adTrackingId": "cid=e209854d-497c-4974-a825-06fcb0bde402~p=9~adgrpid=e209854d-497c-4974-a825-06fcb0bde402#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=856752~plpr=COLLECTION~eid=5a8f0de5-9cb0-4c11-a3f2-fdc79f84d954~srvts=1774168072197~collid=83661", "sla": { "deliveryTime": 30, "lastMileTravel": 3, "serviceability": "SERVICEABLE", "slaString": "30-35 mins", "lastMileTravelString": "3.0 km", "iconType": "ICON_TYPE_EMPTY" }, "availability": { "nextCloseTime": "2026-03-22 23:59:00", "opened": true }, "badges": { "imageBadges": [{ "imageId": "v1695133679/badges/Pure_Veg111.png", "description": "pureveg" }] }, "isOpen": true, "type": "F", "badgesV2": { "entityBadges": { "textBased": {}, "imageBased": { "badgeObject": [{ "attributes": { "imageId": "v1695133679/badges/Pure_Veg111.png", "description": "pureveg" } }] }, "textExtendedBadges": {} } }, "aggregatedDiscountInfoV3": { "header": "ITEMS", "subHeader": "AT ₹8", "logoCtx": { "text": "BENEFITS" } }, "orderabilityCommunication": { "title": {}, "subTitle": {}, "message": {}, "customIcon": {}, "commsStyling": {} }, "differentiatedUi": { "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT", "differentiatedUiMediaDetails": { "mediaType": "ADS_MEDIA_ENUM_IMAGE", "lottie": {}, "video": {} } }, "reviewsSummary": {}, "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT", "restaurantOfferPresentationInfo": {}, "externalRatings": { "aggregatedRating": { "rating": "--" } }, "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY", "campaignId": "e209854d-497c-4974-a825-06fcb0bde402" }, "analytics": {}, "cta": { "link": "swiggy://menu?restaurant_id=856752&source=collection&query=Dessert", "text": "RESTAURANT_MENU", "type": "DEEPLINK" }, "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food" }, "relevance": { "type": "RELEVANCE_TYPE_ON_MENU_RETURN", "sectionId": "MENU_RETURN_FOOD" } } }], "firstOffsetRequest": true, "nextFetch": 3 }, "tid": "7b4b2a4b-206b-430e-b1b9-f9b77f1ec845", "sid": "qd076ccf991-eb58-46f5-bc87-abdb3237b", "deviceId": "8448cb0f-7641-159d-c6f0-677aca8e8167", "csrfToken": "D5dDdxA5ZPpU-F2qQCk1AGIVhZSf2-EzI7z2Yt9k"
// };

// const Body = () => {
//     const resList = resJson.data.cards
//         .filter((item) => item.card?.card?.info)
//         .map((item) => item.card.card);
//     // optional chaining

//     return (
//         <div className="body">
//             <div className="search">Search</div>
//             <div className="res-container">
//                 {/* RestaurantCard Comp*/}
//                 {/* <RestaurantCard
//                     resName="Daawat"
//                     cuisine="North Indian, Chinese, Mexican"
//                 /> */}
//                 {/* difficult to pass all one by one , instead create an obj & put data ther & pass here */}
//                 {/* passing props */}
//                 {/* <RestaurantCard resData={resObj} /> */}
//                 {/* adding resList now */}
//                 {resList.map((restaurant) => (
//                     <RestaurantCard
//                         key={restaurant.info.id}
//                         // to remove key warning, for uniqueness
//                         // *******always provide key with map
//                         // why: if no key/id, react will re-render all res-cards, as we don't know where to place new card
//                         // so for optimization
//                         // we can use index as the key also-> but not recommended, read official docs
//                         resData={restaurant}
//                     />
//                 ))}
//                 {/* <RestaurantCard resName="McD" cuisine="Burger, Fast Food" /> */}
//             </div>
//         </div>
//     )
// }

// not using keys(not acceptable) <<<<<< index as key <<<<<<<<<<<<<<<< unique id (best practice)

const Grocery = lazy(() => import("./components/Grocery"));
// 1 liner has a lot of power to do magic
// import via lazy fxn, which comes from react lib, it takes a callbakc fxn, the callback fxn uses import, import takes grocery comp path 

const AppLayout = () => {
    const [userName, setuserName] = useState();

    // authentication
    useEffect(()=>{
        // make api call  and sned username & pswd
        const data = {
            name: "Naina",
        };
        setuserName(data.name);
    },[])

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName}}>
        <div className="app min-h-screen bg-gray-50">
            <Header />
            <Outlet />
            {/* Outlet will be filled with the child acc to the path */}
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    // configuration is array of list/object
    // object
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/grocery",
                element:
                    <Suspense
                        fallback={
                            <div className="flex min-h-[40vh] items-center justify-center p-4">
                                <p className="rounded-lg bg-white px-6 py-3 text-sm text-gray-600 shadow">
                                    Loading grocery…
                                </p>
                            </div>
                        }>
                        <Grocery />
                    </Suspense>,
                // slow 3g network pe check kro , shows loading first then grocery
            },
            {
                path: "/restaurant/:resId",
                // resId is dynamic
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />,
    },
    // {
    //     path: "/about",
    //     element: <About />,
    // },
    // {
    //     path: "/contact",
    //     element: <Contact />,
    // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />)

root.render(<RouterProvider router={appRouter} />)