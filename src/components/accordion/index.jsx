/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useContext } from "react";
import { Container, Title, Item, Inner, Header, Body } from "./style";

const ToggleContext = React.createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function ({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function ({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header
      {...restProps}
      onClick={() => {
        setToggleShow((prv) => !prv);
      }}
    >
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function ({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
