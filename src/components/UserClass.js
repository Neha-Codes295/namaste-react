import React from "react";

class UserClass extends React.Component {
    // flow: const-> render-> componentDidMount
    constructor(props) {
        // bestplace to receive props & to create state vars
        super(props); //always write it
        // console.log(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                // avatar_url: "https://dummypic"
            }
            // count: 0,
            // // only updates what is passed , not all, count2 won't get updated
            // count2: 0,
        }
        // 2nd count var, do not create new state 
        // this.state = {
        //     count2: 0,
        // }

        // console.log("Child Constructor");
        // console.log(`Constructor - ${props.name}`);
    }

    async componentDidMount() {
        console.log(`ComponentDidMount - ${this.props.name}`);
        // api call
        const data = await fetch("https://api.github.com/users/Neha-Codes295");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate(){
        console.log("comp did update");
    }
    
    componentWillUnmount(){
        console.log("comp will unmount");
    }

    render() {
        console.log(`Render - ${this.props.name}`);

        // const { name, location } = this.props;
        // const { count, count2 } = this.state;
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                {/* <h2>Count: {count}</h2>
                <button
                    onClick={() => //handler takes a callback fxn    
                    {
                        // this.state.count = this.state.count + 1; // never update state var directly 
                        this.setState({
                            count: this.state.count + 1
                        });
                    }}
                >
                    Count Increases</button>
                <h2>Count2: {count2}</h2> */}

                {/* <h2>Name: {this.props.name}</h2> */}
                {/* <h2>Name: {name}</h2> */}
                {/* <h3>Location: {location}</h3> */}

                <img src={avatar_url}/>
                {/* <h2>Pic: {this.state.userInfo.avatar_url}</h2> */}
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h4>Contact: CallNeha</h4>
            </div>
        )
    }

}

export default UserClass;