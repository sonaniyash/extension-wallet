import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../const/routeNames';
import { ContextMain } from '../../context/store';
import InputWithLabel from '../../components/common/InputWithLabel';
import { ReducerTypes } from '../../context/reducer';

import './styles.scss'

export default function Unlock() {
    const navigate = useNavigate();
    const [isValid, setIsValid] = useState(false)
    const [state, dispatch] = React.useContext(ContextMain)

    useEffect(() => {
        dispatch({type: 'SET_UI', payload: ROUTES.UNLOCK.url, reducer: ReducerTypes.Main});
    }, [])

    const onChangeNameHandler = ((e: React.ChangeEvent<HTMLInputElement>): void => {
        // testing Only - REPLACE for backend validation
        if (e.target.value == "Test") {
            setIsValid(true);
        } else {
            setIsValid(false);
        }

    })
    const clickContinue = () => {
        dispatch({ type: 'SET_UNLOCK', payload: ROUTES.DASHBOARD.url, reducer: ReducerTypes.Main });
        navigate(ROUTES.DASHBOARD.url);
    }

    return (
        <main className='unlock'>

            <img className="unlock__top" src='./assets/top-Illustration.png' />
            <img className="unlock__logo" src='./assets/logo2.png' />
            <span className='unlock__header'> a web3 gateway to hidden experiences</span>

            <h1>Welcome back!</h1>
            <span className="unlock__text">Please enter the password to <br /> unlock this wallet</span>

            <InputWithLabel type={"password"} label='Password' onChange={onChangeNameHandler} />
            <button disabled={!isValid} className="button unlock__button" onClick={clickContinue} >Unlock</button>
        </main>
    )
}
