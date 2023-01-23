import styled from "styled-components";

export const NotificationContainer = styled.div`
  padding: 40px 40px;
`;

export const NotificationItems = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 92vh;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const GridBoxContainer = styled.div`
  display: grid;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`;

export const GridBoxItems = styled.div`
  width: 315px;
  font-size: 30px;
  display: flex;
  align-items: center;
`;

export const GridBoxItemsBlue = styled.div`
  background-color: #0b69ff;
  border-radius: 4px;
  padding: 6px 25px;
`;

export const GridBoxItemsGreen = styled.div`
  background-color: #2dca73;
  border-radius: 4px;
  padding: 10px 25px;
`;

export const GridBoxItemsYellow = styled.div`
  background-color: #ffb800;
  border-radius: 4px;
  padding: 10px 25px;
`;

export const GridBoxItemsRed = styled.div`
  background-color: #ff0b37;
  border-radius: 4px;
  padding: 10px 25px;
`;

export const NotificationHeading = styled.span`
  font-size: 40px;
  letter-spacing: normal;
  line-height: 60px;
  font-weight: 700;
`;

export const NotificationHead = styled.span`
  font-size: 13px;
  color: white;
  font-family: Roboto;
  font-weight: 700;
  margin-left: 16px;
`;
export const NotificationImg = styled.img`
  width: 17px;
  margin-top: 20px;
`;
