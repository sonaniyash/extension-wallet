import React from "react";
import Modal from "react-modal";

import { Title } from "./styles";
import HeaderAccountSelect from "../../components/common/HeaderAccountSelect";

Modal.setAppElement("#popup");

const CreateContacts = () => {


  return (
    <>
      <HeaderAccountSelect/>
      <Title>New Contact</Title>
      
    </>
  );
};

export default CreateContacts;
