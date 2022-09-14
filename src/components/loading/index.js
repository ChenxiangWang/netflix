import React from "react";
import { Spinner, LockBody, Picture, ReleaseBody } from "./style";

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function ({ children, ...restProps }) {
  return <ReleaseBody />;
};
