import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import HeaderAccountSelect from "../../components/common/HeaderAccountSelect";
import { StyledSettings } from "./styles";
import chevron from "../../public/assets/chevron-r-black.svg";
import packageJson from "../../../../extension-wallet/package.json";
import { ContextMain } from "../../context/store";
import { ReducerTypes } from "../../context/reducer";
import { ROUTES } from "../../const/routeNames";

export default function Settings() {
  const [selected, setSelected] = useState(0);
  const [, dispatch] = React.useContext(ContextMain);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({
      type: "REMOVE_SESSION",
      reducer: ReducerTypes.Auth,
    });
    dispatch({
      type: "SET_UI",
      payload: ROUTES.HOME.url,
      reducer: ReducerTypes.Main,
    });
    navigate(ROUTES.HOME.url);
  };

  return (
    <div>
      <HeaderAccountSelect />
      <StyledSettings>
        <div className="title">Settings</div>
        <div className="section icons">
          <span className="label">Account Icon</span>
          <div className="icons-list">
            <img
              onClick={() => setSelected(1)}
              className={`item ${selected === 1 ? "selected" : ""}`}
              src="./assets/account-1.png"
            />
            <img
              onClick={() => setSelected(2)}
              className={`item ${selected === 2 ? "selected" : ""}`}
              src="./assets/account-2.png"
            />
            <img
              onClick={() => setSelected(3)}
              className={`item ${selected === 3 ? "selected" : ""}`}
              src="./assets/account-3.png"
            />
          </div>
        </div>
        <div className="section">
          Change Password
          <img className="chevron" src={chevron} alt="" />
        </div>
        <div className="section">
          Seed Phrase
          <img className="chevron" src={chevron} alt="" />
        </div>
        <div className="section">
          <span className="label">Version</span>
          <span className="value">{packageJson.version}</span>
        </div>
        <div className="section" onClick={handleLogout}>
          Logout
          <img className="chevron" src={chevron} />
        </div>
      </StyledSettings>
    </div>
  );
}
