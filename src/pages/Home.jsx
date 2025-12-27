import { FaRocket, FaChartLine, FaShieldAlt, FaUsers, FaBook, FaCalculator } from 'react-icons/fa';

function Home() {
  return (
    <div style={styles.container}>
      {/* Detached Welcome Box */}
      <div style={styles.welcomeBox}>
        <div style={styles.welcomeContent}>
          <h2 style={styles.welcomeTitle}>Welcome to EduLoan</h2>
          <p style={styles.welcomeText}>
            Your trusted partner in education financing. Track, manage, and repay your loans with ease.
          </p>
          <div style={styles.welcomeStats}>
            <div style={styles.stat}>
              <span style={styles.statNumber}>10,000+</span>
              <span style={styles.statLabel}>Students Served</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>₹500Cr+</span>
              <span style={styles.statLabel}>Loans Disbursed</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>95%</span>
              <span style={styles.statLabel}>Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Education Loan Tracking System
        </h1>
        <p style={styles.heroSubtitle}>
          This platform helps students track education loan applications,
          repayments, and outstanding balances in a transparent manner.
        </p>
        <div style={styles.heroButtons}>
          <button style={styles.primaryBtn}>Get Started</button>
          <button style={styles.secondaryBtn}>Learn More</button>
        </div>
      </div>

      <div style={styles.features}>
        <h2 style={styles.sectionTitle}>Why Choose EduLoan?</h2>
        <div style={styles.featuresGrid}>
          <div style={styles.feature}>
            <h3>Easy Applications</h3>
            <p>Submit loan applications with simple forms and track status in real-time.</p>
          </div>
          <div style={styles.feature}>
            <h3>Smart Tracking</h3>
            <p>Monitor repayments, interest rates, and due dates with interactive dashboards.</p>
          </div>
          <div style={styles.feature}>
            <h3>Secure & Reliable</h3>
            <p>Your financial data is protected with industry-standard security measures.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
  },
  welcomeBox: {
    backgroundColor: "#9f7aea",
    color: "white",
    padding: "40px 30px",
    marginBottom: "40px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  welcomeContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  welcomeTitle: {
    fontSize: "2.2rem",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  welcomeText: {
    fontSize: "1.1rem",
    marginBottom: "30px",
    opacity: 0.9,
  },
  welcomeStats: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
  },
  stat: {
    textAlign: "center",
  },
  statNumber: {
    display: "block",
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "white",
  },
  statLabel: {
    fontSize: "0.9rem",
    opacity: 0.8,
  },
  hero: {
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "80px 30px",
    backgroundColor: "#4a5568",
    color: "white",
    borderRadius: "20px",
  },
  heroTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  heroSubtitle: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    marginBottom: "30px",
  },
  heroButtons: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  },
  primaryBtn: {
    backgroundColor: "#9f7aea",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "6px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  secondaryBtn: {
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid white",
    padding: "12px 24px",
    borderRadius: "6px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  features: {
    maxWidth: "1000px",
    margin: "60px auto",
    padding: "0 30px",
  },
  sectionTitle: {
    fontSize: "2rem",
    textAlign: "center",
    marginBottom: "40px",
    color: "#4a5568",
    fontWeight: "bold",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  feature: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    border: "1px solid #e2e8f0",
  },
};

export default Home;
