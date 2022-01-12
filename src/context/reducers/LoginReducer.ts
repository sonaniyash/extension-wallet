import { State } from "../store";

const LoginReducer = (state: State, action: any) => {
  switch (action.type) {
    case "SET_LOGIN_ACCOUNT":
      return {
        ...state,
        walletName: action.payload.walletName,
        type: action.payload.type,
      };
    case "CLEAR_LOGIN_ACCOUNT":
      return {
        ...state,
        walletName: "",
        type: "",
      };
    default:
      return state;
  }
};

export default LoginReducer;
