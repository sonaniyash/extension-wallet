import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import HeaderBg from '../../components/layouts/HeaderBg'
import './Home.scss';

interface Props {

}

const Home = (props: Props) => {

    const ERROR_MESSAGE: any = {
        EMAIL: 'Please enter a valid email!',
        PHONE: 'Please enter a valid phone number!'
    };

    enum LOGIN_TYPE {
        EMAIL,
        PHONE
    }

    const [isValid, setIsValid] = useState<boolean | null>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>('');
    const [typeLogin, setTypeLogin] = useState<any | null>(LOGIN_TYPE.EMAIL);
    const [buttonDisabled, setButtonDisabled] = useState<boolean | null>(false);
    const [inputSt, setInput] = useState<string>('');
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

    const onChangeInput = (e: any) => {
        const input = e.target.value;
        setErrorMessage('');
        setInput(input);
        checkTypeValidation(typeLogin);
        setButtonDisabled(e.currentTarget.value === '');
    }

    const checkTypeValidation = (type: number) => {
        switch (type) {
            case LOGIN_TYPE.EMAIL:
                emailRegex.test(inputSt) ? setIsValid(true) : setIsValid(false)
                break;
            case LOGIN_TYPE.PHONE:
                phoneRegex.test(inputSt) ? setIsValid(true) : setIsValid(false)
                break;
        }

        if (!isValid) {
            setErrorMessage(ERROR_MESSAGE[LOGIN_TYPE[type]]);
        }
    }

    const clickOption = (type: number) => {
        setErrorMessage('');
        setInput('');
        setTypeLogin(type);
        checkTypeValidation(type);
    }

    useEffect(() => {
        setInput('');
        setButtonDisabled(true);
    }, [])

    const navigate = useNavigate();

    const clickContinue = () => {
        navigate('/verification');
    }

    return (
        <main>
            <HeaderBg>
                <img className="header-bg__logo" src='./assets/logo.png' />
            </HeaderBg>
            <section className="home">
                <div className="home__selectors"> 
                    <a className={ (typeLogin === LOGIN_TYPE.EMAIL ? ' --btn-active' : '') + " home__selectors__button"} onClick={()=> { clickOption(LOGIN_TYPE.EMAIL) }}>Email</a>
                    <a className={ (typeLogin === LOGIN_TYPE.PHONE ? ' --btn-active' : '') + " home__selectors__button"} onClick={()=> { clickOption(LOGIN_TYPE.PHONE)  }}>Phone</a>
                </div>
                <input type="text" value={inputSt} onPaste={onChangeInput} onBlur={onChangeInput} onChange={onChangeInput} placeholder={typeLogin === LOGIN_TYPE.PHONE ? "Ex. (373) 378 8383" : "jhondoe@gmail.com"} className="home__selectors__input" />
                {!isValid ? (<p className='error-text'> {errorMessage}</p>) : ''}
                <button disabled={buttonDisabled || !isValid} className="button home__button" onClick={clickContinue} >Continue</button>
                <p>by clicking continue you must agree to near labs <a> Terms & Conditions</a>  ans <a> Privacy Policy</a></p>
                <span className="home__question"> Already have NEAR account?</span>
                <button className="button btn-dark home__button" >Login with NEAR</button>
            </section>
        </main>
    )
}

export default Home

