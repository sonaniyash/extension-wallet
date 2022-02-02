import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../const/routeNames';

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
    const navigate = useNavigate();

    const navigateToDetailApp = () => navigate(ROUTES.DETAIL_APP.url.replace(':id', item.name));

    return (
        <div className="experience__root" onClick={navigateToDetailApp} >
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