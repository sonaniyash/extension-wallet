import React, { ChangeEventHandler, ReactElement } from 'react'
import './InputWithLabel.scss'

interface Props {
    label: string,
    onChange?: ChangeEventHandler,
    className?: string
}

export default function InputWithLabel({ label, onChange, className }: Props): ReactElement {
    return (
        <span className={`input-with-label`} >
            <div>{label}</div>
            <input type="text" onChange={onChange} className={`${className}`} />
        </span>
    )
}
