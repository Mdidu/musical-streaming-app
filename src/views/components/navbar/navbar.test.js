import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { NavbarComponent } from "./navbar";

describe("NavbarComponent", () => {
  it("render navbar", () => {
    render(
      <MemoryRouter>
        <NavbarComponent />
      </MemoryRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
