import React from "react";
import renderer from "react-test-renderer";
import contactform from "./contactForm";
import ContactForm from "./contactForm";

test("Sends message when button is clicked", () => {
  const component = renderer.create(<ContactForm />);
});
