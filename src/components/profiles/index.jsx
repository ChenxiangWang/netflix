import React from "react";
import { Container, Title, Item, List, Picture, Name } from "./style";

export default function Profiles({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.Item = function ({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function ({ src, children, ...restProps }) {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}
    />
  );
};

Profiles.Name = function ({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Profiles.User = function ({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Profiles.List = function ({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};
