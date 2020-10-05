import React from "react";
import ContactForm from "../components/contactForm";

const Contact = () => {
  return (
    <>
      <div className="contact mx-auto flex-grow w-full -m-1">
        <div>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
