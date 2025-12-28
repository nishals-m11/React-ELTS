import { useAuth } from "../context/AuthContext";
import { FaChartBar, FaUsers, FaMoneyBillWave, FaClock, FaCheckCircle, FaExclamationTriangle, FaUserShield } from 'react-icons/fa';

function AdminDashboard() {
  const { role } = useAuth();

  if (role !== "admin") {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h2>Access Denied</h2>
          <p>Admin access required to view this page.</p>
        </div>
      </div>
    );
  }

  const reports = [
    {
      title: "Loan Disbursement Report",
      icon: <FaMoneyBillWave />,
      data: [
        { label: "Total Loans Disbursed", value: "120", unit: "", color: "#667eea" },
        { label: "Total Amount", value: "6.5", unit: "Crores", color: "#764ba2" },
        { label: "Average Loan Amount", value: "5.4", unit: "Lakhs", color: "#f093fb" },
      ],
    },
    {
      title: "Repayment Report",
      icon: <FaCheckCircle />,
      data: [
        { label: "On-Time Payments", value: "85", unit: "%", color: "#4ecdc4" },
        { label: "Overdue Accounts", value: "15", unit: "%", color: "#ff6b6b" },
        { label: "Total Repayments", value: "1020", unit: "", color: "#45b7d1" },
      ],
    },
    {
      title: "Default Analysis",
      icon: <FaExclamationTriangle />,
      data: [
        { label: "Low Risk", value: "70", unit: "%", color: "#26de81" },
        { label: "Medium Risk", value: "20", unit: "%", color: "#f7b731" },
        { label: "High Risk", value: "10", unit: "%", color: "#eb3b5a" },
      ],
    },
  ];

  // Mock data for charts
  const loanData = [
    { month: 'Jan', amount: 45 },
    { month: 'Feb', amount: 52 },
    { month: 'Mar', amount: 48 },
    { month: 'Apr', amount: 61 },
    { month: 'May', amount: 55 },
    { month: 'Jun', amount: 67 },
  ];

  const riskData = [
    { category: 'Low Risk', percentage: 70, color: '#26de81' },
    { category: 'Medium Risk', percentage: 20, color: '#f7b731' },
    { category: 'High Risk', percentage: 10, color: '#eb3b5a' },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          <FaUserShield style={styles.titleIcon} />
          Admin Dashboard
        </h1>
        <p style={styles.subtitle}>Comprehensive loan management and analytics</p>
      </div>

      {/* Key Metrics */}
      <div style={styles.metricsGrid}>
        <div style={styles.metricCard}>
          <div style={styles.metricIcon}>
            <FaUsers />
          </div>
          <div style={styles.metricContent}>
            <h3>1,250</h3>
            <p>Total Students</p>
          </div>
        </div>
        <div style={styles.metricCard}>
          <div style={styles.metricIcon}>
            <FaMoneyBillWave />
          </div>
          <div style={styles.metricContent}>
            <h3>₹8.2Cr</h3>
            <p>Total Loan Amount</p>
          </div>
        </div>
        <div style={styles.metricCard}>
          <div style={styles.metricIcon}>
            <FaCheckCircle />
          </div>
          <div style={styles.metricContent}>
            <h3>92%</h3>
            <p>Repayment Rate</p>
          </div>
        </div>
        <div style={styles.metricCard}>
          <div style={styles.metricIcon}>
            <FaClock />
          </div>
          <div style={styles.metricContent}>
            <h3>15</h3>
            <p>Pending Approvals</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div style={styles.chartsGrid}>
        <div style={styles.chartCard}>
          <h3>Monthly Loan Disbursements</h3>
          <div style={styles.chartContainer}>
            <div style={styles.barChart}>
              {loanData.map((item, index) => (
                <div key={index} style={styles.barGroup}>
                  <div style={styles.bar}>
                    <div
                      style={{
                        ...styles.barFill,
                        height: `${(item.amount / 70) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span style={styles.barLabel}>{item.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={styles.chartCard}>
          <h3>Risk Distribution</h3>
          <div style={styles.pieChart}>
            {riskData.map((item, index) => (
              <div key={index} style={styles.pieSegment}>
                <div
                  style={{
                    ...styles.pieFill,
                    backgroundColor: item.color,
                    transform: `rotate(${index * 120}deg)`,
                  }}
                ></div>
                <div style={styles.pieLabel}>
                  <span style={{...styles.colorDot, backgroundColor: item.color}}></span>
                  {item.category}: {item.percentage}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reports */}
      <div style={styles.reportsGrid}>
        {reports.map((report, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.cardHeader}>
              <div style={styles.cardIcon}>
                {report.icon}
              </div>
              <h3>{report.title}</h3>
            </div>
            <div style={styles.metrics}>
              {report.data.map((item, idx) => (
                <div key={idx} style={styles.metric}>
                  <div style={{...styles.metricValue, color: item.color}}>
                    {item.value}<span style={styles.unit}>{item.unit}</span>
                  </div>
                  <div style={styles.metricLabel}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div style={styles.card}>
        <h3>Recent Activities</h3>
        <div style={styles.activityList}>
          <div style={styles.activityItem}>
            <div style={styles.activityIcon}>
              <FaCheckCircle />
            </div>
            <div style={styles.activityContent}>
              <p>New loan application from Vasanth M - ₹3,00,000</p>
              <span style={styles.activityTime}>2 hours ago</span>
            </div>
          </div>
          <div style={styles.activityItem}>
            <div style={styles.activityIcon}>
              <FaMoneyBillWave />
            </div>
            <div style={styles.activityContent}>
              <p>Payment received from Uvadaran R - ₹10,456</p>
              <span style={styles.activityTime}>4 hours ago</span>
            </div>
          </div>
          <div style={styles.activityItem}>
            <div style={styles.activityIcon}>
              <FaCheckCircle />
            </div>
            <div style={styles.activityContent}>
              <p>Loan approved for Pranesh Sekar U S - ₹5,00,000</p>
              <span style={styles.activityTime}>1 day ago</span>
            </div>
          </div>
          <div style={styles.activityItem}>
            <div style={styles.activityIcon}>
              <FaExclamationTriangle />
            </div>
            <div style={styles.activityContent}>
              <p>Overdue notice sent to 5 students</p>
              <span style={styles.activityTime}>2 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#4a5568",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
  },
  titleIcon: {
    fontSize: "2rem",
    color: "#9f7aea",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#666",
    margin: 0,
  },
  metricsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },
  metricCard: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "25px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    border: "1px solid #e2e8f0",
  },
  metricIcon: {
    fontSize: "2rem",
    backgroundColor: "#9f7aea",
    padding: "12px",
    borderRadius: "8px",
    color: "white",
  },
  metricContent: {
    flex: 1,
  },
  chartsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "30px",
    marginBottom: "40px",
  },
  chartCard: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "30px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    border: "1px solid #e2e8f0",
  },
  chartContainer: {
    marginTop: "20px",
  },
  barChart: {
    display: "flex",
    alignItems: "end",
    justifyContent: "space-between",
    height: "200px",
    padding: "20px 0",
  },
  barGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  bar: {
    width: "30px",
    height: "150px",
    backgroundColor: "#e9ecef",
    borderRadius: "5px 5px 0 0",
    position: "relative",
    marginBottom: "10px",
  },
  barFill: {
    width: "100%",
    backgroundColor: "#9f7aea",
    borderRadius: "5px 5px 0 0",
    position: "absolute",
    bottom: 0,
  },
  barLabel: {
    fontSize: "0.8rem",
    color: "#666",
  },
  pieChart: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
  },
  pieSegment: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  pieFill: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
  },
  pieLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "0.9rem",
  },
  colorDot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
  },
  reportsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px",
    marginBottom: "40px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "30px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    border: "1px solid #e2e8f0",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "20px",
  },
  cardIcon: {
    fontSize: "1.5rem",
    color: "#9f7aea",
  },
  metrics: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  metric: {
    textAlign: "center",
    padding: "15px",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
  },
  metricValue: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  unit: {
    fontSize: "1rem",
    color: "#666",
  },
  metricLabel: {
    fontSize: "0.9rem",
    color: "#666",
    marginTop: "4px",
  },
  activityList: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  activityItem: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "15px",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
  },
  activityIcon: {
    fontSize: "1.2rem",
    color: "#9f7aea",
  },
  activityContent: {
    flex: 1,
  },
};

export default AdminDashboard;
