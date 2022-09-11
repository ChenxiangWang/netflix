import React from "react";
import OptForm from "../components/opt-form";

export default function OptFormContainer() {
  return (
    <OptForm>
      <OptForm.Input placeholder="Email Address" />
      <OptForm.Button>Try It Now</OptForm.Button>
      <OptForm.Break />
      <OptForm.Text>
        Ready to watch? Enter your email to create or restart your membership.
      </OptForm.Text>
    </OptForm>
  );
}
