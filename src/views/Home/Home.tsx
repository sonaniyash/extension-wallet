import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import HeaderBg from "../../components/layouts/HeaderBg";
import { ROUTES } from "../../const/routeNames";
import { CreateAccountData, STATUS_CREATE_ACCT } from "../../context/models";
import { ReducerTypes } from "../../context/reducer";
import { ContextMain } from "../../context/store";
import { CREATE_TYPE } from "../../const/forms";
import loginSchema from "../../validation/loginSchema";
import { useRegister } from "../../hooks/api/user";

import "./Home.scss";

interface Props {}

const Home = (props: Props) => {
  const { registerUser, isRegistering } = useRegister();
  const initialValues: CreateAccountData = {
    type: CREATE_TYPE.EMAIL,
    email: "",
    phone: "",
    status: STATUS_CREATE_ACCT.PENDING_VERIFICATION,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      const newUser = await registerUser(values);
      console.info({ newUser });
      dispatch({
        type: "SET_CREATE_ACCT",
        payload: values,
        reducer: ReducerTypes.CreateAccount,
      });
      navigate("/verification");
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

  const changeType = (type: CREATE_TYPE) => {
    formik.resetForm();
    formik.setFieldValue("type", type);
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
              (formik.values.type === CREATE_TYPE.EMAIL
                ? " --btn-active"
                : "") + " home__selectors__button"
            }
            onClick={() => changeType(CREATE_TYPE.EMAIL)}
          >
            Email
          </a>
          <a
            className={
              (formik.values.type === CREATE_TYPE.PHONE
                ? " --btn-active"
                : "") + " home__selectors__button"
            }
            onClick={() => changeType(CREATE_TYPE.PHONE)}
          >
            Phone
          </a>
        </div>
        {formik.values.type === CREATE_TYPE.EMAIL && (
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
        {formik.values.type === CREATE_TYPE.PHONE && (
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
          disabled={(!!formik.touched && !formik.isValid) || isRegistering}
          className="button home__button"
          type="submit"
          onClick={(e: any) => formik.handleSubmit(e)}
        >
          Continue {isRegistering ? "..." : ""}
        </button>
        <p>
          by clicking continue you must agree to near labs{" "}
          <a> Terms & Conditions</a> ans <a> Privacy Policy</a>
        </p>
        <span className="home__question"> Already have NEAR account?</span>
        <button className="button btn-dark home__button">
          Login with NEAR
        </button>
      </section>
    </main>
  );
};

export default Home;
