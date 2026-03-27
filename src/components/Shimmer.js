const Shimmer = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-8 space-y-3">
                <div className="h-9 w-64 max-w-full animate-pulse rounded-lg bg-stone-200" />
                <div className="h-4 w-96 max-w-full animate-pulse rounded bg-stone-100" />
            </div>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row">
                <div className="h-12 flex-1 max-w-xl animate-pulse rounded-xl bg-stone-200" />
                <div className="h-12 w-40 animate-pulse rounded-xl bg-stone-200" />
            </div>
            <div className="shimmer-container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={i}
                        className="shimmer-card overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm"
                    >
                        <div className="aspect-[4/3] animate-pulse bg-gradient-to-r from-stone-200 via-stone-100 to-stone-200 bg-[length:200%_100%]" />
                        <div className="space-y-3 p-4">
                            <div className="h-5 w-[75%] animate-pulse rounded bg-stone-200" />
                            <div className="h-3 w-full animate-pulse rounded bg-stone-100" />
                            <div className="h-3 w-2/3 animate-pulse rounded bg-stone-100" />
                            <div className="flex justify-between pt-2">
                                <div className="h-4 w-16 animate-pulse rounded bg-stone-200" />
                                <div className="h-4 w-12 animate-pulse rounded bg-stone-200" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shimmer;
