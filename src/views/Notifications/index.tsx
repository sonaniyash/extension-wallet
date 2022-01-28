import React from "react";
import HeaderAccountSelect from "../../components/common/HeaderAccountSelect";
import {
  useGetAllNotifications,
  useMarkAllNotificationsAsRead,
} from "../../hooks/api/notifications";

import accountImg from "../../public/assets/account-1.png";

import {
  BodyNotification,
  BodyTextNotification,
  BodyTimeNotification,
  Header,
  ImgNotification,
  ItemNotification,
} from "./styles";

const Notifications = () => {
  const { notifications, isLoading } = useGetAllNotifications();
  const { markAllAsRead } = useMarkAllNotificationsAsRead();

  const renderMessage = (notification: any) => {
    switch (notification.type) {
      case "OfferRevoked":
        return `The offer was revoked`;
      case "OfferSent":
        return (
          <>
            {notification.data.sender_wallet_name} made an offer of
            {notification.data.amount} NEAR for ${notification.data.nft_title}
          </>
        );

      default:
        return "";
    }
  };

  return (
    <>
      <HeaderAccountSelect />
      <Header>
        Notifications
        <a onClick={() => markAllAsRead()}>Mark all as read</a>
      </Header>
      {!isLoading &&
        notifications?.map((notification) => (
          <ItemNotification key={notification.id}>
            <ImgNotification src={accountImg} alt="" />
            <BodyNotification>
              <BodyTextNotification>
                {renderMessage(notification)}
              </BodyTextNotification>
              <BodyTimeNotification>
                {new Date(notification.createdAt).toLocaleString()}
              </BodyTimeNotification>
            </BodyNotification>
          </ItemNotification>
        ))}
    </>
  );
};

export default Notifications;
