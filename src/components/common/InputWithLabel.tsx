import React, { ReactElement } from 'react'
import './InputWithLabel.scss'

interface Props {
    label: string
}

export default function InputWithLabel({ label }: Props): ReactElement {
    return (
        <span className="input-with-label">
            <div>{label}</div>
            <input type="text" />

        </span>
    )
}
