// import React from "react";
import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

// class About extends React.Component {
class About extends Component {
    constructor(props){
        super(props);

        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent Mount called");
    }

    render() {
        console.log("Parent Render");
        return (
            <div>
                <h1>About CLass Component</h1>
                <h2>This is About Namaste React Learning</h2>
                <UserClass name={"Neha in CBC"} location={"Nangal in CBC"} />
                {/* <UserClass name={"Nina in CBC"} location={"Nangal in CBC"} />
                <UserClass name={"Naina in CBC"} location={"Nangal in CBC"} /> */}
            </div>
        )
    }
}

// const About = () =>{
//     return(
//         <div>
//             <h1>About Us</h1>
//             <h2>This is About Namaste React Learning</h2>

//             {/* <User name={"Neha in FC"} location={"Nangal in FC"}/> */}
//             <UserClass name={"Neha in CBC"} location={"Nangal in CBC"}/>
//         </div>
//     )
// }

export default About;