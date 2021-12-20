import AccountReducer from "./reducers/AccountReducer";
import MainReducer from "./reducers/MainReducer";
import { State } from "./store";

export const ReducerTypes = {
    Main: 'MAIN',
    CreateAccount: 'CREATE-ACCOUNT'
}

const Reducer = (state: State, action: any) => {

    switch (action.reducer) {
        case ReducerTypes.CreateAccount:
            return AccountReducer(state,action);
        default:
            return MainReducer(state,action);
    }
};

export default Reducer;



