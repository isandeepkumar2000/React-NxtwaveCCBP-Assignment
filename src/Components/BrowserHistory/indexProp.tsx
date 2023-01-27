import React from "react";
import { BrowserArrayListType } from ".";
import {
  BrowserIcons,
  ContainerPadding,
  DisplayFlexMobile,
  DisplayFlexMobiles,
  TextMargin,
  TextStyle,
  TextStyles,
} from "./stylecomponents";

interface BrowserArrayInterface {
  VariableBrowser: BrowserArrayListType;
  deleteItems: (id: number) => void;
}

const IndexProp: React.FC<BrowserArrayInterface> = (props) => {
  const { VariableBrowser, deleteItems } = props;
  const { id, timeAccessed, logoUrl, title, domainUrl } = VariableBrowser;

  const DeleteIconButton = () => {
    deleteItems(id);
  };

  return (
    <ContainerPadding>
      <div className="Time">
        <TextStyle>{timeAccessed}</TextStyle>
      </div>
      <DisplayFlexMobile>
        <DisplayFlexMobiles className="Logo-Text_smallText">
          <div>
            <div>
              <BrowserIcons src={logoUrl} alt="IconLogo" />
            </div>
          </div>
          <TextMargin>
            <div>
              <TextStyle>{title}</TextStyle>
            </div>
            <div>
              <TextStyles>{domainUrl}</TextStyles>
            </div>
          </TextMargin>
        </DisplayFlexMobiles>
        <div className="DeleteIcon">
          <button onClick={DeleteIconButton}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
              alt="DeleteIcon"
            />
          </button>
        </div>
      </DisplayFlexMobile>
    </ContainerPadding>
  );
};

export default IndexProp;
