
import React from 'react'
import { useNavigate } from 'react-router';
import { ROUTES } from '../../../const/routeNames';
import HeaderBg from '../../layouts/HeaderBg'
import backIcon from '../../../public/assets/back-icon.png';
import homeIcon from '../../../public/assets/home-icon.png';
import notiIcon from '../../../public/assets/notification.png';
import settingsIcon from '../../../public/assets/settings.png';
import SelectAccountBtn from '../../SelectAccountBtn';
interface Props {
    noBack? : boolean
}

const HeaderAccountSelect = ({noBack}: Props) => {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    };
    const home = () => {
      navigate(ROUTES.DASHBOARD.url);
    };
    return (
        <>
            <HeaderBg>
                <header className="header-dash">
                    { !noBack ?
                    (<a onClick={back}>
                        <img src={backIcon} alt="" />
                    </a>): '' }
                    
                    <a onClick={home}>
                        <img src={homeIcon} alt="" />
                    </a>
                    <SelectAccountBtn />
                    <div>
                        <a>
                        <img src={notiIcon} alt="" />
                        </a>
                        <a>
                        <img src={settingsIcon} alt="" />
                        </a>
                    </div>
                </header>
            </HeaderBg>
        </>
    )
}

export default HeaderAccountSelect