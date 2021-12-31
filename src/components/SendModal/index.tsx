import React from 'react'

import arrowUpBlue from "../../public/assets/arrow-up-blue.png";
import arrowDownBlue from "../../public/assets/arrow-down-blue.png";
import { StyledSendModal } from './styles';

interface Props {
    entity: string;
}

export default function SendModal({ entity }: Props) {
    const config = {
        arrow: entity === 'send' ? arrowUpBlue : arrowDownBlue,
        near: entity === 'send' ? 'Send NEAR' : 'Receive NEAR',
        nft: entity === 'send' ? 'Send NFT' : 'Receive NFT',
        onClickNear: entity === 'send' ? sendNear : receiveNear,
        onClickNFT: entity === 'send' ? sendNft : receiveNft,
    }
    function sendNear() {
        alert('Go to send NEAR')
    }

    function receiveNear() {
        alert('Go to receive NEAR')
    }
    function sendNft() {
        alert('Go to send NFT')
    }

    function receiveNft() {
        alert('Go to receive NFT')
    }

    return (
        <>
            <StyledSendModal onClick={() => {
                config.onClickNear()
            }}>
                <img
                    className="icon"
                    src={config.arrow}
                    alt=""
                />
                <div className="body">
                    <span className="body__title">
                        {config.near}
                    </span>
                </div>
            </StyledSendModal>
            <StyledSendModal onClick={() => {
                config.onClickNFT()
            }}>
                <img
                    className="icon"
                    src={config.arrow}
                    alt=""
                />
                <div className="body">
                    <span className="body__title">
                        {config.nft}
                    </span>
                </div>
            </StyledSendModal>
        </>
    )


}