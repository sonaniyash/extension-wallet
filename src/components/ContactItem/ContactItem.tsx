import React from 'react'
import './ContactItem.scss';

export interface Contact {
    firstName: string,
    lastName: string,
    imgUrl: string,
    account: string
}

interface Props {
    contact: Contact,
    clickHandler: any
}

const ContactItem = ({ contact, clickHandler } : Props) => {

    return (
        <>
            <a  className='contact' onClick={clickHandler}>
                <div className="contact__img">
                    {contact.firstName.substring(0,1).toUpperCase() + contact.lastName.substring(0,1).toUpperCase() }
                </div>
                <div className="contact__body">
                    <span className="contact__body__title">{contact.firstName} {contact.lastName}</span>
                    <span className="contact__body__acct">{contact.account}</span>
                </div>
                <img className='contact__chevron' src="./assets/chevron-r-black.svg" alt="" />
            </a>
        </>
    )
}

export default ContactItem
