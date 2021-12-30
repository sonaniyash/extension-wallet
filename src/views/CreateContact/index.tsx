import React from "react";
import Modal from "react-modal";

import { Button, Form, Label, Title } from "./styles";
import HeaderAccountSelect from "../../components/common/HeaderAccountSelect";
import { useContact } from "../../hooks/api/contacts";
import { useFormik } from "formik";
import createContactSchema from "../../validation/createContactSchema";
import { useNavigate } from "react-router";
import { ROUTES } from "../../const/routeNames";

Modal.setAppElement("#popup");

const CreateContacts = () => {
  const navigate = useNavigate();
  const { createContact, isCreating } = useContact();
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
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      const newContact = await createContact(values);
      console.info({ newContact });
      navigate(ROUTES.CONTACTS.url);
    },
  });
  return (
    <>
      <HeaderAccountSelect/>
      <Title>New Contact</Title>
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
          disabled={(!!formik.touched && !formik.isValid) || isCreating}
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
