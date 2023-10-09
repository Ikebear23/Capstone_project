import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Productpage from "./components/pages/productpage.jsx";
import Navbar from "./components/pages/Navbar.jsx";
import Login from "./components/pages/loginform";
import Register from "./components/userfunctions/signupform";
import Cart from "./components/pages/checkout";
import Home from "./components/pages/Home";
function App() {
  const [token, setToken] = useState("");
  return (
    <div>
      <>
        <Navbar token={token} setToken={setToken} />
      </>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register setToken={setToken} />} />
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
