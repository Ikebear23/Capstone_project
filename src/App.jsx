import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Productpage from "./components/pages/productpage.jsx";
import Navbar from "./components/pages/Navbar.jsx";
import Login from "./components/pages/loginform";
//import Register from "./components/userfunctions/signupform";
import Cart from "./components/pages/checkout";
import Home from "./components/pages/Home";
import Profile from "./components/pages/profile";
function App() {
  const [token, setToken] = useState("");
  //try to get users here so soon as the page loads i can be ready to log in
  //best to set variables that will be consistently used in parent components
  return (
    <div>
      <>
        <Navbar token={token} setToken={setToken} />
      </>
      <>
        <Routes>
          <Route
            path="/profile"
            element={<Profile token={token} setToken={setToken} />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<h1>Register</h1>} />
          <Route
            path="/login"
            element={<Login token={token} setToken={setToken} />}
          />
        </Routes>
      </>
      <>
        <Productpage />
      </>
    </div>
  );
}

export default App;
