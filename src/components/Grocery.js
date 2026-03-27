const Grocery = () => {
    return (
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 p-10 text-center shadow-lg ring-1 ring-emerald-100">
                <span className="text-5xl" aria-hidden>
                    🛒
                </span>
                <h1 className="mt-4 text-2xl font-bold text-stone-900 sm:text-3xl">
                    Grocery store
                </h1>
                <p className="mx-auto mt-3 max-w-xl text-stone-600">
                    Our online grocery experience — lazy-loaded for performance. More
                    nested components can live on this route as you build the feature.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-stone-500">
                    <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm">
                        Fresh produce
                    </span>
                    <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm">
                        Pantry staples
                    </span>
                    <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm">
                        Coming soon
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Grocery;
