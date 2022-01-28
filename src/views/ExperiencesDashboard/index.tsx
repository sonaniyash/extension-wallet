import React, { useEffect, useState } from 'react';

import { ContextMain } from "../../context/store";
import { ReducerTypes } from "../../context/reducer";
import { ROUTES } from "../../const/routeNames";

import Modal from "../../components/Modal";
import CategoryFilter from "./CategoryFilter";
import HeaderAccountSelect from "../../components/common/HeaderAccountSelect";
import { useGetAllExperiences } from "../../hooks/api/experiences";
import { useGetAllCategories } from "../../hooks/api/categories";

import rightArrow from "../../public/assets/experience/arrow-right-blue.svg";

import SearchInput from "./SearchInput";

import "./styles.scss";

import Category from "./Category";
import ExperienceItem from "./Experience";

import { EXPERIENCES } from '../../mock/mock';

const ExperiencesDashboard = () => {
    const { experiences, isSearching } = useGetAllExperiences();
    const { categories, isSearching: isCategorySearching } = useGetAllCategories();
    const [searchQuery, setSearchQuery] = useState("");

    const [filteredCategories, setFilteredCategories] = useState(categories?.map((item) => ({ ...item, disabled: false })));
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [activeTab, setActive] = useState(0);
    const [, dispatch] = React.useContext(ContextMain);

    const [searchResult, setSearchResult] = useState([]);

    const filterExperiences = (arr: any, term: string) => {
        const found: any = [];

        arr.map((a: any) => {
            if (a.name.match(term)) {
                found.push(a);
            }
        })

        return found;
    }

    const search = (value: string) => {
        setSearchQuery(value);
        const result: any = filterExperiences(EXPERIENCES.other, value);
        setSearchResult(result);
    }

    const toggleModal = () => setModalIsOpen((prev) => !prev);

    useEffect(() => {
        if (categories && !filteredCategories) {
            setFilteredCategories(categories.map((item) => ({ ...item, disabled: false })));
        }
    }, [categories, filteredCategories]);

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
            <Modal open={modalIsOpen} setOpen={setModalIsOpen} closeBtn>
                <CategoryFilter categories={filteredCategories} setCategories={setFilteredCategories} />
            </Modal>

            <section className="root content">
                <SearchInput search={search} toggleFilterModal={toggleModal} />

                {searchQuery.length > 0 ?
                    <div className="searchResults">
                        <div className="trending_container">
                            <div className="categories_header">
                                <span className="title">{searchResult && searchResult.length} experience found</span>
                            </div>
                            <div className="experiences_wrapper">
                                {isSearching ? "Searching..." : ""}
                                {!isSearching && searchResult && searchResult.map((experience: any, index: any) => <ExperienceItem item={experience} key={index} />)}
                            </div>
                        </div>

                        <div className="trending_container">
                            <div className="categories_header">
                                <span className="title">Recent experiences</span>
                            </div>
                            <div className="experiences_wrapper">
                                {isSearching ? "Searching..." : ""}
                                {!isSearching && experiences && experiences.map((experience, index) => <ExperienceItem item={experience} key={index} />)}
                            </div>
                        </div>
                    </div> : <div>
                        <div className="options">
                            <button className={`options__btn ${activeTab == 0 ? "options__btn-dark" : "options__btn-white"}`} onClick={() => { setActive(0) }}>Discover</button>
                            <button className={`options__btn ${activeTab == 1 ? "options__btn-dark" : "options__btn-white"}`} onClick={() => { setActive(1) }}>My apps</button>
                        </div>
                        <div>
                            <div className="categories_container">
                                <div className="categories_header">
                                    <span className="title">Popular Categories</span>
                                    <span className="see_all">
                                        <a href="#">See All</a>
                                        <img src={rightArrow} alt="arrow" />
                                    </span>
                                </div>
                                <div className="categories_wrapper">
                                    {filteredCategories?.map((category, index) => category.disabled ? false : <Category category={category} key={index} />)}
                                </div>
                            </div>
                            <div className="trending_container">
                                <div className="categories_header">
                                    <span className="title">Popular experiences</span>
                                    <span className="see_all">
                                        <a href="#">See All</a>
                                        <img src={rightArrow} alt="arrow" />
                                    </span>
                                </div>
                                <div className="experiences_wrapper">
                                    {isSearching ? "Searching..." : ""}
                                    {!isSearching && experiences && experiences.map((experience, index) => <ExperienceItem item={experience} key={index} />)}
                                </div>
                            </div>
                        </div>
                    </div>}
            </section>
        </>
    );
};

export default ExperiencesDashboard;
