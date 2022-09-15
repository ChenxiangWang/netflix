import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Group,
  Item,
  SubTitle,
  Meta,
  Title,
  Text,
  Image,
  Entities,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
} from "./style";
export const FeatureContext = createContext();

/**
 *  what we want:
 *
 *  card could be controlled by itself
 *  once it is put into a 'group'
 *  it will be controlled by that group
 *
 * */

export default function Card({ children, onClick, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function ({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function ({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Group = function ({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Meta = function ({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Item = function CardItem({ children, item, ...restProps }) {
  const { setShowFeatured, setItemFeature } = useContext(FeatureContext);
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeatured(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function ({ children, ...restProps }) {
  return <Image {...restProps} />;
};

Card.Entities = function ({ children, entities, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};
