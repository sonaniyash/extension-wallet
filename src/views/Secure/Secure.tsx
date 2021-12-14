import React, { useState, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import HeaderBg from '../../components/layouts/HeaderBg'
import './Secure.scss';
import {isEmpty} from 'lodash';
import { ROUTES } from '../../const/routeNames';
import { ContextMain } from '../../context/store';

const Secure = ({}) => {
    interface Password {
        password: string;
        repeatPassword: string;
    }
    const [ , dispatch ] = React.useContext(ContextMain)
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
        navigate(ROUTES.SEED_PHRASE.url);
    }
    useEffect(()=>{
        dispatch({type: 'SET_UI', payload: ROUTES.SECURE.url});
    }, [])

    return (
        <main>
            <form>
            <HeaderBg>
            <p className='header-title'>{ROUTES.SECURE.title}</p>
            </HeaderBg>
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

export default Secure

