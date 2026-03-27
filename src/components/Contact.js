const Contact = () => {
    return (
        <div className="p-6 max-w-2xl mx-auto">
            <div className="text-center mb-8">
                <p className="text-sm text-gray-500">Get in touch</p>
                <h1 className="text-2xl font-bold text-gray-900 mt-1">Contact us</h1>
                <p className="text-gray-600 mt-2">
                    We&apos;d love to hear from you. Send a message and we&apos;ll
                    respond soon.
                </p>
            </div>
            <form
                className="p-5 bg-white rounded-xl shadow space-y-5"
                onSubmit={(e) => e.preventDefault()}
            >
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2"
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2"
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label
                        htmlFor="msg"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Message
                    </label>
                    <textarea
                        id="msg"
                        rows={4}
                        className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 resize-y"
                        placeholder="How can we help?"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full sm:w-auto bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-orange-600"
                >
                    Send message
                </button>
            </form>
        </div>
    );
};

export default Contact;
