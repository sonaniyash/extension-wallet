import React, { createContext, useReducer } from "react";
import { CreateAccountData } from "./models";
import Reducer from "./reducer";

export interface State {
  activePage: string;
  account: any;
  createAccountData: CreateAccountData;
  error: any;
}

const initialState: State | any = {
  activePage: "",
  account: null,
  createAccountData: {
    email: "",
    phone: "",
    type: 0,
    firstName: "",
    nearAccountId: "",
    phrase: "",
    status: 0,
  },
  error: null,
};

const Store = ({ children }: any) => {
  const localStorageState = localStorage.getItem("state");
  const [state, dispatch] = useReducer(
    Reducer,
    localStorageState ? JSON.parse(localStorageState) : initialState
  );
  localStorage.setItem("state", JSON.stringify(state));
  console.log("state", state);
  return (
    <ContextMain.Provider value={[state, dispatch]}>
      {children}
    </ContextMain.Provider>
  );
};

export const ContextMain = createContext(initialState);
export default Store;
