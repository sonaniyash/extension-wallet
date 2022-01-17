import React, { useRef, useState } from "react";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";

import TabsHeader from "../../components/common/TabsHeader";
import TabsContainer from "../../components/common/TabsContainer";
import CollectibleItem from "../../components/common/CollectibleItem";
import HeaderAccountSelect from "../../components/common/HeaderAccountSelect";

import ConnectedExpItem, { ConnectedExp } from "../../components/ConnectedExpItem";

import { ContactIcon, DetailSection, EditContact, HeaderContact, SeeTransContact, SubtitleEmail, NameH2, ConnectedCount, ButtonWrapper } from "./styles";
import { ROUTES } from "../../const/routeNames";
import arrowUp from "../../public/assets/arrow-up.png";
import arrowDown from "../../public/assets/arrow-down.png";
import SendModal from "../../components/SendModal";
import { useGetContact } from "../../hooks/api/contacts";

Modal.setAppElement("#popup");

const DetailContacts = () => {
  const { id } = useParams();
  const {contact} = useGetContact(id);

  const [exps] = useState<ConnectedExp[]>()
  const [sendIsOpen, setSendIsOpen] = React.useState(false);
  const [receiveIsOpen, setReceiveIsOpen] = React.useState(false);
  const [activeTab, setActive] = useState(0);
  const tab1 = useRef<any>();
  const tab2 = useRef<any>();
  const tab3 = useRef<any>();

  const nav = useNavigate();

  const editContact = () => {
    if (id) {
      nav(ROUTES.EDIT_CONTACT.url.replace(':id', id));
    }
  }

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(51, 55, 59, 0.4)",
    },
  };

  const closeModal = () => {
    setSendIsOpen(false);
    setReceiveIsOpen(false);
  };


  return (
    <>
      <HeaderAccountSelect />
      <DetailSection>
        <HeaderContact>
          <ContactIcon>
            {contact ? contact?.first_name?.substring(0, 1)?.toUpperCase() + contact?.last_name?.substring(0, 1)?.toUpperCase() : ''}
          </ContactIcon>
          <div>
            <SeeTransContact></SeeTransContact>
            <EditContact onClick={editContact} ></EditContact>
          </div>
        </HeaderContact>
        <NameH2> {contact ? `${contact.first_name} ${contact.last_name}` : ''}</NameH2>
        <SubtitleEmail> {contact ? contact.wallet_id : ''}</SubtitleEmail>
      </DetailSection>
      <TabsHeader
        tabsHeader={["Collectibles", "Actions", "Connected expereinces"]}
        setActive={setActive}
      />
      <TabsContainer tabs={[tab1, tab2, tab3]} activeTabId={activeTab}>
        <>
          <div data-tab="0" ref={tab1} className="tab-text">
            <CollectibleItem item={0} />
            <CollectibleItem item={0} />
            <CollectibleItem item={0} />
            <CollectibleItem item={0} />
          </div>
          <div data-tab="1" ref={tab2} className="tab-text">
            <ButtonWrapper onClick={() => {
              setSendIsOpen(true);
            }}>
              <div className="body">
                <span className="body__title">
                  Send
                </span>
              </div>
              <img
                className="icon"
                src={arrowUp}
                alt=""
              />
            </ButtonWrapper>
            <ButtonWrapper onClick={() => {
              setReceiveIsOpen(true)
            }}>
              <div className="body">
                <span className="body__title">
                  Receive
                </span>
              </div>
              <img
                className="icon"
                src={arrowDown}
                alt=""
              />
            </ButtonWrapper>
            <div>
              <Modal
                id="customModal"
                isOpen={sendIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                className="open-modal"
              >
                <SendModal entity="send" />
              </Modal>
              <Modal
                id="customModal"
                isOpen={receiveIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                className="open-modal"
              >
                <SendModal entity="receive" />
              </Modal>
            </div>
          </div>
          <div data-tab="2" ref={tab3} className="tab-text">
            {exps && exps?.length > 0 && (
              <ConnectedCount>
                {exps?.length} connected experiences with devon
              </ConnectedCount>)}
            {exps ? exps.map((exp) => (
              <ConnectedExpItem item={exp} />
            )) : null}
          </div>
        </>
      </TabsContainer>
    </>
  );
};

export default DetailContacts;
