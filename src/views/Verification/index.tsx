import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CloseCreateAccnt from "../../components/common/CloseCreateAccnt";
import InputVerification from "../../components/common/InputVerification";
import HeaderBg from "../../components/layouts/HeaderBg";
import { ROUTES } from "../../const/routeNames";
import { CreateAccountData, STATUS_CREATE_ACCT } from "../../context/models";
import { ReducerTypes } from "../../context/reducer";
import { ContextMain } from "../../context/store";
import { CREATE_TYPE } from "../../const/forms";

import "./styles.scss";

const Verification = () => {
  const TITLE_NAME = ROUTES.VERIFICATION.title;

  const [state, dispatch] = React.useContext(ContextMain);
  const [isValid, setisValid] = useState(false);
  const [code, setCode] = useState<string>("");
  const [type] = useState(state.createAccountData.mode);
  const [emailPhone] = useState(
    type === "email"
      ? state.createAccountData.email
      : state.createAccountData.phone
  );

  const navigate = useNavigate();
  const clickContinue = () => {
    const data: CreateAccountData = state.createAccountData;
    data.status = STATUS_CREATE_ACCT.PENDING_NEAR_ACCT;
    dispatch({
      type: "SET_CREATE_ACCT",
      payload: data,
      reducer: ReducerTypes.CreateAccount,
    });
    navigate("/createAccount");
  };

  useEffect(() => {
    dispatch({
      type: "SET_UI",
      payload: ROUTES.VERIFICATION.url,
      reducer: ReducerTypes.Main,
    });
  }, []);

  useEffect(() => {
    setisValid(code.length === 6);
  }, [code]);

  return (
    <main>
      <HeaderBg>
        <>
          <p className="header-title">{TITLE_NAME}</p>
          <CloseCreateAccnt />
        </>
      </HeaderBg>
      <section className="verification">
        <div className="verification__text">
          We've sent a 6-digit verification code to{" "}
          {type === "email" ? "the email address" : "your phone"}{" "}
        </div>
        <div className="verification__type"> {emailPhone}</div>
        <InputVerification codeSet={setCode} />
        <button
          disabled={!isValid}
          className="button home__button"
          onClick={clickContinue}
        >
          Continue
        </button>
        <div className="verification__question">Didn't receive your code?</div>
        <a className="verification__link">Send to a different email address</a>
        <a className="verification__link">Resend your code </a>
      </section>
    </main>
  );
};

export default Verification;
