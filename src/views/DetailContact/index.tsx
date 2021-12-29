import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";

import backIcon from '../../public/assets/back-icon.png';
import homeIcon from '../../public/assets/home-icon.png';
import notiIcon from '../../public/assets/notification.png';
import settingsIcon from '../../public/assets/settings.png';

import HeaderBg from "../../components/layouts/HeaderBg";
import { ROUTES } from "../../const/routeNames";
import SelectAccountBtn from "../../components/SelectAccountBtn";

import { ContactIcon, DetailSection, EditContact, HeaderContact, SeeTransContact, SubtitleEmail, NameH2 } from "./styles";
import { Contact } from "../../components/ContactItem";
import { TEST_CONTACTS } from "../Contacts/mock";

Modal.setAppElement("#popup");

const DetailContacts = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(ROUTES.CONTACTS.url);
  };

  const [contact, setcontact] = useState<Contact | null>(TEST_CONTACTS[0])

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
      <HeaderBg>
        <header className="header-dash">
          <a onClick={back}>
            <img src={backIcon} alt="" />
          </a>
          <a>
            <img src={homeIcon} alt="" />
          </a>
          <SelectAccountBtn />
          <div>
            <a>
              <img src={notiIcon} alt="" />
            </a>
            <a>
              <img src={settingsIcon} alt="" />
            </a>
          </div>
        </header>
      </HeaderBg>
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

    </>
  );
};

export default DetailContacts;
