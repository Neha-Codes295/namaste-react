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
import React from "react";
import ReactDOM from "react-dom/client";

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

// React Element - JSX
const heading = (
    <h1 id="heading" className="head" tabIndex="5">
        Namaste React using JSX
    </h1>
);

// React Component - evrything is a comp in React(head, search , fotter, list of cards, evrything)
// what's a comp? 2 types of comp in react
// 1. Class Based Components - OLD - uses JS classes
// 2. Functional Components - NEW - uses JS Fxn to create comp 

// React functional comp: just a normal JS fxn, which returns some JSX(React Elt)
const HeadingComponent = () => {
    return <h1 className="heading">Namaste React Functional Component</h1>;
};
// or
const HeadingComponent2 = () => <h1 className="heading">Namaste React Functional Component</h1>;
// or
// common syntax
const HeadingComponent3 = () => (
    <div id="dabba">
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);
// all 3 r same

// if single line, return keyword x , on same fn line
// const fn = () => true;
// or 
// const fn = () => {
//     return true;
// };

// react elt => react func comp : adding array fxn syntax to react elt & making name initials capital

// const Title = function () {
//     return (
//         <h1 className="head" tabIndex="5">
//             Namaste React using JSX - Title
//         </h1>
//     );
// };
// or
const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX - Title
    </h1>
);

// react elt inside react elt
const elem = <span>React Element</span>
const title = (
    <h1 className="head">
        {elem}
        Namaste React using JSX - elt
    </h1>
);

const num = 10000;

// ***cross site scripting - can steal cookie, localStorage, etc, etc
// const data= api.getData();

const HeadingComponentt = () => (
    <div id="dabba">
        {/* <Title /> */}
        {/* this is called component compositions: FC inside FC*/}
        {/* or */}
        {/* <Title></Title> */}
        {/* or */}
        {Title()}        
        {/* all 3 r same */}

        {/* right now we r inside jsx btwn "(....JSX....);" -> we can write any JS code inside {} */}
        {/* {num} */}
        <h1>{num}</h1>
        <h1>{console.log("Neha")}</h1>
        {12+21}

        {/* react elt inside FC */}
        {title}

        {/* {data} */}
        {/* but JSX is so amazing that it takes care of this kinda injection attacks, JSX escapes it , JSX sanitizes it and then pass 
        H.W. read more about it*/}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // render react elt   

// how to render react func comp?
root.render(<HeadingComponentt />)






// ***Episode 3 - Part 5***