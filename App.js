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

import React from "react"; //coming from react modules
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client"; // to remove warning 
// but these imports are not normal JS
// so we need to tell that it isn't a normal JS file , but a module , write in index.html script

// now as soon as we save the file , our browser also automatically refresh

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "Neha in this tag"),
        React.createElement("h2", {}, "I'm h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag"),
    ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
