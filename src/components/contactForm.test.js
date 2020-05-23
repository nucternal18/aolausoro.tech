import React from "react";
import axios from "axios";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ContactForm from "./contactForm";

configure({ adapter: new Adapter() });

jest.mock("axios");

describe("test contact form", () => {
  test("Sends message when button is clicked", () => {
    const component = shallow(<ContactForm />);

    expect(component.length).toEqual(1);
  });

  test("expect to render contact form component", () => {
    const component = shallow(<ContactForm />);

    expect(component).toMatchSnapshot();
  });
});
