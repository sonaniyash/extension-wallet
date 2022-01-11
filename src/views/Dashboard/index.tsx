import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import TabsContainer from "../../components/common/TabsContainer";
import TabsHeader from "../../components/common/TabsHeader";
import CollectibleItem from "../../components/common/CollectibleItem";
import { ContextMain } from "../../context/store";
import { ReducerTypes } from "../../context/reducer";
import { ROUTES } from "../../const/routeNames";

import "./styles.scss";
import HeaderAccountSelect from "../../components/common/HeaderAccountSelect";
import { useGetAllCollectibles } from "../../hooks/api/collectibles";
import MyNFTList from "../../components/MyNFTList";

const Dashboard = () => {
  const navigate = useNavigate();
  const { collectibles, isSearching } = useGetAllCollectibles();
  const [collectiblesToShow, setCollectiblesToShow] = useState(collectibles);

  useEffect(() => {
    setCollectiblesToShow(collectibles);
  }, [collectibles]);


  const goToContacts = () => {
    navigate(ROUTES.CONTACTS.url);
  };

  const goToCreateNFT = () => {
    navigate(ROUTES.CREATE_NFT.url);
  };

  const [activeTab, setActive] = useState(0);
  const tab1 = useRef<any>();
  const tab2 = useRef<any>();
  const [, dispatch] = React.useContext(ContextMain);

  useEffect(() => {
    dispatch({
      type: "SET_UI",
      payload: ROUTES.DASHBOARD.url,
      reducer: ReducerTypes.Main,
    });
  }, []);

  return (
    <>
      <HeaderAccountSelect noBack />
      <section className="dashboard">
        <div className="dashboard__btn-container">
          <a onClick={goToContacts} className="contact-btn dash-btn">
            <span>Contacts</span>
            <svg
              width="154"
              height="44"
              viewBox="0 0 154 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <circle
                cx="22"
                cy="22"
                r="20.5"
                fill="url(#pattern0)"
                stroke="#EAEFFF"
                strokeWidth="3"
              />
              <circle
                cx="54"
                cy="22"
                r="20.5"
                fill="#6B95FF"
                stroke="#EAEFFF"
                strokeWidth="3"
              />
              <circle
                cx="86"
                cy="22"
                r="20.5"
                fill="url(#pattern1)"
                stroke="#EAEFFF"
                strokeWidth="3"
              />
              <circle
                cx="118"
                cy="22"
                r="20.5"
                fill="#BB85FF"
                stroke="#EAEFFF"
                strokeWidth="3"
              />
              <circle
                cx="150"
                cy="22"
                r="20.5"
                fill="url(#pattern2)"
                stroke="#EAEFFF"
                strokeWidth="3"
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlinkHref="#image0_0_1" transform="scale(0.0153846)" />
                </pattern>
                <pattern
                  id="pattern1"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlinkHref="#image1_0_1" transform="scale(0.0153846)" />
                </pattern>
                <pattern
                  id="pattern2"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlinkHref="#image2_0_1" transform="scale(0.0153846)" />
                </pattern>
                <image
                  id="image0_0_1"
                  width="65"
                  height="65"
                  xlinkHref="data:image/png;base64,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"
                />
                <image
                  id="image1_0_1"
                  width="65"
                  height="65"
                  xlinkHref="data:image/png;base64,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"
                />
                <image
                  id="image2_0_1"
                  width="65"
                  height="65"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>

            <img
              className="chevron"
              src="./assets/chevron-r-black.svg"
              alt="chevron go to page"
            />
          </a>
          <a className="web3-btn dash-btn">
            <span>web3 Apps</span>
            <img
              className="chevron"
              src="./assets/chevron-r-white.svg"
              alt="chevron go to page"
            />
            <span className="web3-btn__notification">12 Connected</span>
          </a>
          <a className="createNFT-btn dash-btn">
            <span>Start Creating your NFT Today</span>
            <button onClick={goToCreateNFT} className="button">Create NFT</button>
          </a>
        </div>
        <TabsHeader
          tabsHeader={["Collectibles", "Transactions"]}
          setActive={setActive}
        />
        <TabsContainer tabs={[tab1, tab2]} activeTabId={activeTab}>
          <>
            <div data-tab="0" ref={tab1} className="tab-text">
              <MyNFTList/>
            </div>
            <div data-tab="1" ref={tab2} className="tab-text">
              text tab 2
            </div>
          </>
        </TabsContainer>
      </section>
    </>
  );
};

export default Dashboard;
