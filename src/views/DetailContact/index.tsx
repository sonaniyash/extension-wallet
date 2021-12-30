import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { useParams } from "react-router-dom";

import { Contact } from "../../components/ContactItem";
import { TEST_CONTACTS } from "../../mock/mock";
import TabsHeader from "../../components/common/TabsHeader";
import TabsContainer from "../../components/common/TabsContainer";
import CollectibleItem from "../../components/common/CollectibleItem";
import HeaderAccountSelect from "../../components/common/HeaderAccountSelect";

import { ContactIcon, DetailSection, EditContact, HeaderContact, SeeTransContact, SubtitleEmail, NameH2 } from "./styles";

Modal.setAppElement("#popup");

const DetailContacts = () => {

  const [contact, setcontact] = useState<Contact | null>(TEST_CONTACTS[0])
  const [activeTab, setActive] = useState(0);
  const tab1 = useRef<any>();
  const tab2 = useRef<any>();

  const getContactData = (id: string): Contact | null  => {
    const contact = TEST_CONTACTS.find( (val: Contact)=> val.id === id );
    return contact ? contact : null;
  }
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setcontact(getContactData(id));
    }
  }, [id])

  return (
    <>
      <HeaderAccountSelect/>
      <DetailSection>
        <HeaderContact>
          <ContactIcon>
            { contact? contact?.firstName?.substring(0, 1)?.toUpperCase() + contact?.lastName?.substring(0, 1)?.toUpperCase() : ''}
          </ContactIcon>
          <div>
            <SeeTransContact></SeeTransContact>
            <EditContact></EditContact>
          </div>
        </HeaderContact>
        <NameH2> { contact ?  `${contact.firstName} ${contact.lastName}` : '' }</NameH2>
        <SubtitleEmail> { contact ? contact.account : ''}</SubtitleEmail>
      </DetailSection>
      <TabsHeader
          tabsHeader={["Collectibles", "Actions", "Connected expereinces"]}
          setActive={setActive}
        />
      <TabsContainer tabs={[tab1, tab2]} activeTabId={activeTab}>
          <>
            <div data-tab="0" ref={tab1} className="tab-text">
              <CollectibleItem item={0} />
              <CollectibleItem item={0} />
              <CollectibleItem item={0} />
              <CollectibleItem item={0} />
            </div>
            <div data-tab="1" ref={tab2} className="tab-text">
              text tab 2
            </div>
          </>
        </TabsContainer>
    </>
  );
};

export default DetailContacts;
