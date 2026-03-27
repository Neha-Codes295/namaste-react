import { useState } from "react";

const User = ({ name, location }) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(0);
    return (
        <div className="user-card rounded-xl border border-stone-100 bg-stone-50/80 p-6 shadow-inner">
            <h1 className="text-lg font-semibold text-stone-900">
                Count: {count}
            </h1>
            <h2 className="mt-1 text-sm text-stone-600">Count2: {count2}</h2>
            <h2 className="mt-4 text-xl font-bold text-orange-800">Name: {name}</h2>
            <h3 className="mt-1 text-stone-600">Location: {location}</h3>
            <h4 className="mt-3 text-sm font-medium text-stone-500">
                Contact: CallNeha
            </h4>
        </div>
    );
};

export default User;
