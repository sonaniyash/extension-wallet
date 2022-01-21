import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ContextMain } from "../../context/store";
import { ReducerTypes } from "../../context/reducer";
import { ROUTES } from "../../const/routeNames";

import HeaderAccountSelect from "../../components/common/HeaderAccountSelect";
import { useGetAllExperiences } from "../../hooks/api/experiences";
import { useGetAllCategories } from "../../hooks/api/categories";


import SearchInput from "./SearchInput";

import "./styles.scss";

import Category from "./Category";
import ExperienceItem from "./Experience";

const ExperiencesDashboard = () => {
    const { experiences, isSearching } = useGetAllExperiences();
    const { categories, isSearching: isCategorySearching } = useGetAllCategories();

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
                                isCategorySearching && categories && categories.map((category, index) => <Category category={category} key={index} />)
                            }
                        </div>
                    </div>

                    <div className="trending_container">
                        <div className="categories_header">
                            <span className="title">Popular experiences</span>

                            <span className="see_all">
                                <a href="#">See All</a>
                                <img src="./assets/experience/arrow-right-blue.svg" alt="arrow" />
                            </span>
                        </div>
                        <div className="experiences_wrapper">
                            {isSearching ? "Searching..." : ""}
                            {
                                !isSearching && experiences && experiences.map((experience, index) => <ExperienceItem item={experience} key={index} />)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ExperiencesDashboard;
