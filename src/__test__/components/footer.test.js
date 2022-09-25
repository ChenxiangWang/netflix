import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../components/footer";
describe("<Footer>", () => {
  // it = test(name, fn, timeout);
  it("render the <Footer> with a populated data", () => {
    const { container } = render(
      <Footer>
        <Footer.Title>Question? Contact us</Footer.Title>
        <Footer.Break />
        <Footer.Row>
          <Footer.Colunm>
            <Footer.Link href="#">FAQ</Footer.Link>
            <Footer.Link href="#">Investor Relations</Footer.Link>
            <Footer.Link href="#">Ways to watch</Footer.Link>
            <Footer.Link href="#">Coporate Information</Footer.Link>
            <Footer.Link href="#">Netflix Originals</Footer.Link>
          </Footer.Colunm>

          <Footer.Colunm>
            <Footer.Link href="#">Help Center</Footer.Link>
            <Footer.Link href="#">Jobs</Footer.Link>
            <Footer.Link href="#">Terms of Use</Footer.Link>
            <Footer.Link href="#">Contact us</Footer.Link>
          </Footer.Colunm>

          <Footer.Colunm>
            <Footer.Link href="#">Account</Footer.Link>
            <Footer.Link href="#">Redeem Gift Cards</Footer.Link>
            <Footer.Link href="#">Privacy</Footer.Link>
            <Footer.Link href="#">Speed Test</Footer.Link>
          </Footer.Colunm>

          <Footer.Colunm>
            <Footer.Link href="#">Media Center</Footer.Link>
            <Footer.Link href="#">Buy Gift Cards</Footer.Link>
            <Footer.Link href="#">Cookie Preferences</Footer.Link>
            <Footer.Link href="#">Legal Notices</Footer.Link>
          </Footer.Colunm>
        </Footer.Row>
        <Footer.Break />
        <Footer.Text>Netflix United Kingdom</Footer.Text>
      </Footer>
    );
    expect(screen.getAllByText("Question? Contact us")).toBeTruthy();
    expect(screen.getAllByText("FAQ")).toBeTruthy();
    expect(screen.getAllByText("Help Center")).toBeTruthy();
    expect(screen.getAllByText("Account")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
