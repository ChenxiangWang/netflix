import React from "react";
import { render, screen } from "@testing-library/react";
import Feature from "../../components/feature";

describe("<Feature/> Test", () => {
  it("Render test", () => {
    const { container } = render(
      <Feature>
        <Feature.Title>test-tittle</Feature.Title>
        <Feature.SubTitle>test-subtitle</Feature.SubTitle>
      </Feature>
    );
    const titleEl = screen.getByText("test-tittle");
    const subTitleEl = screen.getByText("test-subtitle");
    expect(titleEl).toBeTruthy();
    expect(subTitleEl).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
