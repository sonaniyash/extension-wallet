import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ContextMain } from "../../context/store";
import { ReducerTypes } from "../../context/reducer";
import { ROUTES } from "../../const/routeNames";

import HeaderAccountSelect from "../../components/common/HeaderAccountSelect";
import { useGetAllCollectibles } from "../../hooks/api/collectibles";

import { InputSearch } from "../../components/common/InputSearch";
import SearchInput from "./SearchInput";

import "./styles.scss";

import Category from "./Category";
import ExperienceItem from "./Experience";

const ExperiencesDashboard = () => {
    const categories = [
        {
            name: 'Exchanges',
            icon: './assets/experience/categories/exchanges.svg',
            backgroundColor: '#EAEFFF',
        },
        {
            name: 'Games',
            icon: './assets/experience/categories/games.svg',
            backgroundColor: '#F5F5F5',
        },
        {
            name: 'Marketplaces',
            icon: './assets/experience/categories/marketplaces.svg',
            backgroundColor: '#E2F9F3',
        },
        {
            name: 'Defi',
            icon: './assets/experience/categories/defi.svg',
            backgroundColor: '#FFF3EC',
        },
        {
            name: 'Collectibles',
            icon: './assets/experience/categories/collectibles.svg',
            backgroundColor: '#EBF5FF',
        },
        {
            name: 'Utilities',
            icon: './assets/experience/categories/utilities.svg',
            backgroundColor: '#F0EBFF',
        },
    ];

    const experiences = {
        recent: [
            {
                name: 'DeFi Swap',
                description: 'Swap your digital assets',
                image: './assets/mock/images/defi.svg',
                subscribeAmount: '+200',
            },
            {
                name: 'Docu sign',
                description: 'sign smart contracts seamlessly',
                image: './assets/mock/images/docu.svg',
                subscribeAmount: '+1k',
            },
        ],
        other: [
            {
                name: 'DeFi Swap',
                description: 'Invest in digital assets',
                image: './assets/mock/images/defi.svg',
                subscribeAmount: '+200',
            },
            {
                name: 'DeFi Invest',
                description: 'Swap your digital assets',
                image: './assets/mock/images/defi-invest.svg',
                subscribeAmount: '+15k',
            },
            {
                name: 'DeFolio',
                description: 'Track your DeFi assets',
                image: './assets/mock/images/defolio.svg',
                subscribeAmount: '+12k',
            },
            {
                name: 'Docu sign',
                description: 'sign smart contracts seamlessly',
                image: './assets/mock/images/docu.svg',
                subscribeAmount: '+1k',
            },
        ],
    };

    const { collectibles, isSearching } = useGetAllCollectibles();
    const [collectiblesToShow, setCollectiblesToShow] = useState(collectibles);

    useEffect(() => {
        setCollectiblesToShow(collectibles);
    }, [collectibles]);

    const [activeTab, setActive] = useState(0);
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
            <HeaderAccountSelect />

            <section className="root content">
                <SearchInput />

                <div className="option-btn-wrapper">
                    <button id="discover-btn" className={`btn ${activeTab == 0 ? "btn-dark" : "btn-white"}`} onClick={() => { setActive(0) }}>Discover</button>
                    <button id="my-apps-btn" className={`btn ${activeTab == 1 ? "btn-dark" : "btn-white"}`} onClick={() => { setActive(1) }}>My apps</button>
                </div>

                <div>
                    <div className="categories_container">
                        <div className="categories_header">
                            <span className="title">Popular Categories</span>

                            <span className="see_all">
                                <a href="#">See All</a>
                                <img src="./assets/experience/arrow-right-blue.svg" alt="arrow" />
                            </span>
                        </div>
                        <div className="categories_wrapper">
                            {
                                categories.map((category, index) => <Category category={category} key={index} />)
                            }
                        </div>
                    </div>

                    <div className="trending_container">
                        <div className="categories_header">
                            <span className="title">Trending experiences</span>

                            <span className="see_all">
                                <a href="#">See All</a>
                                <img src="./assets/experience/arrow-right-blue.svg" alt="arrow" />
                            </span>
                        </div>
                        <div className="experiences_wrapper">
                            {
                                experiences.other.map((experience, index) => <ExperienceItem item={experience} key={index} />)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ExperiencesDashboard;
