import React from "react";
import Modal from "react-modal";

import { Button, Form, Label, Title } from "./styles";
import HeaderAccountSelect from "../../components/common/HeaderAccountSelect";
import { useContact } from "../../hooks/api/contacts";
import { useFormik } from "formik";
import createContactSchema from "../../validation/createContactSchema";
import { useNavigate } from "react-router";
import { ROUTES } from "../../const/routeNames";
import { ContextMain } from "../../context/store";
import { getUserIdFromToken } from "../../utils/utils";

Modal.setAppElement("#popup");

const CreateContacts = () => {
  const navigate = useNavigate();
  const [state] = React.useContext(ContextMain);

  const userId = getUserIdFromToken(state)

  const { createContact, isCreating } = useContact(userId);
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
      <Label htmlFor="full name">First Name</Label>
      <input
        type="text"
        id="first_name"
        name="first_name"
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
        id="last_name"
        name="last_name"
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
        value={formik.values.address}
        onPaste={formik.handleChange}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        placeholder={"Street Address"}
        className="home__selectors__input"
      />
      { !!formik.values.address &&
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
function decode(accessToken: any) {
  throw new Error("Function not implemented.");
}

