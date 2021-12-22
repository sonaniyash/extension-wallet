import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import HeaderBg from '../../components/layouts/HeaderBg';
import SelectAccountBtn from '../../components/SelectAccountBtn/SelectAccountBtn';
import TabsContainer from '../../components/common/TabsContainer/TabsContainer';
import TabsHeader from '../../components/common/TabsHeader/TabsHeader';
import './Dashboard.scss';
import CollectibleItem from '../../components/common/CollectibleItem/CollectibleItem';
import { ContextMain } from '../../context/store';
import { ReducerTypes } from '../../context/reducer';
import { ROUTES } from '../../const/routeNames';

interface Props {

}

const Dashboard = (props: Props) => {
    const navigate = useNavigate();
    const [activeTab, setActive] = useState(0)
    const tab1 = useRef<any>()
    const tab2 = useRef<any>()
    const [ state, dispatch ] = React.useContext(ContextMain)

    useEffect(() => {
        dispatch({ type: 'SET_UI', payload: ROUTES.DASHBOARD.url, reducer: ReducerTypes.Main });

    }, [])

    return (
        <>
            <HeaderBg>
                <header className='header-dash'>
                    <a> 
                        <img src="./assets/home-icon.png" alt="" />
                    </a>
                    <SelectAccountBtn/>
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
                <TabsHeader tabsHeader={['Collectibles', 'Transactions']} setActive={setActive} />
                <TabsContainer tabs={[tab1, tab2]} activeTabId={activeTab}>
                        <>  
                            <div data-tab="0" ref={tab1} className="tab-text">
                                <CollectibleItem item={0} />
                                <CollectibleItem item={0} />
                                <CollectibleItem item={0} />
                                <CollectibleItem item={0} />

                            </div>
                            <div data-tab="1" ref={tab2} className="tab-text">
                                text tab 2
                            </div>
                        </>
                </TabsContainer>
            </section>
        </>
    )
}

export default Dashboard;