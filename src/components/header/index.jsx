import React, { useState } from "react";
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
  Dropdown,
  Picture,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
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

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};
Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="images/icons/search.png" alt="Search" />
      </SearchIcon>

      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};
