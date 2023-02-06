import styled from "styled-components";

export const PrimeVideoMovieItem = styled.div`
  max-width: 320px;
  margin: auto;
`;
export const PrimeVideoMovieImage = styled.div`
  width: 100%;
`;

export const PopupContent = styled.div`
  border-radius: 16px;
  padding: 15px 20px;
  max-width: 700px;
  width: 70%;
  height: 400px;
  display: flex;
  flex-direction: column;
  @media (max-width: 568px) {
    padding: 10px 10px;
    height: 300px;
  }
`;

export const PrimeClosePopup = styled.div`
  align-self: flex-end;
`;

export const PrimeVideoPlayer = styled.div`
  padding: 20px;
  @media (max-width: 568px) {
    padding: 5px 10px;
  }
`;
