<!-- ***Episode 5 - Part 1***  -->
<!-- let's see real super powers of react
everything react can do, can be done via html, css, js & react is also using same but with less code, fast, prod-ready
*********React Hooks

let's clean our app first 
not good practice to keepsuch large file , so make separate firles for separate comp
ervythign is in root structure, let's keep it in src folder(industry converntion)
move app.js to src
now change routes too 
clean app.js
separate file for all comp in comp folder
header.js/body.js

but some ppl also name it as body.jsx/header.jsx or .tsx ?
.js is good to go , if using typescript , use .tsx, no such overthinking need to do, it's just a way of writing code in one'd own way, zero diff in them
so keep it simple: .js

pull code now in comp, export it(2 types: default-single export & named-multiple export)
import the route to app

H.W.can we do named export aloong with default export?

hard-coded data ko hum comp file mei nhi rkhenege: resJson, url of img, logos
keep it inside constant/config/util.js: utilities that'llbe used all across the app

-->





<!-- ***Episode 5 - Part 2***  -->
<!-- learn React Hooks now
let's make app dynamic/interactive
make button/filter for top rated rests(4+ stars)
event handler/onClick handler

***React Hooks
normal JS utility fxn given by react, but fxn is with superpower
most imp are 2
1. useState()
2. useEffect()
import like named imports

React makes DOM operations super fast & efficient



*******React uses: Reconciliation Algo (React Fiber) -> React16
res-container -> 10 res-cards
ui changes now to filter from 10 to 3 filtered cards
react creates a ***Virtual DOM: not an actual DOM(div inside div, ...)
Virtual DOM is representation od actual DOM
ex: console.log(body)-> gives object i.e. virtual DOM
so Virtual DOM is normal JS object
 
***Diff Algo : finds diff btwn 2 Virtual DOMs(updated & previous)
then calculates diff & actually updates the DOM 
automatically x , automagically
keeps sync btwn UI layer & data layer
 
 -->