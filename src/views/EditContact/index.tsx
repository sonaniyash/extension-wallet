import React, { useEffect } from "react";
import Modal from "react-modal";

import { Button, ChangePhoto, ChangePhotoBlock, Form, Label, PhotoContact, Title } from "./styles";
import HeaderAccountSelect from "../../components/common/HeaderAccountSelect";
import {  useEditContact, useGetContact } from "../../hooks/api/contacts";
import { useFormik } from "formik";
import createContactSchema from "../../validation/createContactSchema";
import { useNavigate, useParams } from "react-router";
import { ROUTES } from "../../const/routeNames";

Modal.setAppElement("#popup");

const CreateContacts = () => {
  const navigate = useNavigate();
  const { editContact, isCreating } = useEditContact();
  
  const { id } = useParams();
  if (!id){
    navigate(-1);
    console.info("no id selected to edit contact page");
  }

  const {contact} = useGetContact(id ? id : '');

  const initialValues: any = {
    fullName: "",
    email: "",
    phone: "",
    nearAccount: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: createContactSchema,
    validateOnMount: true,
    enableReinitialize: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      const newContact = await editContact(values);
      console.info({ newContact });
      navigate(ROUTES.CONTACTS.url);
    },
  });

  useEffect(() => {
    if(contact) {
      const values = {
        email: contact.email,
        fullName: contact.fullName,
        nearAccount: contact.account,
        phone: contact.phone,
      }
      formik.setValues(values);
    }
  }, [contact]);

  return (
    <>
      <HeaderAccountSelect/>
      <Title>Edit Contact</Title>
      <ChangePhotoBlock>
        <PhotoContact>{contact && contact.fullName ? contact.fullName.substring(0,2).toUpperCase(): 'AA'}</PhotoContact>
        <ChangePhoto>Change photo</ChangePhoto>
      </ChangePhotoBlock>
      <Form>
      <Label htmlFor="full name">Full Name</Label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={formik.values.fullName}
        onPaste={formik.handleChange}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        placeholder={"Ex. John doe"}
        className="home__selectors__input"
      />
      {!!formik.values.fullName &&
        !!formik.touched.fullName &&
        !!formik.errors.fullName && (
          <p className="error-text"> {formik.errors.fullName}</p>
        )}
      <Label htmlFor="full name">Email</Label>
      <input
        type="text"
        id="email"
        name="email"
        value={formik.values.email}
        onPaste={formik.handleChange}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        placeholder={"Ex. johndoe@gmail.com"}
        className="home__selectors__input"
      />
      {!!formik.values.email &&
        !!formik.touched.email &&
        !!formik.errors.email && (
          <p className="error-text"> {formik.errors.email}</p>
        )}

      <Label htmlFor="full name">Phone (optional)</Label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={formik.values.phone}
        onPaste={formik.handleChange}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        placeholder={"Ex +13673888893"}
        className="home__selectors__input"
      />
      {!!formik.values.phone &&
        !!formik.touched.phone &&
        !!formik.errors.phone && (
          <p className="error-text"> {formik.errors.phone}</p>
        )}

     <Label htmlFor="full name">Near Account ID (Optional)</Label>
      <input
        type="text"
        id="nearAccount"
        name="nearAccount"
        value={formik.values.nearAccount}
        onPaste={formik.handleChange}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        placeholder={"Ex. johndoe.near"}
        className="home__selectors__input"
      />
      {!!formik.values.nearAccount &&
        !!formik.touched.nearAccount &&
        !!formik.errors.nearAccount && (
          <p className="error-text"> {formik.errors.nearAccount}</p>
        )}
        <Button
          disabled={!formik.isValid || isCreating}
          className="button"
          type="submit"
          onClick={(e: any) => formik.handleSubmit(e)}
        >
          Save {isCreating ? "..." : ""}
        </Button>
      </Form>
      
      
    </>
  );
};

export default CreateContacts;
