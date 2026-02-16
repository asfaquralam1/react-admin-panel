import React, { useState } from "react";
import { loginUser } from "../../../services/authApi";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({
        email: email,
        password: password,
      });

      console.log("Login success:", data);
      navigate("/admin/dashboard"); // redirect to admin dashboard
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
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
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
