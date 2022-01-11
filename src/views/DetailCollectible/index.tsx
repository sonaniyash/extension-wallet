import React, { useRef, useState } from 'react'
import Modal from "react-modal";
import { useParams } from 'react-router';
import HeaderAccountSelect from '../../components/common/HeaderAccountSelect';
import TabsContainer from '../../components/common/TabsContainer';
import TabsHeader from '../../components/common/TabsHeader';
import MakeOfferModal from '../../components/MakeOfferModal';
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
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const tab1 = useRef<any>();
    const tab2 = useRef<any>();

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const customStyles = {
        overlay: {
            backgroundColor: "rgba(51, 55, 59, 0.4)",
        },
        content: {
            top: '30%'
        }
    };

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
                        <StyledButton onClick={() => setModalIsOpen(true)}>
                            <img
                                className="icon"
                                src="/assets/offer.png"
                            />

                            <span className="body__title">
                                Make an Offer
                            </span>

                        </StyledButton>
                        <Modal
                            id="customModal"
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            className="open-modal"
                        >
                            <MakeOfferModal onClose={closeModal} collectible={collectible} />
                        </Modal>
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
