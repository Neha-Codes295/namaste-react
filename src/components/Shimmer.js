const Shimmer = () => {
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="mb-6 space-y-2">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-72 max-w-full bg-gray-100 rounded animate-pulse" />
            </div>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row">
                <div className="h-10 flex-1 max-w-xl bg-gray-200 rounded-lg animate-pulse" />
                <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse" />
            </div>
            <div className="shimmer-container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={i}
                        className="shimmer-card overflow-hidden rounded-xl border bg-white shadow"
                    >
                        <div className="aspect-[4/3] bg-gray-200 animate-pulse" />
                        <div className="p-4 space-y-2">
                            <div className="h-5 w-[75%] bg-gray-200 rounded animate-pulse" />
                            <div className="h-3 w-full bg-gray-100 rounded animate-pulse" />
                            <div className="flex justify-between pt-2">
                                <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                                <div className="h-4 w-10 bg-gray-100 rounded animate-pulse" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shimmer;
