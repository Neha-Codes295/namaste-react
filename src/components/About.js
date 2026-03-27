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
            <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="mb-10 text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                        Namaste React
                    </p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                        About this project
                    </h1>
                    <p className="mx-auto mt-3 max-w-2xl text-stone-600">
                        Learning React with class components, lifecycle methods, and
                        real GitHub profile data.
                    </p>
                </div>
                <div className="rounded-2xl border border-stone-100 bg-white/80 p-6 shadow-lg ring-1 ring-orange-50 backdrop-blur-sm sm:p-8">
                    <UserClass name={"Neha in CBC"} location={"Nangal in CBC"} />
                </div>
            </div>
        );
    }
}

export default About;
