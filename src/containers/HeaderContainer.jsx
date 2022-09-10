import React from "react";
import Header from "../components/header";
import Feature from "../components/feature";
import OptForm from "../components/opt-form";
import * as ROUTERS from "../constants/routers";
import logo from "../logo.svg";

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTERS.HOME} alt={"Netflix"} src={logo} />
        <Header.ButtonLink to={ROUTERS.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      <Feature>
        <Feature.Title>Unlimited files, TV programs and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
        <OptForm>
          <OptForm.Input placeholder="Email Address" />
          <OptForm.Button>Try It Now</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
        </OptForm>
      </Feature>
    </Header>
  );
}
