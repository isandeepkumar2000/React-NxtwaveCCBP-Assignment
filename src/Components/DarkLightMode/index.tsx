import React from "react";
import { useState } from "react";
import {
  Button,
  DarkContainer,
  DarkModeContainer,
  DarkText,
} from "./stylecomponents";

export type ColorChangeType = {
  changing: boolean;
};

const DarkLightMode = () => {
  const [Mode, setMode] = useState(false);

  const ModeButton = () => {
    setMode((Mode) => !Mode);
  };

  return (
    <DarkContainer>
      <DarkContainer>
        <DarkModeContainer changing={Mode} className="dark-Items">
          <div>
            <DarkText>Click To Change Mode</DarkText>
          </div>
          <div>
            <Button type="button" onClick={ModeButton}>
              {Mode ? "Light Mode" : "Dark Mode"}
            </Button>
          </div>
        </DarkModeContainer>
      </DarkContainer>
    </DarkContainer>
  );
};

export default DarkLightMode;
