import { useState } from "react";
import API from "../services/api";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/signup", form);
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Signup failed");
    }
  };

  return (
  <div className="auth-bg">
    <div className="auth-overlay">
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: 'rgba(111, 105, 105, 0.73)'}}>
        Create Account
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

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

        <button type="submit">Signup</button>
          <div style={{marginTop: '10px'}}>
        <span style={{color: "rgba(111, 105, 105, 0.73)"}}>Already Have Account ? </span>
         <Link
          to="/login"
          style={{
            color: "#4c3cff",
            fontWeight: "500",
            textDecoration: "none",
            cursor: "pointer"
          }}
  >
    Login
  </Link>
      </div>
      </form>
    </div>
  </div>
);
}

export default Signup;