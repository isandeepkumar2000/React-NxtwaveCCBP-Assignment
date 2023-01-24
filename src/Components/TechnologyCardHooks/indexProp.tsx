import React from "react";
import { TechnologyCardType } from "./index";
import { TechnologyGrid } from "./stylecomponents";

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
      <div>
        <div>
          <span>{TechnologyCardTextHeading}</span>
        </div>
        <div>
          <span>{TechnologyCardPara}</span>
        </div>
        <div>
          <img src={TechnologyCardImgUrl} alt={TechnologyCardTextHeading} />
        </div>
      </div>
    </div>
  );
};

export default TechnologyCardProp;
