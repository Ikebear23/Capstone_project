import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ token, setToken }) => {
  function logout() {
    setToken(null);

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
