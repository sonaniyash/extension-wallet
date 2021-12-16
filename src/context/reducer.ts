import { State } from "./store";

const Reducer = (state: State, action: any) => {

    switch (action.type) {
        case 'SET_UI':
            return {
                ...state,
                activePage: action.payload
            };
        case 'SET_CREATE_ACCT':
            return {
                ...state,
                createAccountData: action.payload
            };
        case 'CLEAR_CREATE_ACCT':
            return {
                ...state,
                createAccountData: {
                    email: '',
                    phone: '',
                    type: 0,
                    firstName: '',
                    nearAccountId: '',
                    phrase: '',
                    status: 0,
                }
            };
        case 'SET_ACCT':
            return {
                ...state,
                account: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;