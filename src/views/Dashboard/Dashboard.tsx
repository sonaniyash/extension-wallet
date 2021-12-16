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
                <>
                    <p> dashboard </p>
                </>
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