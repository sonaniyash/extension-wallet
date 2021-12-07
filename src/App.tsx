import * as React from "react";
import './App.scss';
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Store from "./context/store";

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
        </Routes>     
      </Store>
    </div>
  );
};

export default App;
