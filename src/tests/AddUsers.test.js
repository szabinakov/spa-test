import { render } from "@testing-library/react";
import AddUsers from "../components/AddUsers.js";

describe("AddUsers", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<AddUsers />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("it renders every element", () => {
    const { getByTestId } = render(<AddUsers />);

    expect(getByTestId("form")).toHaveClass("form");
    expect(getByTestId("firstname")).toHaveClass("firstname");
    expect(getByTestId("lastname")).toHaveClass("lastname");
    expect(getByTestId("job")).toHaveClass("job");
    expect(getByTestId("email")).toHaveClass("email");
    expect(getByTestId("buttonDiv")).toHaveClass("buttonDiv");
  });
});
