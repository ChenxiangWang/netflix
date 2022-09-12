import React from "react";
import JumbotronContainer from "../containers/jumptron";
import FooterContainer from "../containers/footer";
import AccordionContainer from "../containers/accordion";
import HeaderContainer from "../containers/HeaderContainer";
import OptFormContainer from "../containers/OptFormContainer";
import Feature from "../components/feature";
export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited files, TV programs and more.</Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptFormContainer />
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FooterContainer />
      <AccordionContainer />
    </>
  );
}
