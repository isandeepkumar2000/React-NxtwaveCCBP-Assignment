import React from "react";
import NxtwatchContext from "../../Contexts/NxtWatchContexts";
import {
  ContactDetailContainer,
  ContactDetailItem,
  ContactDetailItemContainer,
} from "./styleComponents";

export type ContactUsType = {
  darkMode: boolean;
};

const ContactUs = () => {
  return (
    <NxtwatchContext.Consumer>
      {(value) => {
        const { isDarkMode } = value;
        return (
          <ContactDetailContainer darkMode={isDarkMode}>
            <h3>CONTACT US</h3>
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
            <h3>Enjoy! Now to see your channels and recommendations!</h3>
          </ContactDetailContainer>
        );
      }}
    </NxtwatchContext.Consumer>
  );
};

export default ContactUs;
