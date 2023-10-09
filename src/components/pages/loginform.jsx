import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a request body with the provided credentials
    const requestBody = {
      username: username,
      password: password,
    };

    try {
      // Send a POST request to the API to authenticate
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Authentication failed.");
      }

      // Parse the response to get the token
      const data = await response.json();
      setToken(data.token);
      navigate("/");
      const mytoken = data.token;
      console.log(mytoken, "token");
      setError("");
    } catch (err) {
      setToken("");
      setError("Authentication failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} target="/">
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {token && <p>Token: {username}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;

/*import { useState } from "react";
import { loginUser } from "../api";

const Login = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function submitForm(e) {
    e.preventDefault();
    const token = await loginUser(username, password);
    setToken(token);
    localStorage.setItem("token", token);
  }
  return (
    <div>
      <h1>login</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};
export default Login;*/
