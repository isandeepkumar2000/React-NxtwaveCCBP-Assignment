import React from "react";
import TechnologyCardProp from "./indexProp";
import {
  TechnologyContainer,
  TechnologyGrid,
  TechnologyGridBlue,
  TechnologyGridGreen,
  TechnologyGridRed,
  TechnologyGridYellow,
  TechnologyHeading,
  TechnologyItems,
  TechnologyPara,
} from "./stylecomponents";

export type TechnologyCardType = {
  TechnologyCardTextHeading: string;
  TechnologyCardPara: string;
  TechnologyCardImgUrl: string;
};

const TechnologyCard = () => {
  return (
    <TechnologyContainer>
      <TechnologyItems>
        <TechnologyHeading className="Heading">
          <span>Learn 4.0 Technologies</span>
        </TechnologyHeading>
        <TechnologyPara className="Paragraph">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            vitae ducimus suscipit velit adipisci sunt doloremque ad repudiandae
            totam! Illo sunt optio sed quae! Nesciunt nemo at voluptates aperiam
            tempore?
          </span>
        </TechnologyPara>
        <TechnologyGrid>
          <TechnologyGridRed className="Data">
            <TechnologyCardProp
              VariableTechnology={{
                TechnologyCardTextHeading: "Data Scientist",
                TechnologyCardPara:
                  "Data scientist gather and analyze large sets of structured and unstructured data",
                TechnologyCardImgUrl: "https://i.ibb.co/nmW3PT2/Data.png",
              }}
            />
          </TechnologyGridRed>
          <TechnologyGridBlue className="IoT">
            <TechnologyCardProp
              VariableTechnology={{
                TechnologyCardTextHeading: "IOT Developer",
                TechnologyCardPara:
                  "IoT Developer are professional who can develop,manage,and monitor IoT devices",
                TechnologyCardImgUrl: "https://i.ibb.co/gwmpNBD/IOT.png",
              }}
            />
          </TechnologyGridBlue>
          <TechnologyGridGreen className="VR">
            <TechnologyCardProp
              VariableTechnology={{
                TechnologyCardTextHeading: "VR Developer",
                TechnologyCardPara:
                  "A VR developer creates completely new digital environments that people can see",
                TechnologyCardImgUrl: "https://i.ibb.co/V3zv7FH/ML.png",
              }}
            />
          </TechnologyGridGreen>
          <TechnologyGridYellow className="ML">
            <TechnologyCardProp
              VariableTechnology={{
                TechnologyCardTextHeading: "ML Engineer",
                TechnologyCardPara:
                  "Machine Learning engineers feed data into modals by data scientists",
                TechnologyCardImgUrl: "https://i.ibb.co/YhW0y50/VR.png",
              }}
            />
          </TechnologyGridYellow>
        </TechnologyGrid>
      </TechnologyItems>
    </TechnologyContainer>
  );
};

export default TechnologyCard;
