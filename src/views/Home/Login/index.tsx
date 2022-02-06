import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useLoginWithWallet } from "../../../hooks/api/user";

import { ReducerTypes } from "../../../context/reducer";
import { ContextMain } from "../../../context/store";
import loginSchema from "../../../validation/loginSchema";

import "../styles.scss";
import { ROUTES } from "../../../const/routeNames";

interface LoginValues {
  walletName: string;
}

const LoginForm = () => {
  
  const [, dispatch] = React.useContext(ContextMain);
  const { loginWithWallet, isLoggingIn } = useLoginWithWallet();
  const navigate = useNavigate();

  const initialValues: LoginValues = {
    walletName: "",
  };
  
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values: LoginValues) => {
      console.info({ values });
      await loginWithWallet(`${values.walletName}.near`, {
        onSuccess: (response: any) => {
          dispatch({
            type: "SET_LOGIN_ACCOUNT",
            payload: {
              walletName: `${values.walletName}.near`,
              type: response.type,
            },
            reducer: ReducerTypes.Login,
          });
          navigate(ROUTES.VERIFICATION.url);
        },
        onError: () => {
          formik.errors.walletName = "The account doesn't exist";
        },
      });
    },
  });

  return (
    <section className="home">
      <form onSubmit={formik.handleSubmit}>
        <div className="home__near-login">
          <span className="home__question"> Already have NEAR account?</span>

          <div className="accountId_after">
            <input
              placeholder="john"
              id="walletName"
              name="walletName"
              className={`accountId_input ${
                formik.errors.walletName ? "wrong" : ""
              }`}
              value={formik.values.walletName}
              onPaste={formik.handleChange}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {!!formik.values.walletName &&
              !!formik.touched.walletName &&
              !!formik.errors.walletName && (
                <p className="error-text"> {formik.errors.walletName}</p>
              )}
          </div>
          <button
            className="button btn-dark home__button"
            disabled={!!isLoggingIn}
            onClick={() => formik.handleSubmit()}
          >
            Login {isLoggingIn ? "..." : ""}
          </button>
          <p>
            by clicking continue you must agree to near labs{" "}
            <a> Terms & Conditions</a> ans <a> Privacy Policy</a>
          </p>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
