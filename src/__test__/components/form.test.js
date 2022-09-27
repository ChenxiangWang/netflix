import React from "react";
import { render, screen } from "@testing-library/react";
import Form from "../../components/form";

import { BrowserRouter, Router } from "react-router-dom";

jest.mock("react-router-dom");

// TODO: Jest can not render the <Link/> correctly
describe("<Form/> test", () => {
  it("test renders", () => {
    const { container } = render(
      <Form>
        <Form.Title>Sign In</Form.Title>
        <Form.Base method="POST">
          <Form.Input
            data-testid="input"
            placeholder="Email Address"
            onChange={() => {}}
          />

          <Form.Input
            type="password"
            placeholder="Password"
            autoComplete="off"
            onChange={() => {}}
          />

          <Form.Submit data-testid="submit" disabled type="submit">
            Sign In
          </Form.Submit>
        </Form.Base>

        <Form.Text>
          New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not bot.
          Learn nore.
        </Form.TextSmall>
      </Form>
    );
    expect(screen.getByText("New to Netflix?")).toBeTruthy();
    expect(
      screen.getByText(
        "This page is protected by Google reCAPTCHA to ensure you're not bot. Learn nore."
      )
    ).toBeTruthy();
    expect(screen.getByTestId("submit")).toBeTruthy();
    expect(screen.getByTestId("submit").disabled).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
