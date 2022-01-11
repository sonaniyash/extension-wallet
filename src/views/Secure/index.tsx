import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "lodash";

import { useForm } from "../../hooks/useForm";
import HeaderBg from "../../components/layouts/HeaderBg";
import { ROUTES } from "../../const/routeNames";
import { ContextMain } from "../../context/store";
import ProgressBar from "../../components/common/ProgressBar";
import CloseCreateAccnt from "../../components/common/CloseCreateAccnt";
import { ReducerTypes } from "../../context/reducer";

import "./styles.scss";
import InputVerification from "../../components/common/InputVerification";
import { CreateAccountData } from "../../context/models";

const Secure = () => {
  interface Password {
    password: string;
    repeatPassword: string;
  }

  const [state, dispatch] = React.useContext(ContextMain);
  const [isValid, setIsValid] = useState<boolean | null>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean | null>(false);
  const [code, setCode] = useState<string>("");
  const [repeatCode, setRepeatCode] = useState<string>("");
  const email = useState(state.createAccountData.email);

  const initialState: Password = {
    password: "",
    repeatPassword: "",
  };

  const validateForm = () => {
    const validform =
      !isEmpty(formState.password) &&
      formState.password === formState.repeatPassword;
    setIsValid(validform);
    setButtonDisabled(!validform);
    if (!validform) {
      setErrorMessage("The password confirmation does not match");
    }
  };
  const { formState, onChange } = useForm<Password>(initialState);

  useEffect(() => {
    if (!isEmpty(formState.password) && !isEmpty(formState.repeatPassword)) {
      setErrorMessage("");
      setButtonDisabled(true);
      validateForm();
    }
  }, [formState]);

  useEffect(() => {
    setIsValid(code === repeatCode && code.length === 6);
  }, [code, repeatCode]);

  const navigate = useNavigate();

  const clickContinue = () => {
    const data: CreateAccountData = state.createAccountData;
    data.passcode = code;
    dispatch({
      type: "SET_CREATE_ACCT",
      payload: data,
      reducer: ReducerTypes.CreateAccount,
    });
    navigate("/secure");
    navigate(ROUTES.DASHBOARD.url);
  };
  useEffect(() => {
    dispatch({
      type: "SET_UI",
      payload: ROUTES.SECURE.url,
      reducer: ReducerTypes.Main,
    });
  }, []);

  return (
    <main>
      <form>
        <HeaderBg>
          <>
            <p className="header-title">{ROUTES.SECURE.title}</p>
            <CloseCreateAccnt />
          </>
        </HeaderBg>
        <ProgressBar percentage={70} />
        <section className="secure">
          <p className="secure__description">
            Keep your apps safe from other with access to your computer.
          </p>
          <label htmlFor="password" className="secure__label">
            Passcode
          </label>
          <InputVerification fieldName="code" />
          <label htmlFor="repeatPassword" className="secure__label">
            Repeat Passcode
          </label>
          <InputVerification fieldName="repeatCode" />
          {!isValid ? <p className="error-text"> {errorMessage}</p> : ""}
          <button
            disabled={buttonDisabled || !isValid}
            className="button secure__button"
            onClick={clickContinue}
          >
            Continue
          </button>
          <div className="email-label"> {email}</div>

          <p>
            By creating a NEAR account, you agree to the NEAR
            <br />
            Wallet <a>Terms of Service</a> and <a>Privacy Policy</a>.
          </p>
        </section>
      </form>
    </main>
  );
};

export default Secure;
