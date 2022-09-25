import React from "react";
import {
  render,
  screen,
  fireEvent,
  getAllByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Player from "../../components/player";
import Card from "../../components/card";
const category = "series";
const slideRows = [
  {
    title: "Comedies",
    data: [
      {
        maturity: "15",
        slug: "the-office",
        genre: "comedies",
        title: "The Office",
        description:
          "A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.",
        id: "59574941-9bbc-46d2-ad6b-c54af1019c93",
        docId: "1vTqgcZuDDXd9j8I1c34",
      },
    ],
  },
];

describe("<Card />", () => {
  const renderTestPage = () =>
    render(
      <Card.Group>
        {slideRows.map((slideItem) => {
          return (
            <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
              <Card.Title>{slideItem.title}</Card.Title>
              <Card.Entities>
                {slideItem.data.map((item) => (
                  <Card.Item key={item.docId} item={item} data-testid="trigger">
                    <Card.Image
                      src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                    />

                    {/* a popover cardition*/}
                    <Card.Meta data-testid="meta">
                      <Card.SubTitle>{item.title}</Card.SubTitle>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Meta>
                  </Card.Item>
                ))}
              </Card.Entities>
              <Card.Feature category={category} data-testid="feature">
                <Player>
                  <Player.Button />
                  <Player.Video src={"/videos/bunny.mp4"} />
                </Player>
              </Card.Feature>
            </Card>
          );
        })}
      </Card.Group>
    );

  it("test card's text", () => {
    const { container } = renderTestPage();
    // test for text
    expect(screen.getByText("Comedies")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  // it("test card's entity hover state", () => {
  //   const { container } = renderTestPage();
  //   const trigger = screen.getByTestId("trigger");
  //   const meta = screen.getByTestId("meta");

  //   expect(trigger).toBeInTheDocument();
  //   expect(meta).toHaveStyle({ display: "none" });
  //   userEvent.hover(trigger);
  //   fireEvent.mouseOver(trigger);
  //   expect(meta).toHaveStyle({ display: "block" });
  //   userEvent.unhover(trigger);
  //   expect(meta).not.toBeVisible();
  //   expect(container.firstChild).toMatchSnapshot();
  // });

  it("test card's click function", () => {
    const { container } = renderTestPage();
    const trigger = screen.getByTestId("trigger");
    expect(screen.queryByTestId("feature")).toBeFalsy();
    userEvent.click(trigger);
    expect(screen.getByTestId("feature")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
