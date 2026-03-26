<!-- ***Episode 8 - Part 1***  -->
<!-- earn class based comp now, imp for interviews, but old way
let's do in about page
make it func comp first then convert to class based
User.js , make it  and we'll show team  in about
UserClass si class based comp , User.js is normal FC
FC-> JS fxn
Class comp-> JS class
render method-> returns piece of jsx

class UserClass extends React.Component{
	render() {
		return
	}
}

no diff in import& export


passing props now
constructor(props){
	super(props); //always write it, why?************
	console.log(props);

}
in render() -> return
{this.props.name}

or in render
const{name}= this.props;
return-> {name}
 -->

<!-- ***Episode 8 - Part 2***  -->
<!-- creating state vars inside CB comp
in FC , we used a hook, useState
invoking/mounting a fxn

in CBC, when instance of class is created i.e. loading a CBC
state gets created in constructor
this.state = {
	count: 0,
};
return-> count: {this.state.count}

destructure b kr skte h

another count2 var
this.state = {
	count: 0,
	count2: 2;
};
 -->

<!-- ***Episode 8 - Part 3***  -->
<!-- how to update these state vars:
onclick handler takes a callback fxn, after click, update state var
<button onClick{() =>{
	// this.state.count = this.state.count +1 //***********never update state var directly
	this.setState({
		count: this.state.count +1,
	})
}}> cnt inc</button>

 -->

<!-- ***Episode 8 - Part 4***  -->
<!-- How react re-renders , after state update
How comp is mounted then on web page

pareent-> app(FC) , when CBC comes as comp , then creates an instance of it
CBC-> constuctor is called, then render is called

import Component in destructured
if app is CBC:
flow:
Parent Cons -> parent render -> child const -> child render*******

very imp comp: componentDidMount
after render , it is called, that too after comp completely mounted***

if parent aalso have this componentDidMount, what's order of LifeCycle?*****
Parent Constructor -> Parent Render -> Child Constructor -> Child render -> child Mount called -> Parent Mount called


why is it used: componentDidMount?
bcz there r some things that we do, after the comp gets mount -> used to make API calls, why?

API calles in FC - > useEffect with empty dep Arry
so we don't wait for data , but comp get's loaded then data gets passed

hence we use componentDidMount for same

 -->

<!-- ***Episode 8 - Part 5***  -->
<!--
making api call
if multiple child, so> lifecycle?? optimized way

Parent C ->Parent R -> 1st Child c -> 1st child R -> 2nd Child c -> 2nd child R -> 1st Child compdidmount -> 2nd child compdidmount -> parent compdidmount

***check react lifecycle method diagram
Render & Commit Phase

when we 're  loading a comp, DOM manipulation is very expensive/time-taking
DOM updated in single batch (1st Child compdidmount -> 2nd child compdidmount)
 -->

<!-- ***Episode 8 - Part 5***  -->
<!-- how to make api call
& then update local state var

constructore calledd once, then render, then staesupdates, then renders agaiin , then DOM updated
then componentDidUpdate


/****
 *
 * ---- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *     <HTML Dummy >
 * Component Did Mount
 *     <API Call>
 *     <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *     render(API data)
 *     <HTML (new API data)>
 *     componentDid Update
 *
 */
 
 
componentWillUnmount also -> removing from UI
going to other page in app


& now , this is simplified,  this was just for interviews CBC, use FC onlyin reallife now
 -->





<!-- ***Episode 8 - Part 7*** 
old way of teaching 
useEffect != compDidMount
it's a new way
never compare them

Mount(initial) -> update(repeatedly) -> unmount
useEffect

****SPA: Single Page Application

setInterval if in compdidMount, clearInterval in compdidUnMount
setInterval if in useEffect, clearInterval in return of useEffect


-->