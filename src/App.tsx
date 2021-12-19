import * as React from "react";
import './App.scss';
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './views/Home/Home';
import CreateAccount from './views/CreateAccount/CreateAccount';
import Login from './views/Login/Login';
import Store from "./context/store";
import Verification from "./views/Verification/Verification";
import Secure from './views/Secure/Secure';
import SeedPhrasePage from "./views/SeedPhrase/SeedPhraseCreation";
import { ROUTES } from "./const/routeNames";
import Dashboard from "./views/Dashboard/Dashboard";
import Unlock from "./views/Unlock/Unlock";

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    navigate(ROUTES.HOME.url);
  }, []);

  return (
    <div className="App">
      <Store>
        <Routes>
          <Route path={ROUTES.HOME.url} element={<Home />} />
          <Route path={ROUTES.CREATE_ACCT.url} element={<CreateAccount />} />
          <Route path={ROUTES.VERIFICATION.url} element={<Verification />} />
          <Route path={ROUTES.SECURE.url} element={<Secure />} />
          <Route path={ROUTES.SEED_PHRASE.url} element={<SeedPhrasePage />} />
          <Route path={ROUTES.DASHBOARD.url} element={<Dashboard />} />
          <Route path={ROUTES.UNLOCK.url} element={<Unlock />} />
        </Routes>
      </Store>
    </div>
  );
};

export default App;
