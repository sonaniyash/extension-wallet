import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <li>
        <NavLink to="/">Back Home </NavLink>
      </li>
    </div>
  );
};

export default Login;
