import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderAccountSelect from "../../components/common/HeaderAccountSelect";

import accountImg from "../../public/assets/account-1.png";

import { BodyNotification, BodyTextNotification, BodyTimeNotification, Header, ImgNotification, ItemNotification } from "./styles";

const Notifications = () => {

  const [notifications, setnotifications] = useState<any>()

  const nav = useNavigate();

  useEffect(() => {

  }, [])



  return (
    <>
        <HeaderAccountSelect/>
        <Header>Notifications</Header>
        <ItemNotification>
          <ImgNotification src={accountImg} alt="" />
          <BodyNotification>
              <BodyTextNotification>
                <span>CryptoKing.near</span>  made an offer for collectible <span>#72873 </span>
              </BodyTextNotification>
              <BodyTimeNotification>5 days ago</BodyTimeNotification>
          </BodyNotification>
        </ItemNotification>
        <ItemNotification>
          <ImgNotification src={accountImg} alt="" />
          <BodyNotification>
              <BodyTextNotification>
                <span>CryptoKing.near</span>  made an offer for collectible <span>#72873 </span>
              </BodyTextNotification>
              <BodyTimeNotification>5 days ago</BodyTimeNotification>
          </BodyNotification>
        </ItemNotification>
    </>
  );
};

export default Notifications;
