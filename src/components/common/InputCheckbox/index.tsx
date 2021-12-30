import React from 'react';
import { CheckboxInputBox } from './style';

interface Props {
    id: string,
    value: any,
    onChangeHandler: any,
}

const CheckboxInput = ({id, value, onChangeHandler}: Props) => {
    return (
            <CheckboxInputBox
                type={"checkbox"}
                id={id}
                onChange={onChangeHandler}
                value={value}/>
    )
}

export default CheckboxInput
