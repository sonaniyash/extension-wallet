import React, { MouseEventHandler, useState } from 'react'

import { StyledButton, StyledMakeOfferModal } from './styles'

interface Props {
    onClose: MouseEventHandler<HTMLImageElement>,
    collectible: any
}

export default function MakeOfferModal({ onClose, collectible }: Props) {
    const [expiresData, setExpiresData] = useState(0);

    const calculateExpires = (e: React.ChangeEvent<HTMLInputElement>) => {
        const endDate = new Date(e.target.value).valueOf();
        const startDate = Date.now();
        const diffInMs = endDate - startDate;
        const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

        setExpiresData(diffInDays);
    }
    return (
        <StyledMakeOfferModal>
            <div className='header'>
                <span className='title'>
                    Make an Offer
                </span>
                <img className='cross' src='/assets/cross.png' onClick={onClose} />
            </div>
            <div className='number'>
                # {collectible.id}
            </div>
            <div className="amount">
                <label className="amount_label">Amount</label>
                <input
                    className={`amount_input`}
                    type='number'
                />
            </div>
            <div className='balance'>
                <section className='balance_label'>
                    Balance
                </section>
                <section className='balance_value'>
                    1.0005 NEAR
                </section>
            </div>

            <div className="expires_label">Expires</div>

            <input type="date" onChange={calculateExpires} />
            {
                expiresData > 0 && (
                    <div className='remain'>
                        Offer expires after {expiresData} days
                    </div>
                )

            }
            <StyledButton onClick={() => { }}>
                <img
                    className="icon"
                    src="/assets/offer.png"
                />

                <span className="body__title">
                    Make Offer
                </span>

            </StyledButton>

        </StyledMakeOfferModal>
    )
}
