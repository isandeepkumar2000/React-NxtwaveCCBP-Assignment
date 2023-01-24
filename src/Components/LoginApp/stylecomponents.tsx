import styled from "styled-components";

export const LoginContainer = styled.div`
  padding: 40px 40px;
`;

export const LoginItems = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 92vh;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;
export const Button = styled.button`
  padding: 12px 30px;
  margin-top: 20px;
  border-radius: 10px;
  border: none;
  font-size: 15px;
  font-weight: 700;
`;
export const DarkText = styled.span`
  font-size: 35px;
  font-family: Roboto, sans-serif;
  padding: 10px 20px;
  font-weight: 700;
  color: white;
`;
export const LoginBox = styled.div`
  width: 375px;
  height: 222px;
  border-radius: 10px;
  display: flex;
  background-image: linear-gradient(#2b2c49, #b5b9ff);
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
