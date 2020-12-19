import { render } from "@testing-library/react";
import Alert from "../components/Alert.js";

describe("AddUsers", () => {
  const mockMsgGreen = "Mocked Success Message";
  const mockSucc = true;
  const mockMsgRed = "Mocked Error Message";
  const mockUnSucc = false;

  it("renders success message", () => {
    const { asFragment } = render(
      <Alert message={mockMsgGreen} success={mockSucc} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders error message", () => {
    const { asFragment } = render(
      <Alert message={mockMsgRed} success={mockUnSucc} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("it renders every element when success message", () => {
    const { getByTestId } = render(
      <Alert message={mockMsgGreen} success={mockSucc} />
    );

    expect(getByTestId("alert-success")).toHaveClass("alert-success");
  });
  it("it renders every element when error message", () => {
    const { getByTestId } = render(
      <Alert message={mockMsgRed} success={mockUnSucc} />
    );

    expect(getByTestId("alert-error")).toHaveClass("alert-error");
  });
});
