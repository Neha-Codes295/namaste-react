const Contact = () => {
    return (
        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                    Contact us
                </h1>
                <p className="mt-3 text-stone-600">
                    We&apos;d love to hear from you. Send a message and we&apos;ll
                    respond soon.
                </p>
            </div>
            <form
                className="mt-10 space-y-6 rounded-2xl border border-stone-100 bg-white p-8 shadow-lg ring-1 ring-orange-50"
                onSubmit={(e) => e.preventDefault()}
            >
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-stone-700"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="mt-1 w-full rounded-xl border border-stone-200 px-4 py-3 text-stone-800 shadow-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-stone-700"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="mt-1 w-full rounded-xl border border-stone-200 px-4 py-3 text-stone-800 shadow-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label
                        htmlFor="msg"
                        className="block text-sm font-medium text-stone-700"
                    >
                        Message
                    </label>
                    <textarea
                        id="msg"
                        rows={4}
                        className="mt-1 w-full resize-y rounded-xl border border-stone-200 px-4 py-3 text-stone-800 shadow-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                        placeholder="How can we help?"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white shadow-md transition hover:from-orange-600 hover:to-amber-600 sm:w-auto sm:px-10"
                >
                    Send message
                </button>
            </form>
        </div>
    );
};

export default Contact;
