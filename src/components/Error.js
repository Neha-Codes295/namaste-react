import { useRouteError, Link } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div className="min-h-[50vh] flex items-center justify-center p-6">
            <div className="text-center max-w-md">
                <p className="text-4xl text-orange-300 font-bold mb-4">oops</p>
                <h1 className="text-2xl font-bold text-gray-900">
                    Something went wrong
                </h1>
                <p className="text-gray-600 mt-2">
                    {err?.status != null && (
                        <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                            {err.status} {err.statusText}
                        </span>
                    )}
                </p>
                <Link
                    to="/"
                    className="inline-block mt-6 bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-orange-600"
                >
                    Back to home
                </Link>
            </div>
        </div>
    );
};

export default Error;
