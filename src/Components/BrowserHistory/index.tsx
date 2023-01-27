import React from "react";
import { useState } from "react";
import IndexProp from "./indexProp";
import {
  BrowserContainer,
  BrowserItems,
  DisplayFlexMobilebg,
  HeaderPart,
} from "./stylecomponents";

const BrowserArrayList = [
  {
    id: 1,
    timeAccessed: "7:00" + "PM",
    logoUrl:
      "https://i.ibb.co/P64s92p/4975304-contact-email-gmail-inbox-mail-icon.png",
    title: "Gmail",
    domainUrl: "mail.google.co.in",
  },
  {
    id: 2,
    timeAccessed: "8:00" + "AM",
    logoUrl: "https://i.ibb.co/7pJkLZN/2993738-social-media-itunes-icon.png",
    title: "Itunes",
    domainUrl: "www.itunes.store.com",
  },

  {
    id: 3,
    timeAccessed: "4:30" + "AM",
    logoUrl:
      "https://i.ibb.co/chJRvXB/4201991-drive-google-googledrive-logo-social-icon.png",
    title: "GoogleDrive",
    domainUrl: "www.googledrive.com",
  },

  {
    id: 4,
    timeAccessed: "2:47" + "PM",
    logoUrl: "https://i.ibb.co/ZJ5Hsm7/facebook.png",
    title: "FaceBook",
    domainUrl: "www.facebook.com",
  },
  {
    id: 5,
    timeAccessed: "1:10" + "AM",
    logoUrl: "https://i.ibb.co/q1z9b13/instagram.png",
    title: "Instagram",
    domainUrl: "instagram.co.in",
  },
  {
    id: 6,
    timeAccessed: "3:33" + "PM",
    logoUrl: "https://i.ibb.co/qYpSZ1V/linkedin.png",
    title: "LinkedIn",
    domainUrl: "linkedIn.co.in",
  },
  {
    id: 7,
    timeAccessed: "2:26" + "AM",
    logoUrl: "https://i.ibb.co/LtJSq8k/pinterest.png",
    title: "Pinterest",
    domainUrl: "pinterest.co.in",
  },
  {
    id: 8,
    timeAccessed: "12:01" + "PM",
    logoUrl: "https://i.ibb.co/Jd6stjc/telegram.png",
    title: "Telegram",
    domainUrl: "mail.telegram.co.in",
  },
  {
    id: 9,
    timeAccessed: "10:09" + "PM",
    logoUrl: "https://i.ibb.co/Rcj90Xw/whatsapp.png",
    title: "Whatsapp",
    domainUrl: "whatsapp.co.in",
  },
];

export type BrowserArrayListType = {
  id: number;
  timeAccessed: string;
  logoUrl: string;
  title: string;
  domainUrl: string;
};

const BrowserHistory = () => {
  const [searchInput, setSearchInput] = useState("");
  const [userDeleteData, setUserDeleteData] = useState(BrowserArrayList);

  const searchInputArea = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const FilterSearchInput = userDeleteData.filter((eachItem) => {
    return eachItem.title.toLowerCase().includes(searchInput.toLowerCase());
  });

  const deleteItems = (id: number): void => {
    setUserDeleteData(
      userDeleteData.filter((eachTransaction) => id !== eachTransaction.id)
    );
  };

  return (
    <BrowserContainer className="BrowserContainer">
      <BrowserItems className="BrowserItems">
        <DisplayFlexMobilebg className="BrowserBox-1">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app Logo"
            />
          </div>
          <HeaderPart>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <div>
              <input
                type="search"
                value={searchInput}
                placeholder="Write Your Name Here!"
                onChange={searchInputArea}
              />
            </div>
          </HeaderPart>
        </DisplayFlexMobilebg>
        <div className="BrowserBox-2">
          {FilterSearchInput.map((eachTransaction) => (
            <IndexProp
              key={eachTransaction.id}
              VariableBrowser={eachTransaction}
              deleteItems={deleteItems}
            />
          ))}
        </div>
        {FilterSearchInput.length === 0 ? "Ohh No there is No data" : ""}
      </BrowserItems>
    </BrowserContainer>
  );
};

export default BrowserHistory;
