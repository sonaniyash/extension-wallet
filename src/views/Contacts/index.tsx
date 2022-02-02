import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routeNames";
import { ContextMain } from "../../context/store";
import { ReducerTypes } from "../../context/reducer";
import ContactItem from "../../components/ContactItem";
import { InputSearch } from "../../components/common/InputSearch";
import { useGetContacts } from "../../hooks/api/contacts";

import "./styles.scss";
import { CreateButton, ImportButton, ModalContent } from "./styles";
import HeaderAccountSelect from "../../components/common/HeaderAccountSelect";
import { getUserIdFromToken } from "../../utils/utils";


Modal.setAppElement("#popup");

const Contacts = () => {
  const navigate = useNavigate();
  const [, dispatch] = React.useContext(ContextMain);
  const [searchInput, setsearchInput] = useState("");
  const userId = getUserIdFromToken();

  const { contacts, isSearching } = useGetContacts(searchInput, userId);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const selectContact = (id: string) => {
    navigate(ROUTES.DETAIL_CONTACT.url.replace(':id', id));
  };

  const importContact = (e:any,source:string) => {
  

    localStorage.setItem('contact-import-source',source);

    const iframe = document.createElement('iframe');
    iframe.style.background = "transparent";
    iframe.style.height = "100%";
    iframe.style.width = "100%";
    iframe.style.position = "fixed";
    iframe.style.top = "0px";
    iframe.style.right = "0px";
    iframe.style.zIndex = "9000000000000000000";
    iframe.frameBorder = "none";
    iframe.src = chrome.extension.getURL("import-contacts.html")

    document.body.appendChild(iframe);

    closeModal();
  }

  const createContact = () => {
    navigate(ROUTES.CREATE_CONTACT.url);
  }

  const searchValueInput = (e: any) => {
    setsearchInput(e.target.value);

  };

  const addContactHandler = () => {
    openModal();
  };

  const openModal = () => {
    setIsOpen(!modalIsOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(51, 55, 59, 0.4)",
    },
  };

  useEffect(() => {
    dispatch({
      type: "SET_UI",
      payload: ROUTES.CONTACTS.url,
      reducer: ReducerTypes.Main,
    });
  }, []);


  
  return (
    <>
      <HeaderAccountSelect />
      <section className="contacts">
        <InputSearch placeholder="Search contacts" addHandler={addContactHandler} searchHandler={searchValueInput} />
        <div className="contacts__list">
          {isSearching ? "Searching..." : ""}
          {!isSearching && contacts && contacts.length === 0 ? "No contacts found" : ""}

          {contacts && contacts.map((contact: any) => (
            <ContactItem
              key={contact.contact_id}
              contact={contact}
              clickHandler={selectContact}
            />
          ))}
        </div>
      </section>
      <Modal
        id="selectContact"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        className="modal-create-account"
        contentLabel="Example Modal"
      >
        <ModalContent>
          <CreateButton onClick={createContact} > New Contact</CreateButton>
          <ImportButton onClick={(e)=> {importContact(e,'gmail')}} > Import Google Contacts</ImportButton>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Contacts;
