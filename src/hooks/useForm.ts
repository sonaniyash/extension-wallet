import { useState } from "react";

export const useForm = <T>(callback: any, initialState:T) => {
    const [formState, setFormState] = useState(initialState);

    // onChange
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
        callback();
    };

    // onPaste
    // const onPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    //     // ToDo: sanitize
    //     setFormState({ ...formState, [event.target.]: event.clipboardData.getData('Text') });
    //     callback();
    // };
    return {
        formState,
        onChange,
        // onPaste
    }
};

  