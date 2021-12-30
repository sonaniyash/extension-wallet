import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Modal from "react-modal";

import { ROUTES } from "../../const/routeNames";

import accountImg from "../../public/assets/account-1.png";
import chevronImg from "../../public/assets/chevron-down.png";
import "./styles.scss";
import { useGetAccounts } from "../../hooks/api/accounts";

interface Accounts {
  image: string;
  name: string;
  ammount: number;
  selected: boolean;
}

Modal.setAppElement("#popup");

const SelectAccountBtn = () => {
 
  const {accounts: myAccounts, isSearching} = useGetAccounts();

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(51, 55, 59, 0.4)",
    },
  };

  const [accounts, setAccounts] = useState<Array<any>>();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const nav = useNavigate();

  const clickAccount = (e: any, accountName: any) => {
    if (!accounts) return;

    const newAct = accounts.map((act) => {
      act.selected = act.name === accountName ? true : false;
      return act;
    });

    setAccounts(newAct);
  };

  const openModal = () => {
    setIsOpen(!modalIsOpen);
  };

  const afterOpenModal = () => {};

  const closeModal = () => {
    setIsOpen(false);
  };

  const goToCreateNEAR = () => {
    nav(ROUTES.CREATE_ACCT.url);
  };

  const goToCreateHome = () => {
    nav(ROUTES.HOME.url);
  };

  useEffect( ()=>{
    setAccounts(myAccounts);
  } ,[myAccounts])

  return (
    <>
      <a className="select-act" onClick={openModal}>
        <img className="select-act__img" src={accountImg} alt="" />
        <p className="select-act__name"> johndoe.near </p>
        <img
          className="select-act__chevron"
          src={chevronImg}
          alt=""
        />
      </a>
      <Modal 
        id="selectAccountModal"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        className="modal-select-account"
        contentLabel="Example Modal"
      >
        <h2>My Accounts</h2>
        {accounts ?  accounts.map((account: Accounts) => {
          return (
            <a
              key={account.name}
              data-act={account.name}
              onClick={(e) => clickAccount(e, account.name)}
              className="account-item"
            >
              <img
                className={`account-item__img  ${
                  account.selected ? "active" : ""
                }`}
                src={account.image}
                alt=""
              />
              <div className="account-item__body">
                <div className="account-item__body__name">{account.name}</div>
                <div className="account-item__body__ammount">
                  {" "}
                  {account.ammount}
                </div>
              </div>
              {account.selected === true ? (
                <div className="account-item__check">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                  >
                    <path
                      d="M1.66663 5L5.66663 9L12.3333 1"
                      stroke="#33373B"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              ) : (
                ""
              )}
            </a>
          );
        }): ''}

        <div className="account-select-actions">
          <a className="account-select-actions__link" onClick={goToCreateNEAR}>
            <img src="./assets/create-act.png" alt="" />
            Create Account
          </a>
          <a className="account-select-actions__link" onClick={goToCreateHome}>
            <img src="./assets/import-act.png" alt="" />
            Import Account
          </a>
        </div>
      </Modal>
    </>
  );
};

export default SelectAccountBtn;
