import { useState } from "react";
import { loginUser } from "../../../api/authApi";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({
        username: username,
        password: password,
      });

      console.log("Login success:", data);
      navigate("/news");
    } catch (error) {
      console.log("Login failed");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Admin Login</h2>

        <div className="input-group">
          <label>Email</label>
          <input
            type="text"
            name="username"
            placeholder="Useremail"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="login-btn">Login</button>

      </form>
    </div>
  );
}

export default Login;
