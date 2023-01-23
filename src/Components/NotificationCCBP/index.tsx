import React from "react";
import NotificationAppProps from "./indexProp";
import {
  GridBoxContainer,
  GridBoxItemsBlue,
  GridBoxItemsGreen,
  GridBoxItemsRed,
  GridBoxItemsYellow,
  NotificationContainer,
  NotificationHeading,
  NotificationItems,
} from "./styledcomponets";

export type NotificationObject = {
  NotificationText: string;
  NotificationImgUrl: string;
};

const NotificationApp = () => {
  return (
    <NotificationContainer>
      <NotificationItems>
        <div>
          <NotificationHeading>Notifications</NotificationHeading>
        </div>
        <GridBoxContainer>
          <GridBoxItemsBlue>
            <NotificationAppProps
              VariableNotification={{
                NotificationImgUrl:
                  "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png",
                NotificationText: "Information Message",
              }}
            />
          </GridBoxItemsBlue>
          <GridBoxItemsGreen>
            <NotificationAppProps
              VariableNotification={{
                NotificationImgUrl:
                  "https://assets.ccbp.in/frontend/react-js/success-icon-img.png",
                NotificationText: "Success Message",
              }}
            />
          </GridBoxItemsGreen>
          <GridBoxItemsYellow>
            <NotificationAppProps
              VariableNotification={{
                NotificationImgUrl:
                  "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png",
                NotificationText: "Warning Message",
              }}
            />
          </GridBoxItemsYellow>
          <GridBoxItemsRed>
            <NotificationAppProps
              VariableNotification={{
                NotificationImgUrl:
                  "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png",
                NotificationText: "Error Message",
              }}
            />
          </GridBoxItemsRed>
        </GridBoxContainer>
      </NotificationItems>
    </NotificationContainer>
  );
};

export default NotificationApp;
