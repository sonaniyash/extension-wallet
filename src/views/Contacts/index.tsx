import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routeNames";
import { ContextMain } from "../../context/store";
import { ReducerTypes } from "../../context/reducer";
import ContactItem from "../../components/ContactItem";
import { InputSearch } from "../../components/common/InputSearch";
import { filterArrayObjectByValue } from "../../utils/utils";
import { useGetContacts } from "../../hooks/api/contacts";

import "./styles.scss";
import { CreateButton, ImportButton, ModalContent } from "./styles";
import HeaderAccountSelect from "../../components/common/HeaderAccountSelect";


Modal.setAppElement("#popup");

const Contacts = () => {
  const navigate = useNavigate();
  const [, dispatch] = React.useContext(ContextMain);

  const { contacts, isSearching } = useGetContacts();

  const [searchInput, setsearchInput] = useState("");
  const [contactsToShow, setContactsToShow] = useState(contacts);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const selectContact = (id: string) => {
    navigate(ROUTES.DETAIL_CONTACT.url.replace(':id', id));
  };

  const importContact = () => {
    navigate(ROUTES.IMPORT_CONTACT.url);
  }

  const createContact = () => {
    navigate(ROUTES.CREATE_CONTACT.url);
  }

  const searchValueInput = (e: any) => {
    setsearchInput(e.target.value);
    const contactToShow = filterArrayObjectByValue(
      searchInput.toLowerCase(),
      contacts && contacts ? contacts : []
    );
    setContactsToShow(contactToShow);
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

  useEffect(() => {
    setContactsToShow(contacts);
  }, [contacts]);

  return (
    <>
      <HeaderAccountSelect/>
      <section className="contacts">
        <InputSearch addHandler={addContactHandler} searchHandler={searchValueInput} />
        <div className="contacts__list">
          {isSearching ? "Searching..." : ""}
          {contactsToShow && contactsToShow.map((contact: any) => (
            <ContactItem
              key={contact.account}
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
          <ImportButton onClick={importContact} > Import Contacts</ImportButton>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Contacts;
