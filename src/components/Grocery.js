const Grocery = () => {
    return (
        <div className="p-6 max-w-3xl mx-auto text-center">
            <div className="p-8 bg-white rounded-xl shadow">
                <span className="text-5xl" aria-hidden>
                    🛒
                </span>
                <h1 className="text-2xl font-bold text-gray-900 mt-4">
                    Grocery store
                </h1>
                <p className="text-gray-600 mt-2 max-w-xl mx-auto">
                    Our online grocery experience — lazy-loaded for performance. More
                    nested components can live on this route as you build the feature.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-gray-600">
                    <span className="px-3 py-1 bg-gray-100 rounded-full">Fresh produce</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full">Pantry staples</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full">Coming soon</span>
                </div>
            </div>
        </div>
    );
};

export default Grocery;
