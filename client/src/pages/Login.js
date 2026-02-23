import { useState } from "react";
import API from "../services/api";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/auth/login", form);
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
  <div className="auth-bg">
    <div className="auth-overlay">
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "rgba(111, 105, 105, 0.73)" }}>
        Welcome Back
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button type="submit">Login</button>
           <div style={{marginTop: '10px'}}>
        <span style={{color: "rgba(111, 105, 105, 0.73)"}}>Don't have account? </span>
         <Link
          to="/signup"
          style={{
            color: "#4c3cff",
            fontWeight: "500",
            textDecoration: "none",
            cursor: "pointer"
          }}
  >
    Signup
  </Link>
      </div>
      </form>
    </div>
  </div>
);
}
export default Login;
