import React, { useState, useRef, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom';
import CloseCreateAccnt from '../../components/common/CloseCreateAccnt';
import InputVerification from '../../components/common/InputVerification';
import HeaderBg from '../../components/layouts/HeaderBg'
import { ROUTES } from '../../const/routeNames';
import { ContextMain } from '../../context/store';
import './Verification.scss';

interface Props {
    
}

const Verification = (props: Props) => {
    
    const TITLE_NAME = ROUTES.VERIFICATION.title;

    const [ state, dispatch ] = React.useContext(ContextMain)
    const [isValid, setisValid] = useState(false);
    const [code, setCode] = useState<any>(0);

    const navigate = useNavigate();
    const clickContinue = () => {
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
                <div className='verification__text' >We've sent a 6-digit verification code to your phone </div>
                <div className='verification__type'> test@test.com</div>
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

