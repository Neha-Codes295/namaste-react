<!-- ***Episode 11 - Part 1***  -->
<!-- Data is the new Oil
Learning Higher Order Components
HOC is a fxn that takes a comp & returns a comp
it enhances the comp first & give back new comp
let's learn by adding a promoting label feature on the rest cards
 -->




<!-- ***Episode 11 - Part 2***  -->
<!-- 2 imp things now 
==>>Controlled & uncontrolled comps
==>>Lifting the state up

UI & Data layer -> React App
Ui layer(jsx) is powered by Data layer(state, props, local vars, {code})
talking majory about Data layer -> managing data properly

let's build full menu page now

 -->




<!-- ***Episode 11 - Part 3***  -->
<!-- 
React Dev Tools is very crucial , use it to debug
Kinda: representation of Virtual DOM

Controlled Comp: paretn telling child , what to do , like accordian

modify state vars of parent by child 
 -->




<!-- ***Episode 11 - Part 4***  -->
<!-- 
Props Drilling***
Hierarchy of comps: data flows(top->bottom): single direction
this is problem

sol is below
React Context is super power to use data globally , instead of passing props everywhere
ex: login in user info 

see UserContext file 
useContext hoook to access data****

.Consumer is the power(for CBC), it can also be used for displaying data -> like a comp
use FC-> normaal way

Provideer can be used for a specific portion too 

read redux: used for same
external lib
reduxtoolkit(RTK)
 -->