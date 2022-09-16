import React from "react";
import { useContent } from "../hooks";
import selectonFilter from "../utils/selection-filter";
import BrowseContainer from "../containers/BrowseContainer";
import FooterContainer from "../containers/footer";
export default function Browse() {
  const { films } = useContent("films");
  const { series } = useContent("series");
  const slides = selectonFilter({ series, films });

  return (
    <>
      <BrowseContainer slides={slides} />;
      <FooterContainer />
    </>
  );
}
