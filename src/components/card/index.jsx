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
 *      ======Card=================
 *      =        <Title />        =
 *      =    ---<Entities/>----   =
 *      =    |   [<Item/ >]   |   =
 *      =    ------------------   =
 *      =       <Feature />       =
 *      ===========================
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

Card.Text = function ({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Item = function CardItem({ children, item, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
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

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { setShowFeature, itemFeature, showFeature } =
    useContext(FeatureContext);
  return showFeature ? (
    <Feature
      {...restProps}
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="blod">{itemFeature.title}</FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};
