import React from "react";

import chevron from "../../public/assets/chevron-r-black.svg";
import CheckboxInput from "../common/InputCheckbox";

import "./styles.scss";

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  phone: string;
  imgUrl: string;
  account: string;
  email?: string;
  selected?: any;
}

interface Props {
  contact: Contact;
  clickHandler: any;
}

const selectContactCheckbox = ()=> {};

const ContactItem = ({ contact, clickHandler }: Props) => {
  return (
    <>
      <div className="contact">
        <CheckboxInput id={contact.id} onChangeHandler={selectContactCheckbox} value={contact.selected} ></CheckboxInput>

        <div onClick={()=> clickHandler(contact.id)} className="contact__img">
          {contact.firstName.substring(0, 1).toUpperCase() +
            contact.lastName.substring(0, 1).toUpperCase()}
        </div>
        <div onClick={()=> clickHandler(contact.id)} className="contact__body">
          <span className="contact__body__title">
            {contact.firstName} {contact.lastName}
          </span>
          <span className="contact__body__acct">{contact.account}</span>
        </div>
        <img
          onClick={()=> clickHandler(contact.id)}
          className="contact__chevron"
          src={chevron}
          alt=""
        />
      </div>
    </>
  );
};

export default ContactItem;
