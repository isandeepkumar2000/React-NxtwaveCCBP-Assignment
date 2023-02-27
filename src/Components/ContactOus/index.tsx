import React from "react";
import { useTranslation } from "react-i18next";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import i18n from "../../I18n Folder/i18next";

import {
  ContactDetailContainer,
  ContactDetailItem,
  ContactDetailItemContainer,
} from "./styleComponents";

export type ContactUsType = {
  darkMode: boolean;
};

const ContactUs = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };
  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        return (
          <ContactDetailContainer darkMode={isDarkMode}>
            <h3> {t("Contact_Us")}</h3>
            <ContactDetailItemContainer>
              <ContactDetailItem
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt=""
              />
              <ContactDetailItem
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt=""
              />
              <ContactDetailItem
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt=""
              />
            </ContactDetailItemContainer>
            <h3>{t("footer_msg")}</h3>
          </ContactDetailContainer>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default ContactUs;
