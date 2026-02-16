import React, { useState } from "react";
import { loginUser } from "../../../services/authApi";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({
        email: email,
        password: password,
      });

      setErrors({});
      setMessage("");
      navigate("/admin/dashboard"); // redirect to admin dashboard
    } catch (error) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else if (error.response?.data?.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Login failed. Please try again.");
      }
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
          {errors.email && <p className="error-text">{errors.email[0]}</p>}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="error-text">{errors.password[0]}</p>
          )}
        </div>

        {message && <p className="error-text">{message}</p>}
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
