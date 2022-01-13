import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import HeaderBg from "../../components/layouts/HeaderBg";
import { ROUTES } from "../../const/routeNames";
import { ReducerTypes } from "../../context/reducer";
import { ContextMain } from "../../context/store";

import SignUpForm from "./Signup";
import LoginForm from "./Login";

import "./styles.scss";

const Home = () => {
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

  return (
    <main>
      <HeaderBg>
        <img className="header-bg__logo" src="./assets/logo.png" />
      </HeaderBg>
      <SignUpForm />
      <LoginForm />
    </main>
  );
};

export default Home;
