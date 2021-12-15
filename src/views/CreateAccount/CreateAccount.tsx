import React, { useState } from 'react'
import InputWithLabel from '../../components/common/InputWithLabel';
import HeaderBg from '../../components/layouts/HeaderBg'
import './CreateAccount.scss';
import { useNavigate } from 'react-router-dom';

interface Props {

}

const CreateAccount = (props: Props) => {
    const navigate = useNavigate();

    const clickContinue = () => {
        navigate('/secure');
    }
    const [wrongAccount, setWrongAccount] = useState(false);
    const [nameAccount, setNameAccount] = useState('')

    const onChangeIDHandler = ((e: React.ChangeEvent<HTMLInputElement>): void => {
        //in this point, just need to call API and check if 
        //e.currentTarget.value exist as account
        if (e.currentTarget.value == "fede") {
            setWrongAccount(true);
        } else {
            setWrongAccount(false);
        }
    })
    const onChangeNameHandler = ((e: React.ChangeEvent<HTMLInputElement>): void => {
        setNameAccount(e.currentTarget.value);
    })

    return (
        <React.Fragment>
            <HeaderBg>
                <p> Create NEAR account </p>
            </HeaderBg>
            <section className="createAccount">
                <p> Enter an Account ID to use with your NEAR account. Your Account ID will be used for all NEAR operations, including sending and receiving assets.</p>
                <InputWithLabel label="Full Name" onChange={onChangeNameHandler} />
                <div className='accountId_label'>Account ID</div>
                <div className="accountId_after">
                    <input className={`accountId_input ${wrongAccount ? 'wrong' : ''}`} onChange={onChangeIDHandler} />
                </div>
                <button className="button createAccount__button btn-dark" onClick={clickContinue}>Continue</button>
                <p className='conditions'>By creating a NEAR account, you agree to the NEAR <br /> Wallet <a>Terms of Service</a> and<a> Privacy Policy</a></p>
            </section>
            <section className="createAccount__after">
                <span className="createAccount__question"> Already have NEAR account? {nameAccount}</span>
                <button className="button btn-dark createAccount__button" >Login with NEAR</button>

            </section>
        </React.Fragment>
    )
}

export default CreateAccount;
