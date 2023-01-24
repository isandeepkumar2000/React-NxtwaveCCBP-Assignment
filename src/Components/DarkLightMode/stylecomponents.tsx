import styled from "styled-components";
import { ColorChangeType } from ".";

export const DarkModeContainer = styled.div`
  background-color: ${(props: ColorChangeType) =>
    props.changing ? "#000000" : "#ffffff"};
  color: ${(props: ColorChangeType) =>
    props.changing ? "#ffffff" : "#000000"};

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  height: 27vh;
  margin-top: 250px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const DarkContainer = styled.div`
  padding: 40px 40px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  margin-top: 20px;
`;
export const DarkText = styled.span`
  font-size: 25px;
  font-family: Roboto, sans-serif;
  padding: 10px 20px;
  font-weight: 700;
`;
