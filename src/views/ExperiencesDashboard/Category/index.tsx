import './style.scss';
import React from 'react';

type Category = {
    backgroundColor: string;
    icon: string;
    name: string;
};

interface Props {
    category: Category
}

const Category = ({ category }: Props) => {
    return (
        <div className="category__root" style={{ backgroundColor: category.backgroundColor }}>
            <div className="category__wrapper">
                <div className="logo_wrapper">
                    <img src={category.icon} />
                </div>
                <p>{category.name}</p>
            </div>

            <div className="arrow_wrapper">
                <img src="./assets/experience/arrow-right.svg" />
            </div>
        </div>
    );
}

export default Category;