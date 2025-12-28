import { FaRocket, FaShieldAlt, FaUsers, FaChartLine, FaCreditCard, FaBalanceScale, FaCheckCircle, FaLightbulb, FaHandshake } from 'react-icons/fa';

function About() {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            <FaRocket style={styles.heroIcon} />
            About EduLoan
          </h1>
          <p style={styles.heroSubtitle}>
            The Education Loan Tracking System is a comprehensive platform designed to streamline the entire lifecycle of education loans,
            ensuring transparency, efficiency, and accessibility for both students and financial institutions.
          </p>
        </div>
        <div style={styles.heroStats}>
          <div style={styles.stat}>
            <span style={styles.statNumber}>50K+</span>
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

      <div style={styles.features}>
        <h2 style={styles.sectionTitle}>
          <FaLightbulb style={styles.sectionIcon} />
          Our Features
        </h2>
        <div style={styles.featuresGrid}>
          <div style={styles.feature}>
            <div style={styles.featureIcon}>
              <FaCreditCard />
            </div>
            <h3>Loan Application Management</h3>
            <p>Students can easily submit detailed loan applications, capturing academic details, course information, and financial requirements.</p>
          </div>

          <div style={styles.feature}>
            <div style={styles.featureIcon}>
              <FaCheckCircle />
            </div>
            <h3>Approval & Disbursement</h3>
            <p>Streamlined approval process with automatic fund disbursement based on verified schedules and agreements.</p>
          </div>

          <div style={styles.feature}>
            <div style={styles.featureIcon}>
              <FaUsers />
            </div>
            <h3>Account Management</h3>
            <p>Comprehensive loan account creation with interest rates, tenure periods, and moratorium details.</p>
          </div>

          <div style={styles.feature}>
            <div style={styles.featureIcon}>
              <FaChartLine />
            </div>
            <h3>Repayment Scheduling</h3>
            <p>Automated generation of repayment schedules with clear EMI amounts and due dates after moratorium completion.</p>
          </div>

          <div style={styles.feature}>
            <div style={styles.featureIcon}>
              <FaBalanceScale />
            </div>
            <h3>Payment Tracking</h3>
            <p>Real-time tracking of repayments, overdue amounts, and partial payments with instant status updates.</p>
          </div>

          <div style={styles.feature}>
            <div style={styles.featureIcon}>
              <FaShieldAlt />
            </div>
            <h3>Balance Monitoring</h3>
            <p>Automatic calculation of outstanding balances, interest accrual, and real-time loan summaries.</p>
          </div>
        </div>
      </div>

      <div style={styles.objectives}>
        <h2 style={styles.sectionTitle}>
          <FaHandshake style={styles.sectionIcon} />
          Key Objectives
        </h2>
        <div style={styles.objectivesGrid}>
          <div style={styles.objective}>
            <FaCheckCircle style={styles.objectiveIcon} />
            <span>Improve transparency in education loan management processes</span>
          </div>
          <div style={styles.objective}>
            <FaCheckCircle style={styles.objectiveIcon} />
            <span>Simplify loan tracking and monitoring for students</span>
          </div>
          <div style={styles.objective}>
            <FaCheckCircle style={styles.objectiveIcon} />
            <span>Provide clear and accurate repayment information</span>
          </div>
          <div style={styles.objective}>
            <FaCheckCircle style={styles.objectiveIcon} />
            <span>Support role-based access for students and administrators</span>
          </div>
          <div style={styles.objective}>
            <FaCheckCircle style={styles.objectiveIcon} />
            <span>Ensure compliance with education loan regulations</span>
          </div>
          <div style={styles.objective}>
            <FaCheckCircle style={styles.objectiveIcon} />
            <span>Deliver a user-friendly and intuitive interface</span>
          </div>
        </div>
      </div>

      <div style={styles.mission}>
        <h2 style={styles.sectionTitle}>
          <FaHandshake style={styles.sectionIcon} />
          Our Mission
        </h2>
        <div style={styles.missionContent}>
          <div style={styles.missionText}>
            <p>
              To empower students across India by providing transparent, accessible, and efficient education loan management.
              We believe that financial barriers should never hinder educational aspirations, and our platform ensures that
              every student can focus on their studies while maintaining complete visibility into their loan journey.
            </p>
            <p>
              Through innovative technology and user-centric design, we bridge the gap between educational institutions,
              financial institutions, and students, creating a seamless ecosystem that supports academic excellence and
              financial responsibility.
            </p>
          </div>
          <div style={styles.missionStats}>
            <div style={styles.missionStat}>
              <span style={styles.missionStatNumber}>10,000+</span>
              <span style={styles.missionStatLabel}>Students Supported</span>
            </div>
            <div style={styles.missionStat}>
              <span style={styles.missionStatNumber}>500+</span>
              <span style={styles.missionStatLabel}>Partner Institutions</span>
            </div>
            <div style={styles.missionStat}>
              <span style={styles.missionStatNumber}>₹2.5Cr+</span>
              <span style={styles.missionStatLabel}>Loans Managed</span>
            </div>
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
  hero: {
    textAlign: "center",
    maxWidth: "800px",
    margin: "40px auto 0 auto",
    padding: "80px 30px",
    backgroundColor: "#4a5568",
    color: "white",
    borderRadius: "20px",
  },
  heroContent: {
    padding: "0 20px",
  },
  heroTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
  },
  heroIcon: {
    fontSize: "2rem",
    color: "#9f7aea",
  },
  heroSubtitle: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
  },
  heroStats: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "30px",
  },
  stat: {
    textAlign: "center",
  },
  statNumber: {
    display: "block",
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#9f7aea",
  },
  statLabel: {
    fontSize: "0.9rem",
    color: "#e2e8f0",
  },
  sectionTitle: {
    fontSize: "2rem",
    textAlign: "center",
    marginBottom: "40px",
    color: "#4a5568",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
  },
  sectionIcon: {
    fontSize: "1.8rem",
    color: "#9f7aea",
  },
  features: {
    maxWidth: "1000px",
    margin: "60px auto",
    padding: "0 30px",
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
  featureIcon: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#9f7aea",
    backgroundColor: "#f8fafc",
    padding: "15px",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px auto",
  },
  objectives: {
    maxWidth: "1000px",
    margin: "60px auto",
    padding: "60px 30px",
    backgroundColor: "#f8fafc",
  },
  objectivesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "20px",
  },
  objective: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    border: "1px solid #e2e8f0",
  },
  objectiveIcon: {
    color: "#48bb78",
    fontSize: "1.2rem",
  },
  mission: {
    maxWidth: "1000px",
    margin: "60px auto",
    padding: "60px 30px",
    backgroundColor: "#f8fafc",
  },
  missionContent: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center",
  },
  missionText: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#666",
  },
  missionStats: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
  },
  missionStat: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    border: "1px solid #e2e8f0",
  },
  missionStatNumber: {
    display: "block",
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#9f7aea",
    marginBottom: "5px",
  },
  missionStatLabel: {
    fontSize: "0.9rem",
    color: "#666",
  },
};

export default About;
