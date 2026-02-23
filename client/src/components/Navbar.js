// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <nav style={styles.nav}>
//       <h2 style={styles.logo}>MyBlog</h2>

//       <div style={styles.links}>
//         <Link to="/" style={styles.link}>Home</Link>

//         {token && (
//           <>
//             <Link to="/create" style={styles.link}>Create</Link>
//             <Link to="/dashboard" style={styles.link}>Dashboard</Link>
//             <button onClick={handleLogout} style={styles.button}>
//               Logout
//             </button>
//           </>
//         )}

//         {!token && (
//           <>
//             <Link to="/login" style={styles.link}>Login</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }

// const styles = {
//   nav: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "20px 60px",
//     background: "rgba(0,0,0,0.6)",
//     backdropFilter: "blur(10px)",
//     color: "white"
//   },
//   logo: {
//     fontWeight: "bold",
//     letterSpacing: "1px"
//   },
//   links: {
//     display: "flex",
//     gap: "25px",
//     alignItems: "center"
//   },
//   link: {
//     color: "white",
//     textDecoration: "none",
//     fontWeight: "500"
//   },
//   button: {
//     background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
//     border: "none",
//     padding: "7px 15px",
//     borderRadius: "20px",
//     color: "white",
//     cursor: "pointer"
//   }
// };

// export default Navbar;

import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyBlog</h2>

      <div style={styles.links}>
        <Link
          to="/"
          style={{
            ...styles.link,
            ...(isActive("/") && styles.activeLink)
          }}
        >
          Home
        </Link>

        {token && (
          <>
            <Link
              to="/create"
              style={{
                ...styles.link,
                ...(isActive("/create") && styles.activeLink)
              }}
            >
              Create
            </Link>

            <Link
              to="/dashboard"
              style={{
                ...styles.link,
                ...(isActive("/dashboard") && styles.activeLink)
              }}
            >
              Dashboard
            </Link>

            <button onClick={handleLogout} style={styles.button}>
              Logout
            </button>
          </>
        )}

        {!token && (
          <Link
            to="/login"
            style={{
              ...styles.link,
              ...(isActive("/login") && styles.activeLink)
            }}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(10px)",
    color: "white"
  },
  logo: {
    fontWeight: "bold",
    letterSpacing: "1px"
  },
  links: {
    display: "flex",
    gap: "25px",
    alignItems: "center"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    transition: "0.3s"
  },
  activeLink: {
    color: "#d458af",
    borderBottom: "2px solid #d458af",
    paddingBottom: "4px"
  },
  button: {
    background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
    border: "none",
    padding: "7px 15px",
    borderRadius: "20px",
    color: "white",
    cursor: "pointer"
  }
};

export default Navbar;