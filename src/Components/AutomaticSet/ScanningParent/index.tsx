import React from "react";
import ImageIcons from "../ImageIconNetwork/indexProp";
import { CircleWrap, MiddleIcon } from "../ImageIconNetwork/styledcomponets";
import IndexProps from "../TextScanning/indexProps";
import {
  ButtonCancel,
  ButtonNext,
  ButtonSection,
  TextBoxItems,
  TimeTextBox,
  TimeVideoContainer,
  VideoPlayerText,
} from "../TextScanning/styledcomponents";
import {
  GlobalStyle,
  MarginNetwork,
  NetworkItemsContainer,
} from "./stylecomponets";

const NetworkScanningIntroParent = () => {
  const renderCircleIcon = () => {
    return (
      <CircleWrap className="circle-wrap">
        <MiddleIcon className="Circle">
          <ImageIcons imageUrl={"learn.png"} />
        </MiddleIcon>
      </CircleWrap>
    );
  };

  const renderTagNameTitleName = () => {
    return (
      <>
        <TimeVideoContainer className="Time-Video">
          <TimeTextBox className="TimeTextBox">Up Next in 5s</TimeTextBox>
          <VideoPlayerText className="videoBox">
            <IndexProps TagName={"VIDEO"} TitleName={""} />
          </VideoPlayerText>
        </TimeVideoContainer>
        <MarginNetwork className="NetworkScanning">
          <IndexProps TagName={""} TitleName={"Network Scanning Intro"} />
        </MarginNetwork>
      </>
    );
  };

  const renderTitleButtons = () => {
    return (
      <ButtonSection className="ButtonSection">
        <ButtonCancel>Cancel</ButtonCancel>
        <ButtonNext>Next</ButtonNext>
      </ButtonSection>
    );
  };

  return (
    <div className="Container">
      <GlobalStyle />
      <NetworkItemsContainer className="Item">
        <div className="Box">{renderCircleIcon()}</div>
        <div className="Text">
          <TextBoxItems className="TextBox-items">
            {renderTagNameTitleName()}
            {renderTitleButtons()}
          </TextBoxItems>
        </div>
      </NetworkItemsContainer>
    </div>
  );
};

export default NetworkScanningIntroParent;
