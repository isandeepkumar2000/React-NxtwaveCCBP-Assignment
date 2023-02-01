import React from "react";

import { IntroNetwork, VideoSpan } from "./styledcomponents";

interface TextScanningPr {
  TagName: string;
  TitleName: string;
}

const IndexProps: React.FC<TextScanningPr> = (props) => {
  const { TagName, TitleName } = props;
  return (
    <div>
      <VideoSpan>{TagName}</VideoSpan>
      <IntroNetwork>{TitleName}</IntroNetwork>
    </div>
  );
};

export default IndexProps;
