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
import Settings from "./views/Settings";

import "./styles.scss";
import DetailContacts from "./views/DetailContact";
import CreateContacts from "./views/CreateContact";
import EditContact from "./views/EditContact";
import Notifications from "./views/Notifications";
import DetailCollectible from "./views/DetailCollectible";
import CreateNTFs from "./views/CreateNTFs";
import axios from "axios";

const App = () => {
  const navigate = useNavigate();
  // TODO Access the token from the dispatch
  const accessToken = 'eyJraWQiOiJmdjZkSFwvQ05Bajk5bE10b2V2K2hrMFVBUWRZeGRyK2dlTGNJYWpqRTlCMD0iLCJhbGciOiJSUzI1NiJ9.eyJvcmlnaW5fanRpIjoiYTlmY2E4ZWEtNWY5MC00MGU2LTgwODMtZGQxZThjZmI0MGM4Iiwic3ViIjoiMjg2NDJhM2QtNWNiYy00ZTMxLWE5ZmEtMmM5MTg1YzNhZDdkIiwiZXZlbnRfaWQiOiIxNmQxNTIzMi04OTcyLTQ3NmYtYTM0Yi02NjE1NGNlODdjZmIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjQyMDk4MjYzLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9hSlUxRThUWVciLCJleHAiOjE2NDIxODQ2NjMsImlhdCI6MTY0MjA5ODI2MywianRpIjoiOWU1MmQzZTUtMmJlYS00NGRjLThjMmItMDllYzA5YzA1NTM3IiwiY2xpZW50X2lkIjoiMWg4ajM3ZW44ZXEwNGU0bnVsOGw3Z2U0YW4iLCJ1c2VybmFtZSI6InNlcmdpb2dhZ3Vlcm8ubmVhciJ9.7PStwOrFRa1ABeFK0tzBN15buBjeCJvjMi2551oLeF4tnlsczm4sIKpzfUXk7oMpH-0NLHMQrH-oZXFkEJuDYq1YQrVfjOzEiv3cc32E1e5mpbVVa6nY8pBBT19MIh7br2FzEa2SrUe64j2k2NnwBg3Wcq6MvLwC8EGj5oAlIeO1K4nnqUvOmsyjRZ6ZG6k1zHqflSxaR4jGo7uqbdXw5eg9BVB0D3BH6SJZI1FXbZGLDqkvWBGBjcoYVzz1WAUYUlkTL_cDrBwQvLnn5uHpTmxj1BGYXxe5RMq1VFIgvzP-dUHTnkwrsEiHFNGLjBnJo9gLb4Kqf7UGRheOklADrQ';
  
  axios.interceptors.request.use(
    config => {
        if (config && config.headers && accessToken) {
            config.headers['Authorization'] = 'Bearer ' + accessToken;
        }
        // config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        Promise.reject(error)
    });

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
            <Route path={ROUTES.DETAIL_CONTACT.url} element={<DetailContacts />} />
            <Route path={ROUTES.CREATE_CONTACT.url} element={<CreateContacts />} />
            <Route path={ROUTES.EDIT_CONTACT.url} element={<EditContact />} />
            <Route path={ROUTES.NOTIFICATION.url} element={<Notifications />} />
            <Route path={ROUTES.SETTINGS.url} element={<Settings />} />
            <Route path={ROUTES.DETAIL_COLLECTIBLE.url} element={<DetailCollectible />} />
            <Route path={ROUTES.CREATE_NFT.url} element={<CreateNTFs />} />
          </Routes>
        </Store>
      </QueryClientProvider>
    </div>
  );
};

export default App;
