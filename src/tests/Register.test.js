import { render } from "@testing-library/react";
import Register from "../components/Register.js";
import { BrowserRouter as Router } from "react-router-dom";

describe("Register", () => {
  const mocksetUserStateFunc = jest.fn();

  it("Matches the snapshot", () => {
    const { asFragment } = render(
      <Router>
        <Register setUserState={mocksetUserStateFunc} />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("it renders every element", () => {
    const { getByTestId } = render(
      <Router>
        <Register setUserState={mocksetUserStateFunc} />
      </Router>
    );

    expect(getByTestId("form")).toHaveClass("form");
    expect(getByTestId("email")).toHaveClass("email");
    expect(getByTestId("password")).toHaveClass("password");
    expect(getByTestId("confirmPassword")).toHaveClass("confirmPassword");
    expect(getByTestId("buttonDiv")).toHaveClass("buttonDiv");
    expect(getByTestId("link")).toHaveClass("link");
  });
});
