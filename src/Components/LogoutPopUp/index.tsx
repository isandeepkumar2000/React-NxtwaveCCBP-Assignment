import React from "react";
import { useTranslation } from "react-i18next";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import {
  ContFormConatiner,
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
  const { t } = useTranslation();
  const { onClose, onConfirm } = props;
  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        return (
          <ContFormConatiner darkMode={isDarkMode}>
            <LogoutPoputHeader darkMode={isDarkMode}>
              {t("Are you sure you want to logout")}
            </LogoutPoputHeader>
            <LogoutActionContainer>
              <LogoutPopupCancelBtn onClick={onClose} darkMode={isDarkMode}>
                {t("cancle")}
              </LogoutPopupCancelBtn>
              <LogoutPopupConfirmBtn onClick={onConfirm}>
                {t("confirm")}
              </LogoutPopupConfirmBtn>
            </LogoutActionContainer>
          </ContFormConatiner>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default LogOutPopup;
