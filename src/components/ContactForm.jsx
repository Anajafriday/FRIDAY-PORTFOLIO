import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true)
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(() => {
                toast.success("Message sent successfully!");
                form.current.reset();
                setIsLoading(false)
            })
            .catch((error) => {
                toast.error("Failed to send message. Try again.");
                setIsLoading(false)
                console.error("Email send failed:", error);

            });
    };

    return (
        <div className="max-w-lg mx-auto p-6  bg-gray-900 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Me</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                    <label className="block text-gray-300">Name</label>
                    <input
                        type="text"
                        name="from_name"
                        className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-colorCta"
                        disabled={isLoading}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-300">Email</label>
                    <input
                        type="email"
                        name="from_email"
                        className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-colorCta"
                        disabled={isLoading}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-300">Message</label>
                    <textarea
                        disabled={isLoading}
                        name="message"
                        rows="4"
                        className="w-full resize-none px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-colorCta"
                        required
                    ></textarea>
                </div>

                <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full bg-colorCta text-gray-900 font-semibold py-2 rounded-md hover:bg-yellow-400 transition duration-200"
                >
                    {isLoading ? "Loading..." : "Send"}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
