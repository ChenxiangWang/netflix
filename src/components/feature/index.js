import React from "react";
import { Title, SubTitle, Container } from "./style";

export default function Feature({ children, ...restProps }) {
  return <Container restProps>{children}</Container>;
}

Feature.Title = function ({ children, ...restProps }) {
  return <Title>{children}</Title>;
};

Feature.SubTitle = function ({ children, ...restProps }) {
  return <SubTitle>{children}</SubTitle>;
};
