import styled from "styled-components";

export const LoginFormContainer = styled.div`
  padding: 10px 15px;
`;

export const LoginFormItems = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  height: 100vh;
`;

export const LoginShoppingImage = styled.img`
  width: 450px;
  height: auto;
`;
export const LoginCompanyLogoImage = styled.img`
  width: 180px;
  height: auto;
  margin-left: 10px;
  margin-right: 10px;
`;

export const FormContainer = styled.div`
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  padding: 60px 50px;
`;

export const FormContainerItems = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormUserNameTitle = styled.span`
  font-size: 12px;
  font-family: initial;
  font-weight: 600;
  margin-top: 20px;
  color: #4f4d4d;
`;

export const FormUserNameInput = styled.input`
  margin-top: 6px;
  padding: 8px 15px;
  border-radius: 4px;
  border: none;
  background-color: #e2e8f0;
`;

export const FormLoginButton = styled.button`
  padding: 10px 100px;
  background-color: #0b69ff;
  color: white;
  font-size: 15px;
  font-family: initial;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
`;
