import { useState } from "react";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";
const Register = ({ token, setToken }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const token = await registerUser(username, password);
    console.log(token);
    setToken(token);
    localStorage.setItem("token", token);
    navigate("/");
  }

  if (token) {
    navigate("/");
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="passsword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Register;
