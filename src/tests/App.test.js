import { render } from "@testing-library/react";
import App from "../components/App";
import { BrowserRouter as Router } from "react-router-dom";

describe("App", () => {
  it("Matches the snapshot", () => {
    const { asFragment } = render(
      <Router>
        <App />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
