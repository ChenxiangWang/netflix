import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Accordion from "../../components/accordion";
describe("<Accordion>", () => {
  test("render <Accordion>", () => {
    const { container } = render(
      <Accordion>
        <Accordion.Title>title</Accordion.Title>
        <Accordion.Item>
          <Accordion.Header data-testid="clickable">header</Accordion.Header>
          <Accordion.Body>body</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );

    expect(screen.getByText("title")).toBeTruthy();
    expect(screen.getByText("header")).toBeTruthy();
    expect(screen.queryByText("body")).toBeFalsy();

    fireEvent.click(screen.queryByTestId("clickable"));
    expect(screen.getByText("body")).toBeTruthy();

    fireEvent.click(screen.queryByTestId("clickable"));
    expect(screen.queryByText("body")).toBeFalsy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
