import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../../const/routeNames";
import { CreateAccountData } from "../../../context/models";
import { ReducerTypes } from "../../../context/reducer";
import { ContextMain } from "../../../context/store";
import signUpSchema from "../../../validation/signUpSchema";

import "../styles.scss";

const SignUpForm = () => {
  const initialValues: CreateAccountData = {
    mode: "email",
    email: "",
    phone: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      dispatch({
        type: "SET_CREATE_ACCT",
        payload: values,
        reducer: ReducerTypes.CreateAccount,
      });
      navigate("/createAccount");
    },
  });

  const [state, dispatch] = React.useContext(ContextMain);
  const navigate = useNavigate();
  useEffect(() => {
    if (state.activePage) {
      navigate(state.activePage);
    }
    dispatch({
      type: "SET_UI",
      payload: ROUTES.HOME.url,
      reducer: ReducerTypes.Main,
    });
  }, []);

  const changeMode = (mode: string) => {
    formik.resetForm();
    formik.setFieldValue("mode", mode);
  };

  return (
    <section className="home">
      <div className="home__selectors">
        <a
          className={
            (formik.values.mode === "email" ? " --btn-active" : "") +
            " home__selectors__button"
          }
          onClick={() => changeMode("email")}
        >
          Email
        </a>
        <a
          className={
            (formik.values.mode === "phone" ? " --btn-active" : "") +
            " home__selectors__button"
          }
          onClick={() => changeMode("phone")}
        >
          Phone
        </a>
      </div>
      {formik.values.mode === "email" && (
        <>
          <input
            type="text"
            id="email"
            name="email"
            value={formik.values.email}
            onPaste={formik.handleChange}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder={"johndoe@gmail.com"}
            className="home__selectors__input"
          />
          {!!formik.values.email &&
            !!formik.touched.email &&
            !!formik.errors.email && (
              <p className="error-text"> {formik.errors.email}</p>
            )}
        </>
      )}
      {formik.values.mode === "phone" && (
        <>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onPaste={formik.handleChange}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder={"Ex. (373) 378 8383"}
            className="home__selectors__input"
          />
          {!!formik.values.phone &&
            !!formik.errors.phone &&
            !!formik.touched.phone && (
              <p className="error-text"> {formik.errors.phone}</p>
            )}
        </>
      )}
      <button
        disabled={(!!formik.touched && !formik.isValid)}
        className="button home__button"
        type="submit"
        onClick={(e: any) => formik.handleSubmit(e)}
      >
        Get Started
      </button>
    </section>
  );
};

export default SignUpForm;
