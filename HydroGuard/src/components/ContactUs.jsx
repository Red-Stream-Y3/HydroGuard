import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send Message");
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message

  const handleSubmit = (e) => {
    e.preventDefault();

    setButtonText("Sending...");
    setSuccessMessage(""); // Clear any existing success message on new submission

    const serviceID = "default_service";
    const templateID = "template_mou45cj";
    const publicKey = "2WFJHlVRvYBL8LzOY";

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setButtonText("Send Message");
        setSuccessMessage(
          "Thank you! Your message has been sent successfully."
        );
        form.current.reset(); // Clear form after successful submission
      })
      .catch((err) => {
        setButtonText("Send Message");
        alert(`Failed to send message: ${JSON.stringify(err)}`);
      });
  };

  return (
    <div id="contact-us" className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Us
        </h2>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 bg-white bg-opacity-50 p-10 rounded-lg shadow-lg"
          id="form"
        >
          <p className="text-lg leading-8 text-gray-600">
            Reach out to us via the form below and we will get back to you as
            soon as possible.
          </p>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <button
            type="submit"
            id="button"
            className="mr-0 ml-auto px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            {buttonText}
          </button>
        </form>

        {successMessage && ( // Show success message if it exists
          <p className="mt-4 text-green-600 font-semibold">{successMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
