import React from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import {
  LogoutActionContainer,
  LogoutPopupCancelBtn,
  LogoutPopupConfirmBtn,
  LogoutPoputHeader,
} from "./styleComponents";

export type LogoutStyle = {
  darkMode: boolean;
};
interface LogoutButtonType {
  onClose: () => void;
  onConfirm: () => void;
}

const LogOutPopup = (props: LogoutButtonType) => {
  const { onClose, onConfirm } = props;
  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        return (
          <>
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
          </>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default LogOutPopup;
