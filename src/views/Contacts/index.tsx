import React, { useEffect, useState } from "react";

import HeaderBg from "../../components/layouts/HeaderBg";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routeNames";
import { ContextMain } from "../../context/store";
import { ReducerTypes } from "../../context/reducer";
import SelectAccountBtn from "../../components/SelectAccountBtn";
import { TEST_CONTACTS } from "./mock";
import ContactItem from "../../components/ContactItem";
import { InputSearch } from "../../components/common/InputSearch";
import { filterArrayObjectByValue } from "../../utils/utils";

import "./styles.scss";

const Contacts = () => {
  const navigate = useNavigate();
  const [, dispatch] = React.useContext(ContextMain);
  const [contacts] = useState(TEST_CONTACTS);
  const [searchInput, setsearchInput] = useState("");
  const [contactsToShow, setContactsToShow] = useState(contacts);

  const back = () => {
    navigate(ROUTES.DASHBOARD.url);
  };

  const selectContact = () => {};

  useEffect(() => {
    dispatch({
      type: "SET_UI",
      payload: ROUTES.CONTACTS.url,
      reducer: ReducerTypes.Main,
    });
  }, []);

  useEffect(() => {}, [searchInput]);

  const searchValueInput = (e: any) => {
    setsearchInput(e.target.value);
    const contactToShow = filterArrayObjectByValue(
      searchInput.toLowerCase(),
      contacts
    );
    setContactsToShow(contactToShow);
  };

  return (
    <>
      <HeaderBg>
        <header className="header-dash">
          <a onClick={back}>
            <img src="./assets/back-icon.png" alt="" />
          </a>
          <a>
            <img src="./assets/home-icon.png" alt="" />
          </a>
          <SelectAccountBtn />
          <div>
            <a>
              <img src="./assets/notification.png" alt="" />
            </a>
            <a>
              <img src="./assets/settings.png" alt="" />
            </a>
          </div>
        </header>
      </HeaderBg>
      <section className="contacts">
        <InputSearch searchHandler={searchValueInput} />
        <div className="contacts__list">
          {contactsToShow.map((contact: any) => (
            <ContactItem
              key={contact.account}
              contact={contact}
              clickHandler={selectContact}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Contacts;
