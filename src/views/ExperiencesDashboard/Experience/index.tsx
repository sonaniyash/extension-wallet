import React from 'react';
import './style.scss';

import rightArrow from "../../../public/assets/experience/arrow-right-blue.svg";

type Item = {
    name: string;
    description: string;
    subscribeAmount?: string;
    image: string;
};

interface Props {
    item: Item
}

export default function ExperienceItem({ item }: Props) {
    return (
        <div className="experience__root">
            <div className="experience__image">
                <img src={item.image} />
            </div>

            <div className="experience__text">
                <p className="experience__text_name">{item.name}</p>
                <p className="experience__text_description">{item.description}</p>
                <p className="experience__text_amount">{item.subscribeAmount} users</p>
            </div>
            <div className="experience__arrow_block">
                <img src={rightArrow} />
            </div>
        </div>
    );
}