import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ token, setToken }) => {
  function logout() {
    setToken(null);
    // using the local storage API is a great idea! One way to make this easier would be to 
    // write a function that sets/removes the token from localStorage and sets the state - that way, you make sure you have correct user/token. 
    localStorage.removeItem("token");
  }
  return (
    <>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        {token && (
          <li>
            <Link to="/cart"> Cart </Link>
          </li>
        )}
        {token && (
          <li>
            <Link to="/checkout"> Checkout </Link>
          </li>
        )}
        {!token && (
          <li>
            <Link to="/register"> Register </Link>
          </li>
        )}
        {!token && (
          <li>
            <Link to="/login"> Login </Link>
          </li>
        )}
        {token && (
          <li>
            <Link to="/profile"> Profile </Link>
          </li>
        )}
        {token && (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        )}
      </ul>
    </>
  );
};
export default Navbar;
