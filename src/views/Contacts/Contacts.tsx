import React, { useEffect, useState } from 'react'
import HeaderBg from '../../components/layouts/HeaderBg'
import './Contacts.scss';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../const/routeNames';
import { ContextMain } from '../../context/store';
import { ReducerTypes } from '../../context/reducer';
import SelectAccountBtn from '../../components/SelectAccountBtn/SelectAccountBtn';
import { TEST_CONTACTS } from './ContactTestData';
import ContactItem from '../../components/ContactItem/ContactItem';

interface Props {

}

const Contacts = (props: Props) => {
    const navigate = useNavigate();
    const [, dispatch] = React.useContext(ContextMain);
    const [contacts, setContacts] = useState(TEST_CONTACTS);

    const back = ()=> {
        navigate(ROUTES.DASHBOARD.url);
    }

    const selectContact = ()=> {}

    useEffect(() => {
        console.log("contacts",contacts)

        dispatch({ type: 'SET_UI', payload: ROUTES.CONTACTS.url, reducer: ReducerTypes.Main });
    }, [])



    return (
        <>
            <HeaderBg>
                <header className='header-dash'>
                    <a onClick={back}> 
                        <img src="./assets/back-icon.png" alt="" />
                    </a>
                    <a> 
                        <img src="./assets/home-icon.png" alt="" />
                    </a>
                    <SelectAccountBtn/>
                    <div>
                        <a> 
                            <img src="./assets/notification.png" alt="" />
                        </a>
                        <a> 
                            <img src="./assets/settings.png" alt="" />
                        </a>
                    </div>
                </header>
            </HeaderBg>
            <section className="contacts">
                <div className="contacts__search">
                    <input placeholder='Search Contact' className="contacts__search__input" type="search" id="search-contacts" />
                    <a className="contacts__search__add"><img src="./assets/plus.png" alt="" /></a>
                </div>
                <div className="contacts__list">
                    { 
                        contacts.map( (contact: any) => (<ContactItem key={contact.account} contact={contact} clickHandler={selectContact} />))
                    }
                </div>
            </section>
        </>
    )
}

export default Contacts;

