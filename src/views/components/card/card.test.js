import { fireEvent, render, screen } from "@testing-library/react";
import { CardComponent } from "./card";

describe("CardComponent", () => {
  it("render card", () => {
    render(
      <CardComponent
        imagePath="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        descriptionImage="Nature"
        title="Nature"
        description="artiste"
      />
    );
    expect(screen.getByText("Nature")).toBeTruthy();
  });
  it("test click", () => {
    render(
      <CardComponent
        imagePath="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
        descriptionImage="Nature"
        title="Nature"
        description="artiste"
      />
    );

    fireEvent.click(screen.getByTestId("svgComponent"));

    expect(screen.getByTestId("card-player-pause")).toBeInTheDocument();
  });
});
