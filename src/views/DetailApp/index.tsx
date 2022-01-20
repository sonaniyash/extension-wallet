import React from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import HeaderAccountSelect from '../../components/common/HeaderAccountSelect';
import { useGetAppById } from '../../hooks/api/apps';
import { ROUTES } from '../../const/routeNames';
import './styles.scss';

export default function DetailApp() {
    const { id } = useParams();
    const { app, isSearching } = useGetAppById(id || '');
    const navigate = useNavigate();
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
                        <a className="detailApp__link" onClick={() => navigate(ROUTES.CATEGORY.url.replace(':id', app.category))}>{app.category}</a>
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
                    </div>
                </>
            )}
        </div>
    );
}
