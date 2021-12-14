import React, { FormEvent, KeyboardEvent, SetStateAction, useRef, useState } from 'react'
import { ROUTES } from '../../const/routeNames';
import './SeedPhraseContainer.scss';

interface Props {
    seedPhrases: Array<any>;
}

const SeedPhraseContainer = (props: Props) => {


 

    return (
        <>
            <h2 className='seed-container__title'>Seed phrase</h2>
            <div className="seed-container">
            {
                props.seedPhrases.map((prhase: any,index: number) => <div key={index} data-index={index.toString()} className='seed-container__phrase'>   {prhase} </div>)
            }
            </div>
        </>
    )
}

export default SeedPhraseContainer
