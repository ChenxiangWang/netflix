import React, { Children } from "react";
import Header from "../components/header";
import * as ROUTERS from "../constants/routers";
import logo from "../logo.svg";

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTERS.HOME} alt={"Netflix"} src={logo} />
        <Header.ButtonLink to={ROUTERS.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
