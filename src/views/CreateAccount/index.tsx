import React, {  useEffect } from "react";

import InputWithLabel from "../../components/common/InputWithLabel";
import HeaderBg from "../../components/layouts/HeaderBg";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/common/ProgressBar";
import CloseCreateAccnt from "../../components/common/CloseCreateAccnt";
import { ROUTES } from "../../const/routeNames";
import { ContextMain } from "../../context/store";
import { ReducerTypes } from "../../context/reducer";
import { useCreateAccount } from "../../hooks/api/user";

import "./styles.scss";
import { useFormik } from "formik";
import createContactSchema from "../../validation/createContactSchema";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [, dispatch] = React.useContext(ContextMain);
  const { createAccount, isCreatingAccount } = useCreateAccount();
  

  const initialValues: any = {
    fullName: "",
    walletName: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: createContactSchema,
    validateOnMount: true,
    enableReinitialize: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      const session = await createAccount({...values, walletName : values.walletName +'.near' });
      dispatch({
        type: "SET_CREATE_ACCT",
        payload: session,
        reducer: ReducerTypes.CreateAccount,
      });
      navigate("/secure");
    },
  });

  useEffect(() => {
    dispatch({
      type: "SET_UI",
      payload: ROUTES.CREATE_ACCT.url,
      reducer: ReducerTypes.Main,
    });
  }, []);


  return (
    <React.Fragment>
      <HeaderBg>
        <>
          <p> Create NEAR account </p>
          <CloseCreateAccnt />
        </>
      </HeaderBg>
      <ProgressBar percentage={30} />
      <section className="createAccount">
        <p>
          {" "}
          Enter an Account ID to use with your NEAR account. Your Account ID
          will be used for all NEAR operations, including sending and receiving
          assets.
        </p>
        <InputWithLabel
          type="text"
          label="Full Name"
          value={formik.values.fullName}
          onPaste={formik.handleChange}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        <div className="accountId_after">
          <label className="accountId_label">Account ID</label>
          <input
            className={`accountId_input ${formik.errors.walletName ? "wrong" : ""}`}
            value={formik.values.walletName}
            onPaste={formik.handleChange}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>
        <button
          disabled={!formik.isValid || isCreatingAccount}
          className="button createAccount__button"
          onClick={(e: any) => formik.handleSubmit(e)}
        >
          Continue
        </button>
        <p className="conditions">
          By creating a NEAR account, you agree to the NEAR <br /> Wallet{" "}
          <a>Terms of Service</a> and<a> Privacy Policy</a>
        </p>
      </section>
      {/* <section className="createAccount__after">
        <span className="createAccount__question">
          {" "}
          Already have NEAR account?
        </span>
        <button className="button createAccount__button btn-dark">
          Login with NEAR
        </button>
      </section> */}
    </React.Fragment>
  );
};

export default CreateAccount;
