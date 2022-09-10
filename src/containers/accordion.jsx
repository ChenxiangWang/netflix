import React from "react";
import faqsData from "../fixtures/faqs.json";
import Accordion from "../components/accordion";
import OptForm from "../components/opt-form";

function AccordionContainer(props) {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => {
        return (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        );
      })}

      <OptForm>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>Try It Now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}

export default AccordionContainer;
