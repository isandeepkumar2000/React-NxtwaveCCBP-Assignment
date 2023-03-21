import React from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import {
  ContFormConatiner,
  LogoutActionContainer,
  LogoutPopupCancelBtn,
  LogoutPopupConfirmBtn,
  LogoutPoputHeader,
} from "./styleComponents";
import { LogoutButtonType } from "../../ComponentsTypes";



const LogOutPopup = (props: LogoutButtonType) => {
  const { onClose, onConfirm } = props;
  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        return (
          <ContFormConatiner darkMode={isDarkMode}>
            <LogoutPoputHeader darkMode={isDarkMode}>
              Are you sure you want to logout?
            </LogoutPoputHeader>
            <LogoutActionContainer>
              <LogoutPopupCancelBtn onClick={onClose} darkMode={isDarkMode}>
                Cancel
              </LogoutPopupCancelBtn>
              <LogoutPopupConfirmBtn onClick={onConfirm}>
                Confirm
              </LogoutPopupConfirmBtn>
            </LogoutActionContainer>
          </ContFormConatiner>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default LogOutPopup;
