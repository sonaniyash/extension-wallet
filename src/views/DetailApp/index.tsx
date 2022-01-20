import React from 'react';
import HeaderAccountSelect from '../../components/common/HeaderAccountSelect';

import './styles.scss';
import { useParams } from 'react-router';
import { useGetAppById } from '../../hooks/api/apps';

export default function DetailApp() {
    const { id } = useParams();
    const { app, isSearching } = useGetAppById(id || '');

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
                            <img className="detailApp__header__logo" src={app?.image_url}/>
                            <a className="detailApp__header__shareBtn" href={app.url}>
                                <img src="/assets/svg/share-icon.svg" alt="share"/>
                                <span>Share</span>
                            </a>
                        </div>
                    </div>
                    <div className="detailApp__content">
                        <h1 className="detailApp__title">{app.name}</h1>
                        <div className="detailApp__description">sign smart contracts seamlessly</div>
                        <a className="detailApp__link" href="">{app.category}</a>
                        <div className="detailApp__footer">
                            <button className="detailApp__openBtn">
                                <span>Open</span>
                                <img src="/assets/svg/icon-send.svg" alt="send"/>
                            </button>
                            <div className="detailApp__subscribers">
                                <img src="/assets/svg/icon-people.svg" alt="subscribers"/>
                                <span>{app.users_count}+ users</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
