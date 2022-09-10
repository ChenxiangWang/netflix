import React from "react";
import faqsData from "../fixtures/faqs.json";
import Accordion from "../components/accordion";

function AccordionContainer(props) {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questino</Accordion.Title>
      {faqsData.map((item) => {
        return (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}

export default AccordionContainer;
