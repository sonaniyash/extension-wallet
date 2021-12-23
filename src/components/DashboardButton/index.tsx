import React, { MouseEventHandler } from "react";
import { useNavigate } from "react-router";

import { ContextMain } from "../../context/store";

import "./styles.scss";

interface Props {
  label: string;
  onClick: MouseEventHandler;
  type: string;
}

const DashboardButton = ({ label, onClick, type }: Props) => {
  const [state, dispatch] = React.useContext(ContextMain);

  const navigate = useNavigate();

  return (
    <>
      {type === "contact" ? (
        <a className="contact-btn dash-btn" onClick={onClick}>
          <span>Contacts</span>
          <img className="chevron" src="./assets/chevron-r-black.svg" alt="" />
        </a>
      ) : (
        ""
      )}

      {type === "web3" ? (
        <a className="web3-btn dash-btn" onClick={onClick}>
          <span>web3 Apps</span>
          <img className="chevron" src="./assets/chevron-r-white.svg" alt="" />
          <span className="web3-btn__notification">12 Connected</span>
        </a>
      ) : (
        ""
      )}
      {type === "createNFT" ? (
        <a className="createNFT-btn dash-btn" onClick={onClick}>
          <span>Start Creating your NFT Today</span>
          <button className="button">Create NFT</button>
        </a>
      ) : (
        ""
      )}
    </>
  );
};

export default DashboardButton;
