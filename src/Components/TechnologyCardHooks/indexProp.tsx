import React from "react";
import { TechnologyCardType } from "./index";
import {
  TechnologyGrid,
  TechnologyInnerBox,
  TechnologyInnerHeading,
  TechnologyInnerIm,
  TechnologyInnerPara,
} from "./stylecomponents";

interface TechnologyCardTypeProp {
  VariableTechnology: TechnologyCardType;
}

const TechnologyCardProp: React.FC<TechnologyCardTypeProp> = (props) => {
  const { VariableTechnology } = props;
  const {
    TechnologyCardTextHeading,
    TechnologyCardPara,
    TechnologyCardImgUrl,
  } = VariableTechnology;
  return (
    <div>
      <TechnologyInnerBox>
        <TechnologyInnerHeading>
          <span>{TechnologyCardTextHeading}</span>
        </TechnologyInnerHeading>
        <TechnologyInnerPara>
          <span>{TechnologyCardPara}</span>
        </TechnologyInnerPara>
        <TechnologyInnerIm>
          <img src={TechnologyCardImgUrl} alt={TechnologyCardTextHeading} />
        </TechnologyInnerIm>
      </TechnologyInnerBox>
    </div>
  );
};

export default TechnologyCardProp;
