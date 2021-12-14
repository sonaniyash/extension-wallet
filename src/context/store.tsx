import React, {createContext, useReducer} from "react";
import Reducer from './index.reducer'


const EmptyState: any = {
    account: [],
    ui: '',
    error: null
};
const initialState = JSON.parse(localStorage.getItem('state') ? localStorage.getItem('state') : EmptyState);


const Store = ({children}: any) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <ContextMain.Provider value={[state, dispatch]}>
            {children}
        </ContextMain.Provider>
    )
};

export const ContextMain = createContext(initialState);
export default Store;