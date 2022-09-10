import React from "react";
import { Row, Colunm, Title, Link, Text, Container, Break } from "./styles";

export default function Footer({ children, restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = ({ children, restProps }) => {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Colunm = ({ children, restProps }) => {
  return <Colunm {...restProps}>{children}</Colunm>;
};

Footer.Link = ({ children, restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = ({ children, restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = ({ children, restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = ({ children, restProps }) => {
  return <Break {...restProps}>{children}</Break>;
};
