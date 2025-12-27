import { FaGraduationCap, FaLink, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>
            <FaGraduationCap style={styles.icon} /> EduLoan
          </h4>
          <p style={styles.description}>Empowering education through accessible financing solutions.</p>
        </div>
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>
            <FaLink style={styles.icon} /> Quick Links
          </h4>
          <ul style={styles.links}>
            <li><a href="/about" style={styles.link}>About Us</a></li>
            <li><a href="/contact" style={styles.link}>Contact</a></li>
            <li><a href="/apply-loan" style={styles.link}>Apply Now</a></li>
          </ul>
        </div>
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>
            <FaPhone style={styles.icon} /> Support
          </h4>
          <p style={styles.contact}>support@eduloan.com</p>
          <p style={styles.contact}>+91 98765 43210</p>
          <p style={styles.contact}>Mon-Fri: 9AM-6PM IST</p>
        </div>
      </div>
      <div style={styles.bottom}>
        <p style={styles.copyright}>© 2025 Education Loan Tracking System. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    color: "white",
    marginTop: "40px",
    boxShadow: "0 -4px 20px rgba(0,0,0,0.3)",
    position: "relative",
    overflow: "hidden",
  },
  content: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    position: "relative",
    zIndex: 1,
  },
  section: {
    display: "flex",
    flexDirection: "column",
  },
  sectionTitle: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#ffffff",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
  icon: {
    marginRight: "10px",
    color: "#ffd700",
    fontSize: "1.5rem",
  },
  description: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#e0e0e0",
    margin: 0,
  },
  links: {
    listStyle: "none",
    padding: 0,
    margin: "10px 0",
  },
  link: {
    color: "#b0c4de",
    textDecoration: "none",
    fontSize: "1rem",
    marginBottom: "8px",
    display: "inline-block",
  },
  contact: {
    fontSize: "0.95rem",
    lineHeight: "1.5",
    color: "#e0e0e0",
    margin: "5px 0",
  },
  bottom: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  copyright: {
    margin: 0,
    fontSize: "0.9rem",
    color: "#cccccc",
  },
};

export default Footer;
