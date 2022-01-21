import React from 'react';
import './style.scss';

import searchIcon from "../../../public/assets/experience/search.svg";
import vortexIcon from "../../../public/assets/experience/vortex.svg";

const SearchInput = () => {
    return (
        <div className="search_container">
            <div className="input_wrapper">
                <input
                    type="text"
                    placeholder="Search experiences"
                    className="search_input" />
                <img className="search_icon" src={searchIcon} alt="search" />
            </div>

            <button type="button" className="vortex_btn">
                <img src={vortexIcon} alt="HomePage" />
            </button>
        </div>
    )
}

export default SearchInput;
