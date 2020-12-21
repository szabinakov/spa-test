import { render } from "@testing-library/react";
import Login from "../components/Login.js";
import { BrowserRouter as Router } from "react-router-dom";

describe("Login", () => {
  const mocksetUserStateFunc = jest.fn();

  it("Matches the snapshot", () => {
    const { asFragment } = render(
      <Router>
        <Login setUserState={mocksetUserStateFunc} />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("it renders every element", () => {
    const { getByTestId } = render(
      <Router>
        <Login setUserState={mocksetUserStateFunc} />
      </Router>
    );

    expect(getByTestId("form")).toHaveClass("form");
    expect(getByTestId("email")).toHaveClass("email");
    expect(getByTestId("password")).toHaveClass("password");
    expect(getByTestId("buttonDiv")).toHaveClass("buttonDiv");
    expect(getByTestId("link")).toHaveClass("link");
  });
});
