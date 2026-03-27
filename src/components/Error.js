import { useRouteError, Link } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
            <div className="max-w-md text-center">
                <p className="text-6xl font-black text-orange-200">oops</p>
                <h1 className="mt-4 text-2xl font-bold text-stone-900 sm:text-3xl">
                    Something went wrong
                </h1>
                <p className="mt-2 text-stone-600">
                    {err?.status != null && (
                        <span className="font-mono text-sm text-stone-500">
                            {err.status} {err.statusText}
                        </span>
                    )}
                </p>
                <Link
                    to="/"
                    className="mt-8 inline-flex rounded-full bg-orange-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-orange-700"
                >
                    Back to home
                </Link>
            </div>
        </div>
    );
};

export default Error;
