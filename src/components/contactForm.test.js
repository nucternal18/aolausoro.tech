import React from "react";
import axios from "axios";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContactForm from "./contactForm";

configure({ adapter: new Adapter() });

jest.mock("axios");

test("Sends message when button is clicked", () => {
  const component = shallow(<ContactForm />);
});

test("should post to firbase", () => {
  const message = {
    name: "John Doe",
    email: "john@TestScheduler.com",
    subject: "test",
    message: "This is a test",
  };
  const resp = { data: message };

  axios.post.mockResolvedValue(() =>
    Promise.resolve("http://localhost:5000/contactform", resp)
  );


});
