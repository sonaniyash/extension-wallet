import React, {createContext, useReducer} from "react";
import Reducer from './index.reducer'


const initialState: any = {
    ui: '',
    error: null
};

const Store = ({children}: any) => {
    const localStorageState =  localStorage.getItem('state');
    const [state, dispatch] = useReducer(Reducer, localStorageState ? JSON.parse(localStorageState) :  initialState);
    localStorage.setItem('state',JSON.stringify(state));

    return (
        <ContextMain.Provider value={[state, dispatch]}>
            {children}
        </ContextMain.Provider>
    )
};

export const ContextMain = createContext(initialState);
export default Store;