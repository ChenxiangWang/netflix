import React from "react";
import {
  Container,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Base,
  Submit,
} from "./style";

export default function Form({ children, ...restPorps }) {
  return <Container>{children}</Container>;
}

Form.Error = function ({ children, ...restPorps }) {
  return <Error {...restPorps}>{children}</Error>;
};

Form.Base = function ({ children, ...restPorps }) {
  return <Base {...restPorps}>{children}</Base>;
};
Form.Text = function ({ children, ...restPorps }) {
  return <Text {...restPorps}>{children}</Text>;
};
Form.TextSmall = function ({ children, ...restPorps }) {
  return <TextSmall {...restPorps}>{children}</TextSmall>;
};
Form.Title = function ({ children, ...restPorps }) {
  return <Title {...restPorps}>{children}</Title>;
};
Form.Link = function ({ children, ...restPorps }) {
  return <Link {...restPorps}>{children}</Link>;
};

Form.Input = function ({ children, ...restPorps }) {
  return <Input {...restPorps}>{children}</Input>;
};

Form.Submit = function ({ children, ...restPorps }) {
  return <Submit {...restPorps}>{children}</Submit>;
};
