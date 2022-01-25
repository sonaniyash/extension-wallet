import React, { useEffect } from "react";
import Modal from "react-modal";

import { Button, ChangePhoto, ChangePhotoBlock, Form, Label, PhotoContact, Title } from "./styles";
import HeaderAccountSelect from "../../components/common/HeaderAccountSelect";
import { useEditContact, useGetContact } from "../../hooks/api/contacts";
import { useFormik } from "formik";
import createContactSchema from "../../validation/createContactSchema";
import { useNavigate, useParams } from "react-router";
import { ROUTES } from "../../const/routeNames";
import { getUserIdFromToken } from "../../utils/utils";

Modal.setAppElement("#popup");

const CreateContacts = () => {
  const navigate = useNavigate();
  const userId = getUserIdFromToken();
  const { id } = useParams();
  const { contact } = useGetContact(id);

  const { editContact, isCreating } = useEditContact(id, userId);

  if (!id) {
    navigate(-1);
    console.info("no id selected to edit contact page");
  }

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
    if (contact) {
      const values = {
        email: contact.email,
        first_name: contact.first_name,
        last_name: contact.last_name,
        address: contact.address && contact.address[0],
        nearAccount: contact.wallet_id,
        phone: contact.phone[0] && contact.phone[0].number,
      }
      formik.setValues(values);
    }
  }, [contact]);

  return (
    <>
      <HeaderAccountSelect />
      <Title>Edit Contact</Title>
      <ChangePhotoBlock>
        <PhotoContact>{contact && contact.first_name && contact.last_name ? contact.first_name.substring(0, 1).toUpperCase() +
          contact.last_name.substring(0, 1).toUpperCase() : 'AA'}</PhotoContact>
        <ChangePhoto>Change photo</ChangePhoto>
      </ChangePhotoBlock>
      <Form>
        <Label htmlFor="full name">First Name</Label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formik.values.first_name}
          onPaste={formik.handleChange}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder={"Ex. John doe"}
          className="home__selectors__input"
        />
        {!!formik.values.first_name &&
          !!formik.touched.first_name &&
          !!formik.errors.first_name && (
            <p className="error-text"> {formik.errors.first_name}</p>
          )}
        <Label htmlFor="full name">Last Name</Label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formik.values.last_name}
          onPaste={formik.handleChange}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder={"Ex. John doe"}
          className="home__selectors__input"
        />
        {!!formik.values.last_name &&
          !!formik.touched.last_name &&
          !!formik.errors.last_name && (
            <p className="error-text"> {formik.errors.last_name}</p>
          )}
        <Label htmlFor="full name">Address</Label>
        <input
          type="text"
          id="address"
          name="address"
          value={formik.values.address.length ? formik.values.address[0].address : ''}
          onPaste={formik.handleChange}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder={"Ex. John doe"}
          className="home__selectors__input"
        />
        {!!formik.values.address &&
          !!formik.touched.address &&
          !!formik.errors.address && (
            <p className="error-text"> {formik.errors.address}</p>
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
            <p className="error-text"> {formik.values.email.length ? formik.values.email[0].address : ''}</p>
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
