import React from 'react';
import './style.scss';

const SearchInput = () => {
    return (
        <div className="search_container">
            <div className="input_wrapper">
                <input
                    type="text"
                    placeholder="Search experiences"
                    className="search_input" />
                <img className="search_icon" src="./assets/experience/search.svg" alt="search" />
            </div>

            <button type="button" className="vortex_btn">
                <img src="./assets/experience/vortex.svg" alt="HomePage" />
            </button>
        </div>
    )
}

export default SearchInput;
