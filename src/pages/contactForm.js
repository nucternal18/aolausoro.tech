import "babel-polyfill";
import React, { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = React.createRef();

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const SITE_KEY = "6LfIyfkUAAAAAA5Rlqe_XiS14gR44D12ECfqRaxS";

  const sendMessage = async (e) => {
    e.preventDefault();

    recaptchaRef.current.execute();

    const newMessage = {
      name,
      email,
      subject,
      message,
    };

    await axios.post("http://localhost:5000/contactform", newMessage);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setMessageSent(true);
  };

  const handleRefresh = () => {
    setMessageSent(false);
  };

  return (
    <div className="w-full md:max-w-md mx-auto mt-16 flex-grow">
      {messageSent ? (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-3 md:mx-0">
          <h2 className="text-center py-4">Message Sent!</h2>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleRefresh}
          >
            New Message!
          </button>
        </div>
      ) : (
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-3 md:mx-0"
          onSubmit={sendMessage}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Email"
              value={email}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              name="Subject"
              placeholder="Subject"
              value={subject}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            />
            <textarea
              className="shadow appearance-none border rounded w-full h-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              name="message"
              placeholder="Message..."
              value={message}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
          <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={SITE_KEY} />
        </form>
      )}
    </div>
  );
};

export default ContactForm;
