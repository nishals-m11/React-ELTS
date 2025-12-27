import { useReducer } from "react";
import ReminderNotifications from "../components/ReminderNotifications";
import { useAuth } from "../context/AuthContext";
import studentLoan from "../data/studentLoan";
import {
  loanReducer,
  initialLoanState,
} from "../reducers/loanReducer";
import { FaChartPie, FaCalendarAlt, FaCreditCard, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

function StudentDashboard() {
  const { role } = useAuth();
  const [state, dispatch] = useReducer(
    loanReducer,
    initialLoanState
  );

  if (role !== "student") {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h2>Access Denied</h2>
          <p>You must be logged in as a student to view this page.</p>
        </div>
      </div>
    );
  }

  const handlePayment = (id) => {
    dispatch({
      type: "MAKE_PAYMENT",
      payload: { id },
    });
  };

  // Calculate loan progress
  const totalPaid = state.paymentHistory.reduce((sum, payment) => sum + payment.amount, 0);
  const totalAmount = studentLoan.loanAmount;
  const progressPercentage = (totalPaid / totalAmount) * 100;

  // Payment status counts
  const paidCount = state.repayments.filter(r => r.status === "Paid").length;
  const unpaidCount = state.repayments.filter(r => r.status === "Unpaid").length;
  const totalPayments = state.repayments.length;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          <FaCreditCard style={styles.titleIcon} />
          Student Loan Dashboard
        </h1>
        <p style={styles.subtitle}>Track your loan progress and manage payments</p>
      </div>

      {/* Quick Stats */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statIcon}>
            <FaChartPie />
          </div>
          <div style={styles.statContent}>
            <h3>₹{(totalAmount - totalPaid).toLocaleString()}</h3>
            <p>Outstanding Balance</p>
          </div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statIcon}>
            <FaCheckCircle />
          </div>
          <div style={styles.statContent}>
            <h3>{paidCount}</h3>
            <p>Payments Completed</p>
          </div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statIcon}>
            <FaExclamationTriangle />
          </div>
          <div style={styles.statContent}>
            <h3>{unpaidCount}</h3>
            <p>Pending Payments</p>
          </div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statIcon}>
            <FaCalendarAlt />
          </div>
          <div style={styles.statContent}>
            <h3>{studentLoan.tenure} Years</h3>
            <p>Loan Tenure</p>
          </div>
        </div>
      </div>

      {/* Loan Progress Chart */}
      <div style={styles.card}>
        <h3>Loan Repayment Progress</h3>
        <div style={styles.progressContainer}>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: `${Math.min(progressPercentage, 100)}%`,
              }}
            ></div>
          </div>
          <div style={styles.progressLabels}>
            <span>₹{totalPaid.toLocaleString()} Paid</span>
            <span>{progressPercentage.toFixed(1)}% Complete</span>
            <span>₹{(totalAmount - totalPaid).toLocaleString()} Remaining</span>
          </div>
        </div>
      </div>

      {/* Loan Summary */}
      <div style={styles.card}>
        <h3>Loan Summary</h3>
        <div style={styles.summaryGrid}>
          <div style={styles.summaryItem}>
            <strong>Loan Amount:</strong> ₹{studentLoan.loanAmount.toLocaleString()}
          </div>
          <div style={styles.summaryItem}>
            <strong>Interest Rate:</strong> {studentLoan.interestRate}%
          </div>
          <div style={styles.summaryItem}>
            <strong>Tenure:</strong> {studentLoan.tenure} years
          </div>
          <div style={styles.summaryItem}>
            <strong>Moratorium:</strong> {studentLoan.moratorium} years
          </div>
        </div>
      </div>

      {/* Repayment Schedule */}
      <div style={styles.card}>
        <h3>Repayment Schedule</h3>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Month</th>
                <th>EMI Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {state.repayments.map((item) => (
                <tr key={item.id}>
                  <td>{item.month}</td>
                  <td>₹{item.amount.toLocaleString()}</td>
                  <td>
                    <span style={item.status === "Paid" ? styles.statusPaid : styles.statusUnpaid}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    {item.status === "Unpaid" && (
                      <button
                        onClick={() => handlePayment(item.id)}
                        style={styles.btnPay}
                      >
                        Pay Now
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment History */}
      <div style={styles.card}>
        <h3>Payment History</h3>
        {state.paymentHistory.length === 0 ? (
          <p style={styles.noData}>No payments made yet.</p>
        ) : (
          <ul style={styles.paymentList}>
            {state.paymentHistory.map((p) => (
              <li key={p.id} style={styles.paymentItem}>
                <span>{p.month}</span>
                <span>₹{p.amount.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <ReminderNotifications />
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
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },
  statCard: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "25px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    border: "1px solid #e2e8f0",
  },
  statIcon: {
    fontSize: "2rem",
    backgroundColor: "#9f7aea",
    padding: "12px",
    borderRadius: "8px",
    color: "white",
  },
  statContent: {
    flex: 1,
  },
  card: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "30px",
    margin: "20px 0",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    border: "1px solid #e2e8f0",
  },
  progressContainer: {
    marginTop: "20px",
  },
  progressBar: {
    width: "100%",
    height: "20px",
    backgroundColor: "#e9ecef",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "10px",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#9f7aea",
    borderRadius: "10px",
  },
  progressLabels: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.9rem",
    color: "#666",
  },
  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  summaryItem: {
    padding: "20px",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    textAlign: "center",
    border: "1px solid #e2e8f0",
  },
  tableContainer: {
    overflowX: "auto",
    marginTop: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  statusPaid: {
    color: "#28a745",
    fontWeight: "bold",
    backgroundColor: "#d4edda",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "0.8rem",
  },
  statusUnpaid: {
    color: "#dc3545",
    fontWeight: "bold",
    backgroundColor: "#f8d7da",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "0.8rem",
  },
  btnPay: {
    backgroundColor: "#9f7aea",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },
  noData: {
    textAlign: "center",
    color: "#666",
    fontStyle: "italic",
    padding: "40px",
  },
  paymentList: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  },
  paymentItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    borderBottom: "1px solid #eee",
    backgroundColor: "#f8fafc",
    marginBottom: "5px",
    borderRadius: "6px",
  },
};

export default StudentDashboard;
