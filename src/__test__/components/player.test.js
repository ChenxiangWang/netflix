import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Player from "../../components/player";

describe("<Player>", () => {
  // it = test(name, fn, timeout);
  it("render the <Player> with a bunny video", () => {
    const { container } = render(
      <Player>
        <Player.Button />
        <Player.Video src={"/videos/bunny.mp4"} data-testid="player" />
      </Player>
    );
    expect(screen.queryByTestId("player")).toBeFalsy();
    fireEvent.click(screen.getByText("Play"));

    expect(screen.getByTestId("player")).toBeTruthy();
    fireEvent.click(screen.queryByTestId("player"));

    expect(screen.queryByTestId("player")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
