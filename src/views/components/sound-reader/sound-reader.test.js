import { fireEvent, render, screen } from "@testing-library/react";
import { SoundReaderComponent } from "./sound-reader";

describe("SoundReaderComponent", () => {
  it("render sound reader", () => {
    render(<SoundReaderComponent />);
    expect(screen.getByTestId("player-play")).toBeInTheDocument();
  });

  it("click random playback", () => {
    render(<SoundReaderComponent />);
    expect(fireEvent.click(screen.getByTestId("random-playback"))).toBeTruthy();
  });
  it("click previous", () => {
    render(<SoundReaderComponent />);
    expect(fireEvent.click(screen.getByTestId("previous"))).toBeTruthy();
  });

  it("click reader", () => {
    render(<SoundReaderComponent />);
    fireEvent.click(screen.getByTestId("reader"));
    expect(screen.getByTestId("player-pause")).toBeInTheDocument();
  });

  it("click next", () => {
    render(<SoundReaderComponent />);
    expect(fireEvent.click(screen.getByTestId("next"))).toBeTruthy();
  });

  it("click repeat", () => {
    render(<SoundReaderComponent />);
    expect(fireEvent.click(screen.getByTestId("repeat"))).toBeTruthy();
  });
});
