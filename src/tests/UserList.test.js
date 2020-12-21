import { render } from "@testing-library/react";
import UserList from "../components/UserList.js";

describe("UserList", () => {
  it("Matches the snapshot", () => {
    const { asFragment } = render(<UserList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
