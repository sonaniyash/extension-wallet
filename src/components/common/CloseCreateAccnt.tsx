import React, { FormEvent, KeyboardEvent, SetStateAction, useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import { ROUTES } from '../../const/routeNames';
import { ContextMain } from '../../context/store';
import './CloseCreateAccnt.scss';

interface Props {
}

const CloseCreateAccnt = (props: Props) => {

    const [ state, dispatch ] = React.useContext(ContextMain)

    const navigate = useNavigate();
    const onClick = () => {
        dispatch({type: 'SET_UI', payload: ROUTES.HOME.url});
        navigate(ROUTES.HOME.url);
    }

    return (
        <>
            <a className="close-create-acct" onClick={onClick}><img src="./assets/dismiss_24.png"/></a>
        </>
    )
}

export default CloseCreateAccnt
