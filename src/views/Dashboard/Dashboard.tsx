import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import HeaderBg from '../../components/layouts/HeaderBg';
import './Dashboard.scss';

interface Props {

}

const Dashboard = (props: Props) => {
    const navigate = useNavigate();

    const clickContinue = () => {
        navigate('/secure');
    }

    return (
        <>
            <HeaderBg>
                <header className='header-dash'>
                    <a> 
                        <img src="./assets/home-icon.png" alt="" />
                    </a>
                    <p> dashboard </p>
                    <div>
                        <a> 
                            <img src="./assets/notification.png" alt="" />
                        </a>
                        <a> 
                            <img src="./assets/settings.png" alt="" />
                        </a>
                    </div>
                </header>
            </HeaderBg>
            <section className="dashboard">
                <div className="dashboard__btn-container">
                    <a className='contact-btn dash-btn'>
                        <span>Contacts</span>
                        <img className='chevron' src="./assets/chevron-r-black.svg" alt="" />
                    </a>
                    <a className='web3-btn dash-btn'>
                        <span>web3 Apps</span>
                        <img className='chevron' src="./assets/chevron-r-white.svg" alt="" />
                        <span className='web3-btn__notification'>12 Connected</span>
                    </a>
                    <a className='createNFT-btn dash-btn'>
                        <span>Start Creating your NFT Today</span>
                        <button className="button" >Create NFT</button>                        
                    </a>
                </div>
            </section>
        </>
    )
}

export default Dashboard;