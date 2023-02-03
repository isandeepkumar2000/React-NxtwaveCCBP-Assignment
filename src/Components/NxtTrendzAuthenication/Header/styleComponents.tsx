import styled from "styled-components";

export const HeaderContainerNxt = styled.div`
  padding: 30px 45px;
`;

export const HeaderItemsNxt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const HeaderImage = styled.img`
  width: 200px;
  height: 40px;
`;

export const HeaderNavBArOptions = styled.div`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

export const HeaderNavOptionItems = styled.div`
  margin-left: 15px;
  font-family: initial;
  font-weight: 500;
  text-decoration: none;
  font-size: 19px;
  color: gray;

  a {
    text-decoration: none;
    color: black;
  }
`;

export const HeaderNavOptionButton = styled.button`
  margin-left: 15px;
  font-family: initial;
  font-weight: 500;
  padding: 4px 12px;
  background-color: #0b69ff;

  border: none;
  border-radius: 5px;
  font-size: 14px;
  a {
    text-decoration: none;
    color: white;
  }
`;
