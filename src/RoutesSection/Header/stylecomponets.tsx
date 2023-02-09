import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const HeaderGlobalStyle = createGlobalStyle`
 body {
  background-color: #202020;
}
`;

export const JobbyHeaderContainer = styled.div`
  background-color: rgb(31, 30, 30);
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const JobbyHeaderItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const JobbyHeaderHomeJobContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const JobbyHeaderHome = styled.span`
  font-size: 18px;
  font-weight: 700;
  font-family: initial, sans-serif;
  color: white;
  margin-right: 15px;
`;
export const JobbyHeaderJobs = styled.span`
  font-size: 18px;
  font-weight: 700;
  font-family: initial, sans-serif;
  color: white;
  margin-left: 12px;
`;

export const JobbyHeaderImage = styled.img`
  width: 150px;
  height: 44px;
`;

export const JobbyHeaderButton = styled.button`
  padding: 8px 20px;
  border-radius: 5px;
  background-color: #4f46e5;
  color: white;
  font-weight: 700;
  font-family: sans-serif, initial;
  border: none;
`;

// .header-container{
//   background-color: rgb(31, 30, 30);
//   padding: 10px;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   margin:0px;
// }

// @media screen and (min-width:768px) {
//   .header-container{
//   justify-content: space-between;
//   }
// }

// .header-logo-img{
//   height:40px;
//   width:100px;
//   margin-left: 40px;
// }

// .nav-link{
//   font-size:15px;
//   text-decoration: none;
//   color:white;
//   font-family: 'roboto';
//   margin:10px;
// }

// .logout-btn{
//   margin-right: 40px;
//   color:white;
//   background-color: blue;
//   padding-right:10px;
//   padding-left: 10px;
//   padding-top: 5px;
//   padding-bottom: 5px;
//   border-radius: 2px;
//   border:1px solid white;
//   cursor: pointer;

// }

// @media screen and (max-width:767px) {
//   .logout-btn{
//       display: none;
//   }
// }

// .home-jobs-sm-nav-icons-container{
//   display: flex;
//   flex-direction: row;
// }

// @media screen and (min-width:768px) {
//   .home-jobs-sm-nav-icons-container{
//       display:none;
//   }
// }

// @media screen and (max-width:767px) {
//   .home-jobs-lg-nav-items-container{
//       display: none;
//   }
// }

// .sm-nav-icon{
//   margin: 5px;
// }
