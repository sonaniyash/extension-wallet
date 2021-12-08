import React, { useState, useRef, useEffect  } from 'react'
import HeaderBg from '../../components/layouts/HeaderBg'
import './Home.scss';

interface Props {
    
}

const Home = (props: Props) => {

    const ERROR_MESSAGE_EMAIL = 'Please enter a valid email!';
    enum LOGIN_TYPE  {
        EMAIL,
        PHONE
    }

    const [isValid, setIsValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [typeLogin, setTypeLogin] = useState(LOGIN_TYPE.EMAIL);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [inputSt, setInput] = useState<any | null>('');
    const inputRef = useRef<any | null>(inputSt);
    const emailRegex = /\S+@\S+\.\S+/;

    const onChangeInput= (e: any) => {
        const input = e.target.value;
        setErrorMessage('');
        setInput(input);
        checkTypeValidation(typeLogin);
        setButtonDisabled(e.currentTarget.value === '');
    }

    const checkTypeValidation = (type: number) => {
        switch (type) {
            case LOGIN_TYPE.EMAIL:
                validateEmail(inputSt);
                break;
            case LOGIN_TYPE.PHONE:
                validatePhone(inputSt);
                break;
            default:
                break;
        }
    }

    const validateEmail = (email: string)=> {
        if (emailRegex.test(email)) {
            setIsValid(true);
        } else {
            setIsValid(false);
            setErrorMessage(ERROR_MESSAGE_EMAIL);
        }
    }

    const validatePhone = (phone: string)=> {
            setIsValid(true);
    }

    const clickOption = (type: number)=> {
        setErrorMessage('');
        setInput('');
        setTypeLogin(type);
        checkTypeValidation(type);
    }

    useEffect(()=>{
        setInput('e.currentTarget.value');
        setButtonDisabled(true);
    }, [])


    return (
        <main>
            <HeaderBg/>
            <section className="home">
                <div className="home__selectors"> 
                {}
                    <a className={ (typeLogin === LOGIN_TYPE.EMAIL ? ' --btn-active' : '') + " home__selectors__button"} onClick={()=> { clickOption(LOGIN_TYPE.EMAIL) }}>Email</a>
                    <a className={ (typeLogin === LOGIN_TYPE.PHONE ? ' --btn-active' : '') + " home__selectors__button"} onClick={()=> { clickOption(LOGIN_TYPE.PHONE)  }}>Phone</a>
                </div>
                <input type="text"  ref={inputRef } onChange={(val)=> onChangeInput(val)} placeholder={typeLogin === LOGIN_TYPE.PHONE ? "Ex. (373) 378 8383" : "jhondoe@gmail.com"} className="home__selectors__input" />
                { !isValid ? ( <p className='error-text'> {errorMessage}</p> ) : ''}
                <button disabled={ buttonDisabled || !isValid } className="button home__button" >Continue</button>
                <p>by clicking continue you must agree to near labs <a> Terms & Conditions</a>  ans <a> Privacy Policy</a></p>
                <span className="home__question"> Already have NEAR account?</span>
                <button className="button btn-dark home__button" >Login with NEAR</button>
            </section>
        </main>
    )
}

export default Home

