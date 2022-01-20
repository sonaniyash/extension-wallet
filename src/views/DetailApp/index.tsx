import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import clsx from 'classnames';
import HeaderAccountSelect from '../../components/common/HeaderAccountSelect';
import { useGetAppById } from '../../hooks/api/apps';
import { ROUTES } from '../../const/routeNames';
import './styles.scss';

export default function DetailApp() {
    const { id } = useParams();
    const { app, isSearching } = useGetAppById(id || '');
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
    const [accordionIsOpen, setAccordionIsOpen] = useState(false);
    console.log(app);
    return (
        <div className="detailApp">
            <HeaderAccountSelect/>
            {isSearching ? (
                <>LOADING...</>
            ) : (
                <>
                    <div className="detailApp__header">
                        <div className="detailApp__header__top"/>
                        <div className="detailApp__header__bottom">
                            <img className="detailApp__header__logo" src={app.image_url}/>
                            <a className="detailApp__header__shareBtn" href={app.app_url}>
                                <img src="/assets/svg/share-icon.svg" alt="share"/>
                                <span>Share</span>
                            </a>
                        </div>
                    </div>
                    <div className="detailApp__content">
                        <h1 className="detailApp__title">{app.name}</h1>
                        <div className="detailApp__description">{app.description}</div>
                        <a className="detailApp__link"
                           onClick={() => navigate(ROUTES.CATEGORY.url.replace(':id', app.category))}>{app.category}</a>
                        <div className="detailApp__footer">
                            <a className="detailApp__openBtn" href={app.app_callback_url} target="_blank">
                                <span>Open</span>
                                <img src="/assets/svg/icon-send.svg" alt="send"/>
                            </a>
                            <div className="detailApp__subscribers">
                                <img src="/assets/svg/icon-people.svg" alt="subscribers"/>
                                <span>{app.users_count.toLocaleString()}+ users</span>
                            </div>
                        </div>
                        <div className="detailApp__tabPanel">
                            <div
                                className={clsx(
                                    'detailApp__tabPanel__tab',
                                    { 'detailApp__tabPanel__tab--active': activeTab === 0 }
                                )}
                                onClick={() => setActiveTab(0)}
                            >
                                Details
                            </div>
                            <div
                                className={clsx(
                                    'detailApp__tabPanel__tab',
                                    { 'detailApp__tabPanel__tab--active': activeTab === 1 }
                                )}
                                onClick={() => setActiveTab(1)}
                            >
                                Activities
                            </div>
                        </div>
                        <div className="detailApp__tabContent">
                            {!activeTab && (
                                <div className="detailApp__tabContent__tab">
                                    <div className="detailApp__accordion"
                                         onClick={() => setAccordionIsOpen((prevState) => !prevState)}>
                                        <div className="detailApp__accordion__summary">
                                            <h2 className="detailApp__tabContent__tab__title">
                                                Overview
                                            </h2>
                                            <img
                                                className={clsx('detailApp__accordion__arrow', {
                                                    'detailApp__accordion__arrow--rotated': accordionIsOpen,
                                                })}
                                                src="/assets/chevron-r-black.svg" alt="chevron"
                                            />
                                        </div>
                                        {accordionIsOpen && (
                                            <div className="detailApp__accordion_details">
                                                <span
                                                    className="detailApp__tabContent__tab__details">{app.details}</span>
                                                <a
                                                    className="detailApp__tabContent__tab__appUrl"
                                                    href={app.app_url}
                                                    target="_blank"
                                                >
                                                    <img src="/assets/svg/world-icon.svg" alt="world"/>
                                                    <span>{app.app_url}</span>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            {!!activeTab && (
                                <div className="detailApp__tabContent__tab">

                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
