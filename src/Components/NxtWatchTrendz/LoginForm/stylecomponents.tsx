import styled from "styled-components";

export const FlexBoxCenter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  height: 100vh;
`;

export const ImageWidth = styled.img`
  width: 600px;
  height: auto;
`;

export const FlexboxContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 200px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  flex-direction: column;
`;

export const NxtTranzWidth = styled.img`
  width: 200px;
  height: auto;
`;

export const InputStyle = styled.input`
  padding: 8px 40px;
  margin-top: 10px;
  background-color: lightgray;
  border: none;
  border-radius: 5px;
`;

export const ButtonStyled = styled.button`
  padding: 9px 108px;
  margin-top: 10px;
  background-color: dodgerblue;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  font-weight: 700;
`;
