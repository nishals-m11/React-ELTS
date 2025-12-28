import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FaChartBar, FaUsers, FaMoneyBillWave, FaClock, FaCheckCircle, FaExclamationTriangle, FaUserShield } from 'react-icons/fa';

function AdminDashboard() {
  const { isLoggedIn, role, applications, updateApplicationStatus } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState('6months');

  if (!isLoggedIn || role !== "admin") {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h2>Access Denied</h2>
          <p>Please login as admin to view this page.</p>
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
  const monthlyApplications = applications.reduce((acc, app) => {
    const month = new Date(app.id).toLocaleString('default', { month: 'short' });
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {});

  const loanData = [
    { month: 'Jan', amount: monthlyApplications.Jan || 0 },
    { month: 'Feb', amount: monthlyApplications.Feb || 0 },
    { month: 'Mar', amount: monthlyApplications.Mar || 0 },
    { month: 'Apr', amount: monthlyApplications.Apr || 0 },
    { month: 'May', amount: monthlyApplications.May || 0 },
    { month: 'Jun', amount: monthlyApplications.Jun || 0 },
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
        <button style={styles.downloadBtn} onClick={() => {
          const report = `Loan Applications Report\n\nTotal Applications: ${applications.length}\nApproved: ${applications.filter(app => app.status === 'Approved').length}\nPending: ${applications.filter(app => app.status === 'Pending').length}\nRejected: ${applications.filter(app => app.status === 'Rejected').length}\n\nDetails:\n${applications.map(app => `${app.studentName} - ${app.email} - ₹${app.loanAmount} - ${app.status}`).join('\n')}`;
          const blob = new Blob([report], { type: 'text/plain' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'loan_report.txt';
          a.click();
          URL.revokeObjectURL(url);
        }}>
          <FaChartBar style={styles.btnIcon} />
          Download Report
        </button>
      </div>

      {/* Key Metrics */}
      <div style={styles.metricsGrid}>
        <div style={styles.metricCard}>
          <div style={styles.metricIcon}>
            <FaUsers />
          </div>
          <div style={styles.metricContent}>
            <h3>{applications.length}</h3>
            <p>Total Applications</p>
          </div>
        </div>
        <div style={styles.metricCard}>
          <div style={styles.metricIcon}>
            <FaMoneyBillWave />
          </div>
          <div style={styles.metricContent}>
            <h3>₹{applications.reduce((sum, app) => sum + parseInt(app.loanAmount || 0), 0).toLocaleString()}</h3>
            <p>Total Requested Amount</p>
          </div>
        </div>
        <div style={styles.metricCard}>
          <div style={styles.metricIcon}>
            <FaCheckCircle />
          </div>
          <div style={styles.metricContent}>
            <h3>{applications.filter(app => app.status === 'Approved').length}</h3>
            <p>Approved Applications</p>
          </div>
        </div>
        <div style={styles.metricCard}>
          <div style={styles.metricIcon}>
            <FaClock />
          </div>
          <div style={styles.metricContent}>
            <h3>{applications.filter(app => app.status === 'Pending').length}</h3>
            <p>Pending Approvals</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div style={styles.chartsGrid}>
        <div style={styles.filterContainer}>
          <label style={styles.filterLabel}>Filter by Period:</label>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            style={styles.filterSelect}
          >
            <option value="3months">Last 3 Months</option>
            <option value="6months">Last 6 Months</option>
            <option value="1year">Last Year</option>
          </select>
        </div>
        <div style={styles.chartCard}>
          <h3>Monthly Loan Applications</h3>
          <div style={styles.chartContainer}>
            <div style={styles.barChart}>
              {loanData.map((item, index) => (
                <div key={index} style={styles.barGroup}>
                  <div style={styles.bar}>
                    <div
                      style={{
                        ...styles.barFill,
                        height: `${(item.amount / 10) * 100}%`,
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

      {/* Census Analysis */}
      <div style={styles.card}>
        <h3>Census Analysis</h3>
        <div style={styles.censusGrid}>
          <div style={styles.censusItem}>
            <h4>Demographics</h4>
            <ul style={styles.censusList}>
              <li>Male Students: 65%</li>
              <li>Female Students: 35%</li>
              <li>Average Age: 22 years</li>
            </ul>
          </div>
          <div style={styles.censusItem}>
            <h4>Geographic Distribution</h4>
            <ul style={styles.censusList}>
              <li>Urban: 70%</li>
              <li>Semi-Urban: 20%</li>
              <li>Rural: 10%</li>
            </ul>
          </div>
          <div style={styles.censusItem}>
            <h4>Course Distribution</h4>
            <ul style={styles.censusList}>
              <li>Engineering: 40%</li>
              <li>Medical: 25%</li>
              <li>Arts & Science: 20%</li>
              <li>Others: 15%</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Loan Applications */}
      <div style={styles.card}>
        <h3>Loan Applications</h3>
        {applications.length === 0 ? (
          <p>No applications yet.</p>
        ) : (
          <div style={styles.applicationsList}>
            {applications.map(app => (
              <div key={app.id} style={styles.applicationItem}>
                <div style={styles.appDetails}>
                  <h4>{app.studentName}</h4>
                  <p>Email: {app.email} | Phone: {app.phone}</p>
                  <p>Course: {app.course} | Institution: {app.institution}</p>
                  <p>Loan Amount: ₹{app.loanAmount} | Duration: {app.duration} years</p>
                  <p>Status: <span style={{ color: app.status === 'Approved' ? 'green' : app.status === 'Rejected' ? 'red' : 'orange' }}>{app.status}</span></p>
                </div>
                {app.status === 'Pending' && (
                  <div style={styles.appActions}>
                    <button style={styles.approveBtn} onClick={() => updateApplicationStatus(app.id, 'Approved')}>
                      Approve
                    </button>
                    <button style={styles.rejectBtn} onClick={() => updateApplicationStatus(app.id, 'Rejected')}>
                      Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
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
    position: "relative",
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
  filterContainer: {
    gridColumn: "1 / -1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    marginBottom: "20px",
  },
  filterLabel: {
    fontSize: "1rem",
    fontWeight: "500",
  },
  filterSelect: {
    padding: "8px 12px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "1rem",
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
  censusGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  censusItem: {
    backgroundColor: "#f8fafc",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
  },
  censusList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  applicationsList: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  applicationItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
  },
  appDetails: {
    flex: 1,
  },
  appActions: {
    display: "flex",
    gap: "10px",
  },
  approveBtn: {
    backgroundColor: "#26de81",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  rejectBtn: {
    backgroundColor: "#eb3b5a",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  downloadBtn: {
    backgroundColor: "#667eea",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "16px",
  },
  btnIcon: {
    fontSize: "1rem",
  },
};

export default AdminDashboard;
