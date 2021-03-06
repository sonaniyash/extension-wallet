import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormikProvider, useFormik } from "formik";
import axios from "axios";

import CloseCreateAccnt from "../../components/common/CloseCreateAccnt";
import InputVerification from "../../components/common/InputVerification";
import HeaderBg from "../../components/layouts/HeaderBg";
import { ROUTES } from "../../const/routeNames";
import { ReducerTypes } from "../../context/reducer";
import { ContextMain } from "../../context/store";

import "./styles.scss";
import { useVerifyUser } from "../../hooks/api/user";
import { verificationSchema } from "./schema";

interface VerificationValues {
  walletName: string;
  code: string;
}

const Verification = () => {
  const TITLE_NAME = ROUTES.VERIFICATION.title;

  const { verifyUser, isVerifying } = useVerifyUser();
  const [state, dispatch] = React.useContext(ContextMain);
  console.info({ state });

  const initialValues: VerificationValues = {
    walletName: state.walletName,
    code: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: verificationSchema,
    validateOnMount: false,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values: VerificationValues) => {
      await verifyUser(values, {
        onSuccess: (session: any) => {

          //response from verification endpoint

          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${session.token}`;

          dispatch({
            type: "CREATE_SESSION",
            payload: session.token,
            reducer: ReducerTypes.Auth,
          });
          navigate(ROUTES.DASHBOARD.url);
        },
        onError: () => {
          formik.errors.walletName = "The account doesn't exist";
        },
      });
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "SET_UI",
      payload: ROUTES.VERIFICATION.url,
      reducer: ReducerTypes.Main,
    });
  }, []);

  return (
    <main>
      <HeaderBg>
        <>
          <p className="header-title">{TITLE_NAME}</p>
          <CloseCreateAccnt />
        </>
      </HeaderBg>
      <form onSubmit={formik.handleSubmit}>
        <FormikProvider value={formik}>
          <section className="verification">
            <div className="verification__text">
              We've sent a 6-digit verification code to{" "}
              {state.type === "email" ? "you email address" : "your phone"}{" "}
            </div>
            <InputVerification fieldName="code" />
            {formik.errors.code && (
              <p className="error-text"> {formik.errors.code}</p>
            )}
            <button
              disabled={isVerifying}
              className="button home__button"
              type="submit"
            >
              Continue {isVerifying ? "..." : ""}
            </button>
            <div className="verification__question">
              Didn't receive your code?
            </div>
            <a className="verification__link">
              Send to a different email address
            </a>
            <a className="verification__link">Resend your code </a>
          </section>
        </FormikProvider>
      </form>
    </main>
  );
};

export default Verification;
