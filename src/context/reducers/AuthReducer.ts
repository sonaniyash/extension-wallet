import { State } from "../store";
import decode from 'jwt-decode'

const LoginReducer = (state: State, action: any) => {

  switch (action.type) {
    case "CREATE_SESSION":
      {
        const jwtdecoded = action.payload && decode(action.payload);
        return {
          ...state,
          account: jwtdecoded.near_api.user_info,
          token: action.payload,
        };
      }
     
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
