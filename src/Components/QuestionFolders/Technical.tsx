import React, { useState } from "react";
import {
  HocPracticeItem,
  HocPracticeTextAppName,
  HocPracticeTextContainer,
  NABarPratice,
  NABarPraticess,
} from "./stylecomponents";

const QuestionPage = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuVisibles, setMenuVisibles] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const toggleMenus = () => {
    setMenuVisibles(!menuVisibles);
  };
  const renderTechnical = () => {
    return (
      <div className="HocPractice_Container">
        <HocPracticeItem className="HocPractice_Items">
          <div>
            <button onClick={toggleMenu}>
              {menuVisible ? "Hide " : "Show "}
            </button>
          </div>
          <HocPracticeTextContainer>
            <p>Technical Questions</p>
          </HocPracticeTextContainer>
        </HocPracticeItem>
        {menuVisible && (
          <nav>
            <NABarPratice>
              <NABarPraticess>What is React?</NABarPraticess>
              <NABarPraticess>How is it different From Angular?</NABarPraticess>
              <NABarPraticess>What are Advantage of React</NABarPraticess>
              <NABarPraticess>How good is React?</NABarPraticess>
            </NABarPratice>
          </nav>
        )}
      </div>
    );
  };
  const renderNonTechnical = () => {
    return (
      <div className="HocPractice_Container">
        <HocPracticeItem className="HocPractice_Items">
          <div>
            <button onClick={toggleMenus}>
              {menuVisibles ? "Hide " : "Show "}
            </button>
          </div>
          <HocPracticeTextContainer>
            <p>Non-Technical Questions</p>
          </HocPracticeTextContainer>
        </HocPracticeItem>
        {menuVisibles && (
          <nav>
            <NABarPratice>
              <NABarPraticess>
                How many days does this course may require ?
              </NABarPraticess>
              <NABarPraticess>what are the pros and cons ?</NABarPraticess>
              <NABarPraticess>
                lorem ipsum.sdm fhsukghrghekrjgh uiergkenbkdfjhgewi vghrw
              </NABarPraticess>
              <NABarPraticess>
                lskutvneflkj iuv tyi340c8nc hkjw,dsm fiwef wiuehkjvnsdlcmlks
              </NABarPraticess>
            </NABarPratice>
          </nav>
        )}
      </div>
    );
  };

  return (
    <div>
      <HocPracticeTextAppName>App Name: hoc-Practice</HocPracticeTextAppName>
      <div>
        {renderTechnical()}
        {renderNonTechnical()}
      </div>
    </div>
  );
};

export default QuestionPage;
