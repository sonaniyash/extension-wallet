import React, { useRef, useState } from 'react'
import { useParams } from 'react-router';
import HeaderAccountSelect from '../../components/common/HeaderAccountSelect';
import TabsContainer from '../../components/common/TabsContainer';
import TabsHeader from '../../components/common/TabsHeader';
import { useGetCollectibleById } from '../../hooks/api/collectibles';
import { StyledButton, StyledDetailCollectible } from './styled';

export interface Collectibles {
    id: string;
    name: string;
    imgUrl: string;
    owner: string;
    description: string;
}
export default function DetailCollectible() {
    const { id } = useParams();
    const { collectible, isSearching } = useGetCollectibleById(id ? id : '');
    const [activeTab, setActive] = useState(0);
    const tab1 = useRef<any>();
    const tab2 = useRef<any>();

    return (
        <>
            <HeaderAccountSelect />
            <StyledDetailCollectible>
                {isSearching ? (<>LOADING</>) :
                    (<>
                        <div className='icon-section'>
                            <img src={collectible.imgUrl} className='background' />
                            <img src={collectible.imgUrl} className='icon' />
                        </div>
                        <div className='detail-section'>
                            <div className='name'>
                                {collectible.name}
                            </div>
                            <div className='number'>
                                # {collectible.id}
                            </div>
                            <div className='owner-wrapper'>
                                <img src="/assets/account-1.png" className='owner-icon' />
                                <div className='name-wrapper'>
                                    <span className='owner-label'>
                                        owned by
                                    </span>
                                    <span className='owner-name'>
                                        {collectible.owner}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <StyledButton>
                            <img
                                className="icon"
                                src="/assets/offer.png"
                            />

                            <span className="body__title">
                                Make an Offer
                            </span>

                        </StyledButton>
                        <div className='tabs-wrapper'>
                            <TabsHeader
                                tabsHeader={["Info", "Trade History"]}
                                setActive={setActive}
                            />
                            <TabsContainer tabs={[tab1, tab2]} activeTabId={activeTab}>
                                <>
                                    <div data-tab="0" ref={tab1} className="tab-text">
                                        {collectible.description}
                                    </div>
                                    <div data-tab="1" ref={tab2} className="tab-text">
                                        text tab 2
                                    </div>
                                </>
                            </TabsContainer>
                        </div>
                    </>
                    )}

            </StyledDetailCollectible>
        </>
    )
}
