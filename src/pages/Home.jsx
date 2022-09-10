import React from "react";
import JumbotronContainer from "../containers/jumptron";
import FooterContainer from "../containers/footer";
import AccordionContainer from "../containers/accordion";
import HeaderContainer from "../containers/HeaderContainer";
export default function Home() {
  return (
    <>
      <HeaderContainer />
      <JumbotronContainer />
      <FooterContainer />
      <AccordionContainer />
    </>
  );
}
