import { render } from "@testing-library/react";
import UserCard from "../components/UserCard.js";

describe("UserCard", () => {
  const mockDetails = {
    id: "789",
    name: "MockName",
    email: "MockEmail",
    avatar: "MockURL",
  };
  const mockDeleteBtn = jest.fn();

  it("Matches the snapshot", () => {
    const { asFragment } = render(
      <UserCard
        id={mockDetails.id}
        name={mockDetails.name}
        email={mockDetails.email}
        avatar={mockDetails.avatar}
        deleteUser={mockDeleteBtn}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  const { getByTestId } = render(
    <UserCard
      id={mockDetails.id}
      name={mockDetails.name}
      email={mockDetails.email}
      avatar={mockDetails.avatar}
      deleteUser={mockDeleteBtn}
    />
  );

  expect(getByTestId("userCardContainer")).toHaveClass("userCardContainer");
  expect(getByTestId("tooltiptext")).toHaveClass("tooltiptext");
  expect(getByTestId("iconContainer")).toHaveClass("iconContainer");
  expect(getByTestId("imgContainer")).toHaveClass("imgContainer");
  expect(getByTestId("nameContainer")).toHaveClass("nameContainer");
  expect(getByTestId("emailContainer")).toHaveClass("emailContainer");
  expect(getByTestId("socialDiv")).toHaveClass("socialDiv");
  expect(getByTestId("socialIcons")).toHaveClass("socialIcons");
});
