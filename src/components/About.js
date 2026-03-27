import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent Mount called");
    }

    render() {
        console.log("Parent Render");
        return (
            <div className="p-6 max-w-3xl mx-auto">
                <div className="text-center mb-6">
                    <p className="text-sm text-gray-500">
                        Namaste React
                    </p>
                    <h1 className="text-2xl font-bold mt-1">
                        About this project
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Learning React with class components, lifecycle methods, and
                        real GitHub profile data.
                    </p>
                </div>

                <div className="p-5 bg-white rounded-xl shadow">
                    <UserClass name={"Neha in CBC"} location={"Nangal in CBC"} />
                </div>
            </div>
        );
    }
}

export default About;
