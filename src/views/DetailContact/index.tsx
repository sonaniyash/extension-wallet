import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";

import { Contact } from "../../components/ContactItem";
import { TEST_CONTACTS, TEST_EXPERIENCES } from "../../mock/mock";
import TabsHeader from "../../components/common/TabsHeader";
import TabsContainer from "../../components/common/TabsContainer";
import CollectibleItem from "../../components/common/CollectibleItem";
import HeaderAccountSelect from "../../components/common/HeaderAccountSelect";

import ConnectedExpItem, { ConnectedExp } from "../../components/ConnectedExpItem";

import { ContactIcon, DetailSection, EditContact, HeaderContact, SeeTransContact, SubtitleEmail, NameH2, ConnectedCount } from "./styles";
import { ROUTES } from "../../const/routeNames";

Modal.setAppElement("#popup");

const DetailContacts = () => {

  const [contact, setcontact] = useState<Contact | null>(TEST_CONTACTS[0])
  const [exps, setExps] = useState<ConnectedExp[]>()
  const [activeTab, setActive] = useState(0);
  const tab1 = useRef<any>();
  const tab2 = useRef<any>();
  const tab3 = useRef<any>();

  const getContactData = (id: string): Contact | null => {
    const contact = TEST_CONTACTS.find((val: Contact) => val.id === id);
    return contact ? contact : null;
  }
  const getConnectedExpData = (id: string): ConnectedExp[] => {
    const exps = TEST_EXPERIENCES.filter((exp: ConnectedExp) => exp.relatedAccounts?.find((coso) => id == coso.toString()));
    return exps ? exps : [];
  }
  const nav = useNavigate();
  const { id } = useParams();

  const editContact = ()=> {
    if (id) {
      nav(ROUTES.EDIT_CONTACT.url.replace(':id', id));
    }
  }

  useEffect(() => {
    if (id) {
      setcontact(getContactData(id));
      setExps(getConnectedExpData(id));
    }
  }, [id])

  return (
    <>
      <HeaderAccountSelect />
      <DetailSection>
        <HeaderContact>
          <ContactIcon>
            {contact ? contact?.firstName?.substring(0, 1)?.toUpperCase() + contact?.lastName?.substring(0, 1)?.toUpperCase() : ''}
          </ContactIcon>
          <div>
            <SeeTransContact></SeeTransContact>
            <EditContact onClick={editContact} ></EditContact>
          </div>
        </HeaderContact>
        <NameH2> {contact ? `${contact.firstName} ${contact.lastName}` : ''}</NameH2>
        <SubtitleEmail> {contact ? contact.account : ''}</SubtitleEmail>
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
            text tab 2
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
