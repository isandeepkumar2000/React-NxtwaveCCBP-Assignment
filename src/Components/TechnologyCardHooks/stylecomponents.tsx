import styled from "styled-components";

export const TechnologyGrid = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: auto auto;
  gap: 30px;
  padding: 20px 30px;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const TechnologyGridRed = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 15px 25px;
  font-size: 20px;
  box-shadow: rgb(255, 85, 5) 0px -6px;
`;
export const TechnologyGridBlue = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 15px 25px;
  font-size: 20px;
  box-shadow: rgb(5, 226, 255) 0px -6px;
`;

export const TechnologyGridGreen = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 15px 25px;
  font-size: 20px;
  box-shadow: rgb(9, 255, 5) 0px -6px;
`;

export const TechnologyGridYellow = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 15px 25px;
  font-size: 20px;
  box-shadow: rgb(255, 240, 26) 0px -6px;
`;

export const TechnologyContainer = styled.div`
  padding: 40px 40px;
`;

export const TechnologyItems = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 15px;
  /* height: 92vh; */

  background-color: #f4faff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

export const TechnologyHeading = styled.span`
  font-size: 50px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
`;
export const TechnologyPara = styled.div`
  font-size: 18px;
  margin-top: 40px;
  padding: 15px 35px;
  color: gray;
  line-height: 20px;
  font-family: Roboto, sans-serif;
`;

export const TechnologyInnerBox = styled.div`
  padding: 10px 12px;
`;

export const TechnologyInnerPara = styled.div`
  font-size: 15px;
  color: gray;
  padding: 10px;
  font-family: Roboto, sans-serif;
`;
export const TechnologyInnerHeading = styled.div`
  font-size: 22px;
  font-weight: 700;
  padding: 10px;
  font-family: Roboto, sans-serif;
`;

export const TechnologyInnerIm = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
