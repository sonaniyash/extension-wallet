import React, { FormEvent, KeyboardEvent, SetStateAction, useRef, useState } from 'react'
import './ProgressBar.scss';

interface Props {
    percentage: number;
}

const ProgressBar = (props: Props) => {

    return (
        <>
            <div className={ `progress-bar  ${props.percentage === 30 ? '--30' : ''} ${props.percentage === 70 ? '--70' : ''}`}></div>
        </>
    )
}

export default ProgressBar

