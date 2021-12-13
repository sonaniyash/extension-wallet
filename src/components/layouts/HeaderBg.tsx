import React, { Component } from 'react'
import './HeaderBg.scss';
interface Props {
    children: JSX.Element
}

const HeaderBg = (props: Props) => {
    return (
        <header className="header-bg">
            {props.children}
        </header>
    )
}

export default HeaderBg
