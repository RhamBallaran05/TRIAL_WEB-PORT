import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [nameError, setNameError] = useState("");

  // ✅ Validate name to contain only letters and spaces
  const validateName = (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z\s]*$/;

    if (!regex.test(value)) {
      setNameError("Name can only contain letters and spaces.");
    } else if (value.trim().length < 2) {
      setNameError("Please enter your full name.");
    } else {
      setNameError("");
    }
  };

  // ✅ Send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    if (nameError) {
      setStatusMessage("❌ Please fix the errors before submitting.");
      return;
    }

    setIsSending(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        "service_va10b68", // 🔹 replace with your EmailJS service ID
        "template_769rpnx", // 🔹 replace with your EmailJS template ID
        form.current,
        "46TxTU8dbFsU28qha" // 🔹 replace with your EmailJS public key
      )
      .then(
        () => {
          setIsSending(false);
          setStatusMessage("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setIsSending(false);
          setStatusMessage("❌ Failed to send message. Check your EmailJS setup.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <>
      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="min-h-screen bg-black text-gray-100 py-20 px-6 md:px-16 scroll-mt-24"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Contact <span className="text-blue-500">Me!</span>
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-3xl mx-auto space-y-8"
        >
          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                required
                onChange={validateName}
                className={`p-3 bg-transparent border rounded-lg focus:outline-none transition ${
                  nameError
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-500 focus:ring-blue-500"
                } focus:ring-2`}
              />
              {nameError && (
                <p className="text-red-400 text-sm mt-1">{nameError}</p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                name="reply_to"
                placeholder="Email Address"
                required
                className="p-3 bg-transparent border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>

          {/* Mobile + Subject */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              required
              className="p-3 bg-transparent border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <input
              type="text"
              name="subject"
              placeholder="Email Subject"
              required
              className="p-3 bg-transparent border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="8"
              className="p-3 bg-transparent border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              disabled={isSending}
              className={`${
                isSending
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white font-semibold py-3 px-10 rounded-full shadow-lg transition-all duration-300`}
            >
              {isSending ? "Sending..." : "Submit"}
            </button>

            {statusMessage && (
              <p
                className={`text-sm ${
                  statusMessage.startsWith("✅")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </div>
        </form>
      </section>

      {/* FOOTER SECTION */}
<footer className="bg-black border-t border-gray-800 text-gray-400 py-12 text-center relative overflow-hidden">
  {/* Footer Text */}
  <div className="footer-text mb-8">
    <p className="text-3xl md:text-4xl font-semibold tracking-wide text-gray-400">
      Submitted by:{" "}
      <span className="text-blue-500">
        Ramon E. Ballaran Jr | BSCS 3-1
      </span>
    </p>
  </div>

  {/* Glowing Divider Line */}
  <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8 animate-pulse"></div>

  {/* Scroll-to-Top Arrow */}
  <div className="footer-iconTop flex justify-center">
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.7)] transition-all duration-300 hover:scale-110"
      aria-label="Scroll to top"
    >
      <i className="bx bx-up-arrow-alt text-3xl"></i>
    </button>
  </div>

  {/* Decorative Glow */}
  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none"></div>
</footer>
    </>
  );
};
