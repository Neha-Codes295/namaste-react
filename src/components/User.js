import { useState } from "react";

const User = ({ name, location }) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(0);
    return (
        <div className="user-card p-5 bg-gray-50 rounded-xl border">
            <h1 className="text-lg font-bold text-gray-900">Count: {count}</h1>
            <h2 className="text-sm text-gray-500 mt-1">Count2: {count2}</h2>
            <h2 className="text-xl font-bold text-orange-700 mt-4">Name: {name}</h2>
            <h3 className="text-gray-600 mt-1">Location: {location}</h3>
            <h4 className="mt-4 text-sm text-orange-600 font-medium">
                Contact: CallNeha
            </h4>
        </div>
    );
};

export default User;
