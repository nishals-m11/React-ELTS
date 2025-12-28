import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaComments, FaQuestionCircle, FaClock, FaUser, FaMoneyBillWave, FaCalculator, FaCreditCard } from 'react-icons/fa';

function Contact() {
  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            <FaComments style={styles.heroIcon} />
            Contact & Support
          </h1>
          <p style={styles.heroSubtitle}>
            We're here to help you with any questions regarding your education loan application, repayment schedule, or account management.
            Our dedicated support team ensures timely assistance and accurate information.
          </p>
        </div>
        <div style={styles.heroImage}>
          <div style={styles.supportStats}>
            <div style={styles.stat}>
              <FaClock style={styles.statIcon} />
              <div>
                <span style={styles.statNumber}>24/7</span>
                <span style={styles.statLabel}>Available</span>
              </div>
            </div>
            <div style={styles.stat}>
              <FaUser style={styles.statIcon} />
              <div>
                <span style={styles.statNumber}>50+</span>
                <span style={styles.statLabel}>Support Staff</span>
              </div>
            </div>
            <div style={styles.stat}>
              <FaComments style={styles.statIcon} />
              <div>
                <span style={styles.statNumber}>95%</span>
                <span style={styles.statLabel}>Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.contactGrid}>
        <div style={styles.contactCard}>
          <div style={styles.cardIcon}>
            <FaPhone />
          </div>
          <h3>Phone Support</h3>
          <div style={styles.contactDetails}>
            <p><strong>Primary:</strong> +91 98765 43210</p>
            <p><strong>Secondary:</strong> +91 98765 43211</p>
            <p><strong>Working Hours:</strong> Monday – Friday (9:00 AM – 6:00 PM IST)</p>
          </div>
        </div>

        <div style={styles.contactCard}>
          <div style={styles.cardIcon}>
            <FaEnvelope />
          </div>
          <h3>Email Support</h3>
          <div style={styles.contactDetails}>
            <p><strong>General Inquiries:</strong> support@eduloan.com</p>
            <p><strong>Technical Issues:</strong> tech@eduloan.com</p>
            <p><strong>Response Time:</strong> Within 24 hours</p>
          </div>
        </div>

        <div style={styles.contactCard}>
          <div style={styles.cardIcon}>
            <FaMapMarkerAlt />
          </div>
          <h3>Office Address</h3>
          <div style={styles.contactDetails}>
            <p>EduLoan Support Center</p>
            <p>123 Education Street</p>
            <p>Chennai, Tamil Nadu 600001</p>
            <p>India</p>
          </div>
        </div>

        <div style={styles.contactCard}>
          <div style={styles.cardIcon}>
            <FaComments />
          </div>
          <h3>Live Chat</h3>
          <div style={styles.contactDetails}>
            <p>Available on our website</p>
            <p>Monday – Saturday</p>
            <p>10:00 AM – 8:00 PM IST</p>
          </div>
          <button style={styles.btnChat}>Start Chat</button>
        </div>
      </div>

      <div style={styles.faq}>
        <h2 style={styles.sectionTitle}>
          <FaQuestionCircle style={styles.sectionIcon} />
          Frequently Asked Questions
        </h2>
        <div style={styles.faqGrid}>
          <div style={styles.faqItem}>
            <div style={styles.faqIcon}>
              <FaUser />
            </div>
            <div style={styles.faqContent}>
              <h4>How do I check my loan status?</h4>
              <p>Log in to your student dashboard to view your application status and loan details.</p>
            </div>
          </div>
          <div style={styles.faqItem}>
            <div style={styles.faqIcon}>
              <FaCreditCard />
            </div>
            <div style={styles.faqContent}>
              <h4>What if I miss a payment?</h4>
              <p>Contact us immediately. We can help reschedule payments and avoid penalties.</p>
            </div>
          </div>
          <div style={styles.faqItem}>
            <div style={styles.faqIcon}>
              <FaCalculator />
            </div>
            <div style={styles.faqContent}>
              <h4>How is interest calculated?</h4>
              <p>Interest is calculated monthly on the outstanding balance using the agreed rate.</p>
            </div>
          </div>
          <div style={styles.faqItem}>
            <div style={styles.faqIcon}>
              <FaMoneyBillWave />
            </div>
            <div style={styles.faqContent}>
              <h4>Can I prepay my loan?</h4>
              <p>Yes, prepayment is allowed without penalties. Contact us for the process.</p>
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
  heroImage: {
    display: "flex",
    justifyContent: "center",
  },
  supportStats: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "30px",
  },
  stat: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    backgroundColor: "white",
    padding: "15px 20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  statIcon: {
    fontSize: "1.8rem",
    color: "#9f7aea",
  },
  statNumber: {
    display: "block",
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#9f7aea",
  },
  statLabel: {
    fontSize: "0.85rem",
    color: "#666",
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "1000px",
    margin: "60px auto",
    padding: "0 30px",
  },
  contactCard: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    border: "1px solid #e2e8f0",
  },
  cardIcon: {
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
  contactDetails: {
    marginBottom: "20px",
  },
  btnChat: {
    backgroundColor: "#9f7aea",
    color: "white",
    border: "none",
    padding: "12px 25px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "600",
  },
  faq: {
    maxWidth: "1000px",
    margin: "60px auto",
    padding: "60px 30px",
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
  faqGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px",
  },
  faqItem: {
    display: "flex",
    gap: "20px",
    backgroundColor: "#f8fafc",
    padding: "25px",
    borderRadius: "10px",
    border: "1px solid #e2e8f0",
  },
  faqIcon: {
    fontSize: "2rem",
    color: "#9f7aea",
    flexShrink: 0,
  },
  faqContent: {
    flex: 1,
  },
};

export default Contact;
