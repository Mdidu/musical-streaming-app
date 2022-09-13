import { fireEvent, render, screen } from "@testing-library/react";
import {
  TEST_PLAYER_NEXT,
  TEST_PLAYER_PAUSE,
  TEST_PLAYER_PLAY,
  TEST_PLAYER_PREVIOUS,
  TEST_PLAYER_RANDOM_PLAYBACK,
  TEST_PLAYER_READER,
  TEST_PLAYER_REPEAT,
} from "../../../utilities/constantes-testid";
import { SoundReaderComponent } from "./sound-reader";

describe("SoundReaderComponent", () => {
  it("render sound reader", () => {
    render(<SoundReaderComponent />);
    expect(screen.getByTestId(TEST_PLAYER_PLAY)).toBeInTheDocument();
  });

  it("click random playback", () => {
    render(<SoundReaderComponent />);
    expect(
      fireEvent.click(screen.getByTestId(TEST_PLAYER_RANDOM_PLAYBACK))
    ).toBeTruthy();
  });
  it("click previous", () => {
    render(<SoundReaderComponent />);
    expect(
      fireEvent.click(screen.getByTestId(TEST_PLAYER_PREVIOUS))
    ).toBeTruthy();
  });

  it("click reader", () => {
    render(<SoundReaderComponent />);
    fireEvent.click(screen.getByTestId(TEST_PLAYER_READER));
    expect(screen.getByTestId(TEST_PLAYER_PAUSE)).toBeInTheDocument();
  });

  it("click next", () => {
    render(<SoundReaderComponent />);
    expect(fireEvent.click(screen.getByTestId(TEST_PLAYER_NEXT))).toBeTruthy();
  });

  it("click repeat", () => {
    render(<SoundReaderComponent />);
    expect(
      fireEvent.click(screen.getByTestId(TEST_PLAYER_REPEAT))
    ).toBeTruthy();
  });
});
