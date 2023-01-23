import React from "react";
import { NotificationObject } from "./index";
import { GridBoxItems, NotificationHead, NotificationImg } from "./styledcomponets";

interface NotificationTypeProp {
  VariableNotification: NotificationObject;
}

const NotificationAppProps: React.FC<NotificationTypeProp> = (props) => {
  const { VariableNotification } = props;
  const { NotificationText, NotificationImgUrl } = VariableNotification;
  return (
    <div>
      <GridBoxItems>
        <div>
          <NotificationImg src={NotificationImgUrl} alt={NotificationText} />
        </div>
        <div>
          <NotificationHead>{NotificationText}</NotificationHead>
        </div>
      </GridBoxItems>
    </div>
  );
};

export default NotificationAppProps;
