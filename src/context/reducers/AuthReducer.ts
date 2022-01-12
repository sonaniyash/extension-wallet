import { State } from "../store";

const LoginReducer = (state: State, action: any) => {
  switch (action.type) {
    case "CREATE_SESSION":
      return {
        ...state,
        token: action.payload,
      };
    case "REMOVE_SESSION":
      return {
        ...state,
        token: "",
      };
    default:
      return state;
  }
};

export default LoginReducer;
