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

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)"
  },
  card: {
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(15px)",
    padding: "45px 35px",
    width: "100%",
    maxWidth: "380px",
    borderRadius: "18px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
    animation: "fadeIn 0.6s ease-in-out"
  },
  heading: {
    textAlign: "center",
    marginBottom: "25px",
    color: "white",
    fontWeight: "600",
    letterSpacing: "1px"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    marginBottom: "18px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    fontSize: "14px"
  },
  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "white",
    color: "#764ba2",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease"
  }
};

export default Login;