import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import Home from "./pages/Home-page";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact-page";
import ErrorBoundary from "./components/error-boundary";
import App from "./App";

configure({ adapter: new Adapter() });

describe("App routing", () => {
  test("should test for invalid path", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/random"]}>
        <App />
      </MemoryRouter>
    );

    expect(component.find(ErrorBoundary)).toHaveLength(1);
  });

  test("should test for Home path", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(component.find(Home)).toHaveLength(1);
  });

  test("should test for About page path", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>
    );

    expect(component.find(About)).toHaveLength(0);
  });

  test("should test for Portfolio page path", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/portfolio"]}>
        <App />
      </MemoryRouter>
    );

    expect(component.find(Portfolio)).toHaveLength(0);
  });

  test("should test for Contact page path", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/contact"]}>
        <App />
      </MemoryRouter>
    );

    expect(component.find(Contact)).toHaveLength(0);
  });
});
