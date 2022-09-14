import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Feature,
  Text,
  FeatureCallOut,
  Link,
  Group,
} from "./style";

export default function Header({ children, bg = true, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function ({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function ({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function ({ to, children, ...restProps }) {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};

Header.Feature = function ({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Text = function ({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.FeatureCallOut = function ({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.TextLink = function ({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children} </Group>;
};
