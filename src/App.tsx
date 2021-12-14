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

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <div className="App">
      <Store>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/secure' element={<Secure />} />
          <Route path='/createAccount' element={<CreateAccount />} />
          <Route path='/verification' element={<Verification />} />
          <Route path='/secure' element={<Secure />} />
        </Routes>     
      </Store>
    </div>
  );
};

export default App;
