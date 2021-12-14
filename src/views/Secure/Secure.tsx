import React, { useState, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import HeaderBg from '../../components/layouts/HeaderBg'
import './Secure.scss';
import {isEmpty} from 'lodash';

const Home = ({}) => {
    interface Password {
        password: string;
        repeatPassword: string;
    }
    const ERROR_MESSAGE: any = {
        PASSWORD: '!'
    };

    const [isValid, setIsValid] = useState<boolean | null>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>('');
    const [buttonDisabled, setButtonDisabled] = useState<boolean | null>(false);
    const initialState: Password = {
        password: '',
        repeatPassword: ''
    };

    const onChangeCb = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMessage('');
        setButtonDisabled(true);
        validateForm();
    }
    const validateForm = () => {
        const validform = !isEmpty(formState.password) && formState.password === formState.repeatPassword
        setIsValid(validform);
        setButtonDisabled(!validform);
        if (!validform) {
            setErrorMessage('The password confirmation does not match')
        }
    }
    const {formState, onChange} = useForm<Password>(onChangeCb, initialState)

   const navigate = useNavigate();

    const clickContinue = ()=> {
        navigate('/seed-phrase');
    }

    return (
        <main>
            <form>
            <HeaderBg/>
            <section className="secure">
                <p className="secure__description">Keep your apps safe from other with access to your computer.</p>
                <label htmlFor="password" className="secure__label">Password</label>
                <input type="password" id='password' name="password" value={formState.password} onBlur={onChange} onChange={onChange} placeholder='' className="secure__selectors__input" />
                <label htmlFor="repeatPassword" className="secure__label">Repeat Password</label>
                <input type="password" id="password" name="repeatPassword" value={formState.repeatPassword} onBlur={onChange} onChange={onChange} placeholder='' className="secure__selectors__input" />
                { !isValid ? ( <p className='error-text'> {errorMessage}</p> ) : ''}
                <button disabled={ buttonDisabled || !isValid } className="button secure__button" onClick={clickContinue} >Continue</button>
                <p>by clicking continue you must agree to near labs <a> Terms & Conditions</a>  ans <a> Privacy Policy</a></p>
            </section>
            </form>
        </main>
    )
}

export default Home

