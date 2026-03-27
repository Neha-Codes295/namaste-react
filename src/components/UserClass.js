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
            <div className="user-card flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
                <img
                    src={avatar_url}
                    alt={name || "Profile"}
                    className="h-28 w-28 shrink-0 rounded-2xl object-cover ring-4 ring-orange-100 shadow-md"
                />
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold text-stone-900">{name}</h2>
                    <p className="mt-1 text-stone-600">{location}</p>
                    <p className="mt-4 text-sm font-medium text-orange-700">
                        Contact: CallNeha
                    </p>
                </div>
            </div>
        );
    }
}

export default UserClass;
