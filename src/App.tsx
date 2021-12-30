import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./views/Home";
import CreateAccount from "./views/CreateAccount";
import Store from "./context/store";
import Verification from "./views/Verification";
import Secure from "./views/Secure";
import { ROUTES } from "./const/routeNames";
import Dashboard from "./views/Dashboard";
import Unlock from "./views/Unlock";
import Contacts from "./views/Contacts";

import "./styles.scss";
import DetailContacts from "./views/DetailContact";
import CreateContacts from "./views/CreateContact";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(ROUTES.HOME.url);
  }, []);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: true,
        refetchOnWindowFocus: true,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={queryClient} contextSharing>
        <Store>
          <Routes>
            <Route path={ROUTES.HOME.url} element={<Home />} />
            <Route path={ROUTES.CREATE_ACCT.url} element={<CreateAccount />} />
            <Route path={ROUTES.VERIFICATION.url} element={<Verification />} />
            <Route path={ROUTES.SECURE.url} element={<Secure />} />
            {/* <Route path={ROUTES. SEED_PHRASE.url} element={<SeedPhrasePage />} /> */}
            <Route path={ROUTES.DASHBOARD.url} element={<Dashboard />} />
            <Route path={ROUTES.UNLOCK.url} element={<Unlock />} />
            <Route path={ROUTES.CONTACTS.url} element={<Contacts />} />
            <Route path={ROUTES.DETAIL_CONTACT.url} element={<DetailContacts/>} />
            <Route path={ROUTES.CREATE_CONTACT.url} element={<CreateContacts/>} />
          </Routes>
        </Store>
      </QueryClientProvider>
    </div>
  );
};

export default App;
