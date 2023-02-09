import styled from "styled-components";
// import { createGlobalStyle } from "styled-components";

// export const HomeGlobalStyle = createGlobalStyle`
//  body {
//   background-color: #202020;
// }
// `;

// export const JobbyMeetingConferenceImage = styled.div`
//   background-image: url("https://assets.ccbp.in/frontend/react-js/home-lg-bg.png");
//   background-repeat: no-repeat;
//   background-position: 73% 20%;
//   background-size: cover;
//   min-height: 980px;
//   color: white;
// `;

// export const JobbyHomePageContent = styled.div`
//   width: 78%;
//   margin-top: 80px;
//   max-width: 600px;
//   padding: 25px 35px;
// `;

// export const JobbyHomeHeading = styled.span`
//   font-size: 70px;
//   font-family: initial, sans-serif;
//   font-weight: 700;
//   line-height: 75px;
// `;

// export const JobbyFindJobButton = styled.button`
//   border-radius: 8px;
//   background-color: #6366f1;
//   margin-top: 50px;
//   font-size: 16px;
//   color: white;
//   font-weight: bold;
//   border: 0px;
//   padding: 15px 30px;
// `;

// export const JobbyHomeDescription = styled.div`
//   font-size: 25px;

//   margin-top: 60px;
// `;

export const JobbyMeetingConferenceImage = styled.div`
  background-image: url("https://assets.ccbp.in/frontend/react-js/home-sm-bg.png");
  height: 980px;
  overflow: auto;
  background-position: 73% 55%;
  background-size: cover;
  @media screen and (min-width: 768px) {
    background-image: url("https://assets.ccbp.in/frontend/react-js/home-lg-bg.png");
  }
`;

export const JobbyAppInfoContainer = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
  line-height: 25px;
  @media screen and (min-width: 768px) {
    width: 650px;
    line-height: 25px;
    margin-left: 70px;
    margin-top: 70px;
    color: white;
    align-items: center;
  }
`;

export const JobbyInfoHeading = styled.span`
  font-size: 70px;
  font-family: initial, sans-serif;
  font-weight: 700;
  line-height: 75px;
  color: white;
  @media screen and (min-width: 768px) {
    color: white;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 70px;
    font-weight: 600;
  }
`;

export const JobbyInfoPara = styled.span`
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    color: white;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 25px;
    line-height: 30px;
    font-weight: 600;
  }
`;

export const JobbyFindJobButton = styled.button`
  border-radius: 8px;
  background-color: #6366f1;
  margin-top: 50px;
  font-size: 16px;
  color: white;
  font-weight: bold;
  border: 0px;
  padding: 15px 30px;
  margin-left: 69px;
`;
