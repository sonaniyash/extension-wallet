import { State } from "../store";

const LoginReducer = (state: State, action: any) => {
  switch (action.type) {
    case "CREATE_SESSION":
      return {
        ...state,
        token: action.payload.token,
        walletName: action.payload.walletName,
      };
    case "REMOVE_SESSION":
      return {
        ...state,
        token: "",
        walletName: "",
      };
    default:
      return state;
  }
};

export default LoginReducer;
