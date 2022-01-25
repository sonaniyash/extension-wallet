import React, { FC } from 'react';
import './styles.scss';

interface Category {
    name: string;
    icon: string;
    backgroundColor: string;
}

interface CategoryFilterProps {
    categories?: Array<Category>;
    selected?: Array<Category>;
}

const CategoryFilter: FC<CategoryFilterProps> = ({ categories, selected = [] }) => {
    return (
        <div className="CategoryFilter">
            <div className="CategoryFilter__message">
                <span>Filter</span>
                <span className="CategoryFilter__message__circle">{selected.length}</span>
            </div>
            <div className="CategoryFilter__list">
                <div className="CategoryFilter__list__category">
                    <label className="CheckboxContainer">
                        <input type="checkbox" />
                        <span className="CheckboxContainer__checkmark" />
                    </label>
                    <span>All Experiences</span>
                </div>
                {categories?.map((category) => (
                    <div className="CategoryFilter__list__category">
                        <label className="CheckboxContainer">
                            <input type="checkbox" />
                            <span className="CheckboxContainer__checkmark" />
                        </label>
                        <img src={category.icon} alt="icon"/>
                        <span>{category.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;
