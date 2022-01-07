import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import HeaderBg from "../../components/layouts/HeaderBg";
import { ROUTES } from "../../const/routeNames";
import { CreateAccountData, STATUS_CREATE_ACCT } from "../../context/models";
import { ReducerTypes } from "../../context/reducer";
import { ContextMain } from "../../context/store";
import loginSchema from "../../validation/loginSchema";
import { useCheckExistence } from "../../hooks/api/user";

import "./styles.scss";

const Home = () => {
  const { checkExistence, isCheckingExistence } = useCheckExistence();
  const initialValues: CreateAccountData = {
    mode: "email",
    email: "",
    phone: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      const data: any = await checkExistence({ ...values });
      if (!data.exists) {
        dispatch({
          type: "SET_CREATE_ACCT",
          payload: values,
          reducer: ReducerTypes.CreateAccount,
        });
        navigate("/createAccount");
      } else {
        if (formik.values.mode === "email") {
          formik.errors.email = "The email has already been taken";
        }
        if (formik.values.mode === "phone") {
          formik.errors.email = "The phone has already been taken";
        }
      }
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
    <main>
      <HeaderBg>
        <img className="header-bg__logo" src="./assets/logo.png" />
      </HeaderBg>
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
              disabled={!!isCheckingExistence}
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
          disabled={
            (!!formik.touched && !formik.isValid) || isCheckingExistence
          }
          className="button home__button"
          type="submit"
          onClick={(e: any) => formik.handleSubmit(e)}
        >
          Get Started
        </button>
        <div className="home__near-login">
          <span className="home__question"> Already have NEAR account?</span>

          <input
            type="text"
            name="near-account"
            onPaste={formik.handleChange}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className="home__selectors__input"
          />
          <button className="button btn-dark home__button">Login</button>
          <p>
            by clicking continue you must agree to near labs{" "}
            <a> Terms & Conditions</a> ans <a> Privacy Policy</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
