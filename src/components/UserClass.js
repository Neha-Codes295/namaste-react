import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            },
        };
    }

    async componentDidMount() {
        console.log(`ComponentDidMount - ${this.props.name}`);
        const data = await fetch("https://api.github.com/users/Neha-Codes295");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate() {
        console.log("comp did update");
    }

    componentWillUnmount() {
        console.log("comp will unmount");
    }

    render() {
        console.log(`Render - ${this.props.name}`);
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <img
                    src={avatar_url}
                    alt={name || "Profile"}
                    className="h-28 w-28 rounded-xl object-cover border border-gray-200 shadow"
                />
                <div className="min-w-0">
                    <h2 className="text-xl font-bold text-gray-900">{name}</h2>
                    <p className="text-gray-600 mt-1">📍 {location}</p>
                    <p className="mt-4 inline-block bg-orange-500 text-white text-sm px-4 py-2 rounded-lg">
                        Contact: CallNeha
                    </p>
                </div>
            </div>
        );
    }
}

export default UserClass;
