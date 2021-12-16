import React, { useEffect, useState } from 'react'
import InputWithLabel from '../../components/common/InputWithLabel';
import HeaderBg from '../../components/layouts/HeaderBg'
import './CreateAccount.scss';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../../components/common/ProgressBar';
import CloseCreateAccnt from '../../components/common/CloseCreateAccnt';
import { isEmpty } from 'lodash';
import { stringify } from 'querystring';
import { ROUTES } from '../../const/routeNames';
import { ContextMain } from '../../context/store';
import { CreateAccountData, STATUS_CREATE_ACCT } from '../../context/models';

interface Props {

}

const CreateAccount = (props: Props) => {
    const navigate = useNavigate();
    const [ state, dispatch ] = React.useContext(ContextMain)

    const clickContinue = () => {
        let data: CreateAccountData = state;
        data.firstName = nameAccount;
        data.nearAccountId = nameAccountID;
        dispatch({type: 'SET_CREATE_ACCT', payload: data});
        navigate('/secure');
    }
    
    useEffect(()=>{
        dispatch({type: 'SET_UI', payload: ROUTES.CREATE_ACCT.url});
    }, [])

    const [wrongAccount, setWrongAccount] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
    const [nameAccount, setNameAccount] = useState('')
    const [nameAccountID, setNameAccountID] = useState('')

    const validateForm = () => {
        const validform = nameAccount.length > 0 && nameAccountID.length > 0;
        setButtonDisabled(!validform);
    }

    const onChangeIDHandler = ((e: React.ChangeEvent<HTMLInputElement>) => {
        //in this point, just need to call API and check if 
        //e.currentTarget.value exist as account
        if (e.currentTarget.value == "test") {
            setWrongAccount(true);
        } else {
            setWrongAccount(false);
        }
        setNameAccountID(e.currentTarget.value);
        validateForm();
    })
    const onChangeNameHandler = ((e: React.ChangeEvent<HTMLInputElement>): void => {
        setNameAccount(e.currentTarget.value);
        validateForm();
    })

    return (
        <React.Fragment>
            <HeaderBg>
                <>
                    <p> Create NEAR account </p>
                    <CloseCreateAccnt />
                </>
            </HeaderBg>
            <ProgressBar percentage={30} />
            <section className="createAccount">
                <p> Enter an Account ID to use with your NEAR account. Your Account ID will be used for all NEAR operations, including sending and receiving assets.</p>
                <InputWithLabel label="Full Name" onChange={onChangeNameHandler} />
                <div className="accountId_after">
                    <label className='accountId_label'>Account ID</label>
                    <input className={`accountId_input ${wrongAccount ? 'wrong' : ''}`} onChange={onChangeIDHandler} />
                </div>
                <button disabled={buttonDisabled || wrongAccount} className="button createAccount__button" onClick={clickContinue}>Continue</button>
                <p className='conditions'>By creating a NEAR account, you agree to the NEAR <br /> Wallet <a>Terms of Service</a> and<a> Privacy Policy</a></p>
            </section>
            <section className="createAccount__after">
                <span className="createAccount__question"> Already have NEAR account?</span>
                <button className="button createAccount__button btn-dark" >Login with NEAR</button>

            </section>
        </React.Fragment>
    )
}

export default CreateAccount;
function dispatch(arg0: { type: string; payload: any; }) {
    throw new Error('Function not implemented.');
}

