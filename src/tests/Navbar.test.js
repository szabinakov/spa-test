import { render } from "@testing-library/react";
import Navbar from "../components/Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navbar", () => {
  const mockStateTrue = {
    isUserLoggedIn: true,
  };
  const mockStateFalse = {
    isUserLoggedIn: false,
  };

  it("Matches the snapshot when user is logged in", () => {
    const { asFragment } = render(
      <Router>
        <Navbar userState={mockStateTrue} />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("it renders every element when user is logged in", () => {
    const { getByTestId } = render(
      <Router>
        <Navbar userState={mockStateTrue} />
      </Router>
    );

    expect(getByTestId("homeLink")).toHaveClass("homeLink");
    expect(getByTestId("addUserLink")).toHaveClass("addUserLink");
  });

  it("does not matches the snapshot when user is not logged in", () => {
    const { asFragment } = render(
      <Router>
        <Navbar userState={mockStateFalse} />
      </Router>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("it doesnt render links when user is not logged in ", () => {
    const { getByTestId } = render(
      <Router>
        <Navbar userState={mockStateFalse} />
      </Router>
    );
    expect(getByTestId("navContainer")).toBeEmptyDOMElement();
  });
});
