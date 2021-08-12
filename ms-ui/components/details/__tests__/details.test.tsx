import { render, screen } from "@testing-library/react";
import { Details } from "../details";

describe("check if snapshots are created", () => {
  it("render snapshots", () => {
    const {container} = render(
      <Details
        title={"title"}
        chef={"dennis"}
        description={"this is a test description"}
        url={"http://dummy.url"}
      />
    );

    expect(container).toMatchSnapshot();
  });
});

describe("check if details rendered correctly", () => {
  it("render snapshots", () => {
    const {container} = render(
      <Details
        title={"title"}
        chef={"dennis"}
        description={"this is a test description"}
        url={"http://dummy.url"}
      />
    );

    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("this is a test description")).toBeInTheDocument();
    expect(screen.getByText("this is a test description")).toBeInTheDocument();
  });
});
