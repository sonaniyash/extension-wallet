import React from "react";

import chevron from "../../public/assets/chevron-r-black.svg";
import CheckboxInput from "../common/InputCheckbox";

import "./styles.scss";

export interface Contact {
  id: string;
  first_name: string;
  last_name: string;
  fullName: string;
  phone: string;
  imgUrl: string;
  account?: string;
  email?: string;
  selected?: any;
  contact_id: string;
}

interface Props {
  contact: any;
  clickHandler: any;
}

const selectContactCheckbox = ()=> {};

const ContactItem = ({ contact, clickHandler }: Props) => {
  return (
    <>
      <div className="contact">
        <CheckboxInput id={contact.contact_id} onChangeHandler={selectContactCheckbox} value={contact.selected} ></CheckboxInput>

        <div onClick={()=> clickHandler(contact.contact_id)} className="contact__img">
          {contact.first_name.substring(0, 1).toUpperCase() +
            contact.last_name.substring(0, 1).toUpperCase()}
        </div>
        <div onClick={()=> clickHandler(contact.contact_id)} className="contact__body">
          <span className="contact__body__title">
            {contact.first_name} {contact.last_name}
          </span>
          <span className="contact__body__acct">{contact.wallet_id ? contact.wallet_id : ''}</span>
        </div>
        <img
          onClick={()=> clickHandler(contact.contact_id)}
          className="contact__chevron"
          src={chevron}
          alt=""
        />
      </div>
    </>
  );
};

export default ContactItem;
