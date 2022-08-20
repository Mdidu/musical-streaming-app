import { fireEvent, render, screen } from "@testing-library/react";
import { SubscribeButtonComponent } from "./subscribe-button";

describe("SubscribeButtonComponent", () => {
  it("render subscribe button", () => {
    render(<SubscribeButtonComponent />);

    expect(screen.getByText("S'abonner")).toBeTruthy();
  });

  it("test click subscribe button", () => {
    render(<SubscribeButtonComponent />);

    fireEvent.click(screen.getByTestId("subscribe-btn"));
    expect(screen.getByText("Abonné")).toBeTruthy();
  });
});
