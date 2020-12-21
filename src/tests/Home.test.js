import { render } from "@testing-library/react";
import Home from "../components/Home.js";
import { BrowserRouter as Router } from "react-router-dom";

describe("Home", () => {
  const mocksetUserStateFunc = jest.fn();
  const mockStateTrue = {
    isUserLoggedIn: true,
  };
  const mockStateFalse = {
    isUserLoggedIn: false,
  };

  it("Matches the snapshot when user logged in", () => {
    const { asFragment } = render(
      <Router>
        <Home setUserState={mocksetUserStateFunc} userState={mockStateTrue} />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Matches the snapshot when user is not logged in", () => {
    const { asFragment } = render(
      <Router>
        <Home setUserState={mocksetUserStateFunc} userState={mockStateFalse} />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
