import React, { useState, useRef, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom';
import CloseCreateAccnt from '../../components/common/CloseCreateAccnt';
import InputVerification from '../../components/common/InputVerification';
import HeaderBg from '../../components/layouts/HeaderBg'
import { ROUTES } from '../../const/routeNames';
import { CreateAccountData, STATUS_CREATE_ACCT } from '../../context/models';
import { ContextMain } from '../../context/store';
import { CREATE_TYPE } from '../Home/Home';
import './Verification.scss';

interface Props {
    
}

const Verification = (props: Props) => {
    
    const TITLE_NAME = ROUTES.VERIFICATION.title;

    const [state, dispatch] = React.useContext(ContextMain)
    const [isValid, setisValid] = useState(false);
    const [code, setCode] = useState<any>(0);
    const [type, settype] = useState(state.createAccountData.type);
    const [emailPhone, setemailPhone] = useState(type === CREATE_TYPE.EMAIL ? state.createAccountData.email :  state.createAccountData.phone);

    const navigate = useNavigate();
    const clickContinue = () => {
        let data: CreateAccountData = state;
        data.status = STATUS_CREATE_ACCT.PENDING_NEAR_ACCT;
        dispatch({type: 'SET_CREATE_ACCT', payload: data});
        navigate('/createAccount');
    }

    useEffect(()=>{
        dispatch({type: 'SET_UI', payload: ROUTES.VERIFICATION.url});
    }, [])

    useEffect(()=>{
        setisValid(code.length === 6);
    }, [code])


    return (
        <main> 
            <HeaderBg>
                <>
                    <p className='header-title'>{TITLE_NAME}</p>
                    <CloseCreateAccnt/>
                </>
            </HeaderBg>
            <section className='verification'>
                <div className='verification__text' >We've sent a 6-digit verification code to {type === CREATE_TYPE.EMAIL ? 'the email address' : 'your phone'} </div>
                <div className='verification__type'> {emailPhone}</div>
                <InputVerification  codeSet={ setCode} />
                <button disabled={!isValid} className="button home__button" onClick={clickContinue} >Continue</button>
                <div className='verification__question' >Didn't receive your code?</div>
                <a className='verification__link'>Send to a different email address</a>
                <a className='verification__link'>Resend your code </a>

            </section>
        </main>
    )
}

export default Verification;

