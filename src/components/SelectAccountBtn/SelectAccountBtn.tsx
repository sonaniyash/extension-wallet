import React, { MouseEventHandler, useState } from 'react'
import { useNavigate } from 'react-router';
import { CSSTransition } from 'react-transition-group';
import { ContextMain } from '../../context/store';
import './SelectAccountBtn.scss';
import Modal from 'react-modal';
import { ROUTES } from '../../const/routeNames';

interface Props {
}

interface Accounts {
    image: string,
    name: string,
    ammount: number,
    selected: boolean
}

Modal.setAppElement('#popup');

const SelectAccountBtn = (props : Props) => {
    const TEST_ACCOUNTS = [
        {   
            image: './assets/account-1.png',
            name: 'jhonsdoe.near',
            ammount: 0.13,
            selected: true
        },
        {   
            image: './assets/account-2.png',
            name: 'jhons.near',
            ammount: 2.24,
            selected: false
        },
        {   
            image: './assets/account-3.png',
            name: 'mikse.near',
            ammount: 3.33,
            selected: false
        },
        
    ]
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(51, 55, 59, 0.4)',
          },
      };
    
    const [ state, dispatch ] = React.useContext(ContextMain)
    const [accounts, setAccounts] = useState<Array<Accounts>>(TEST_ACCOUNTS)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const nav = useNavigate();
    const clickAccount = (e: any, accountName: any)=> {
        const newAct = accounts.map( (act)=>{
            act.selected = act.name === accountName ? true : false;
            return act;
        });

        setAccounts(newAct);
    }
    const openModal = () => {
        setIsOpen(!modalIsOpen);
    }
    const afterOpenModal = ()=> {

    }
    const closeModal = ()=> {
        setIsOpen(false);
    }
    const goToCreateNEAR = () => {
        nav(ROUTES.CREATE_ACCT.url);
    }
    const goToCreateHome = () => {
        nav(ROUTES.HOME.url);
    }

    return (
        <>
            <a className='select-act' onClick={openModal}>
                <img className='select-act__img' src="./assets/account-1.png" alt="" />
                <p className='select-act__name' > jhondoe.near </p>
                <img className='select-act__chevron' src="./assets/chevron-down.png" alt="" />                                            
            </a>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                className='modal-select-account'
                contentLabel="Example Modal"
                >
                <h2>My Accounts</h2>
                
                { 
                    accounts.map((account: Accounts)=> {
                        return  ( 
                            <a key={account.name} data-act={account.name} onClick={(e)=> clickAccount(e, account.name)} className="account-item">
                                <img className={`account-item__img  ${account.selected ? 'active' : ''}`} src={account.image} alt="" />
                                <div className="account-item__body">
                                    <div className="account-item__body__name">
                                        {account.name}
                                    </div>
                                    <div className="account-item__body__ammount"> {account.ammount}</div>
                                </div>
                                {
                                    account.selected === true ? 
                                        (<div className="account-item__check">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                                                <path d="M1.66663 5L5.66663 9L12.3333 1" stroke="#33373B" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </div>) : ''
                                }
                            </a>
                        )
                    })
                }

                <div className="account-select-actions">
                    <a className="account-select-actions__link" onClick={goToCreateNEAR}><img src="./assets/create-act.png" alt="" />Create Account</a>
                    <a className="account-select-actions__link" onClick={goToCreateHome}><img src="./assets/import-act.png" alt="" />Import Account</a>

                </div>
            </Modal>
        </>
    )
}

export default SelectAccountBtn
