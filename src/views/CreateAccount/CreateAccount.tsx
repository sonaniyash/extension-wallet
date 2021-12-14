import React from 'react'
import InputWithLabel from '../../components/common/InputWithLabel';
import HeaderBg from '../../components/layouts/HeaderBg'
import './CreateAccount.scss';
import { useNavigate } from 'react-router-dom';

interface Props {

}
const navigate = useNavigate();

const clickContinue = () => {
    navigate('/secure');
}

const CreateAccount = (props: Props) => {
    return (
        <React.Fragment>
            <HeaderBg>
                <p> Create NEAR account </p>
            </HeaderBg>
            <section className="createAccount">
                <p> Enter an Account ID to use with your NEAR account. Your Account ID will be used for all NEAR operations, including sending and receiving assets.</p>
                <InputWithLabel label="Full Name" />
                <InputWithLabel label="Account ID" />
                <button className="button createAccount__button btn-dark" onClick={clickContinue}>Continue</button>
                <p>by clicking continue you must agree to near labs <a> Terms & Conditions</a>  ans <a> Privacy Policy</a></p>
            </section>
            <section className="createAccount__after">
                <span className="createAccount__question"> Already have NEAR account?</span>
                <button className="button btn-dark createAccount__button" >Login with NEAR</button>

            </section>
        </React.Fragment>
    )
}

export default CreateAccount;
