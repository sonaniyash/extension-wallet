import AccountReducer from "./reducers/AccountReducer";
import LoginReducer from "./reducers/LoginReducer";
import AuthReducer from "./reducers/AuthReducer";
import MainReducer from "./reducers/MainReducer";
import { State } from "./store";

export const ReducerTypes = {
  Main: "MAIN",
  CreateAccount: "CREATE-ACCOUNT",
  Login: "LOGIN",
  Auth: "AUTH",
};

const Reducer = (state: State, action: any) => {
  switch (action.reducer) {
    case ReducerTypes.CreateAccount:
      return AccountReducer(state, action);
    case ReducerTypes.Login:
      return LoginReducer(state, action);
    case ReducerTypes.Auth:
      return AuthReducer(state, action);
    default:
      return MainReducer(state, action);
  }
};

export default Reducer;
