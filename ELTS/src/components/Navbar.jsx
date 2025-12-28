import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaGraduationCap, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

function Navbar() {
  const { isLoggedIn, role, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <FaGraduationCap style={styles.logoIcon} />
        <h3 style={styles.logoText}>EduLoan</h3>
      </div>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        {isLoggedIn && role === "student" && <Link to="/apply-loan" style={styles.link}>Apply Loan</Link>}

        {isLoggedIn && role === "student" && (
          <Link to="/student-dashboard" style={styles.link}>Dashboard</Link>
        )}

        {isLoggedIn && role === "admin" && (
          <Link to="/admin-dashboard" style={styles.link}>Admin Panel</Link>
        )}

        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>

      <div style={styles.authSection}>
        {isLoggedIn ? (
          <div style={styles.userInfo}>
            <span>Welcome, {user?.name}</span>
            <button onClick={handleLogout} style={styles.logoutBtn}>
              <FaSignOutAlt style={styles.btnIcon} />
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" style={styles.loginLink}>
            <FaSignInAlt style={styles.btnIcon} />
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
    padding: "15px 30px",
    backgroundColor: "#4a5568",
    color: "white",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logoIcon: {
    fontSize: "1.8rem",
    color: "#9f7aea",
  },
  logoText: {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    padding: "8px 16px",
    borderRadius: "6px",
    transition: "background-color 0.3s ease",
  },
  roleSwitcher: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  roleLabel: {
    fontSize: "0.9rem",
    fontWeight: "500",
  },
  roleButtons: {
    display: "flex",
    gap: "8px",
  },
  activeBtn: {
    backgroundColor: "#9f7aea",
    color: "white",
    padding: "8px 16px",
    border: "2px solid #9f7aea",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    transition: "all 0.3s ease",
  },
  inactiveBtn: {
    backgroundColor: "transparent",
    color: "white",
    padding: "8px 16px",
    border: "2px solid rgba(255,255,255,0.3)",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    transition: "all 0.3s ease",
  },
  btnIcon: {
    fontSize: "0.9rem",
  },
  authSection: {
    display: "flex",
    alignItems: "center",
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  logoutBtn: {
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid rgba(255,255,255,0.3)",
    borderRadius: "25px",
    padding: "8px 16px",
    cursor: "pointer",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    transition: "all 0.3s ease",
  },
  loginLink: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    padding: "8px 16px",
    borderRadius: "6px",
    backgroundColor: "#9f7aea",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    transition: "background-color 0.3s ease",
  },
};

export default Navbar;
