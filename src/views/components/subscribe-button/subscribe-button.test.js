import { fireEvent, render, screen } from "@testing-library/react";
import { TEST_SUBSCRIBE_BUTTON } from "../../../utilities/constantes-testid";
import { SubscribeButtonComponent } from "./subscribe-button";

describe("SubscribeButtonComponent", () => {
  it("render subscribe button", () => {
    render(<SubscribeButtonComponent />);

    expect(screen.getByText("S'abonner")).toBeTruthy();
  });

  it("test click subscribe button", () => {
    render(<SubscribeButtonComponent />);

    fireEvent.click(screen.getByTestId(TEST_SUBSCRIBE_BUTTON));
    expect(screen.getByText("Abonné")).toBeTruthy();
  });
});
