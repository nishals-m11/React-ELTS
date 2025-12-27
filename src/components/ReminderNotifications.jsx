function ReminderNotifications() {
  const reminders = [
    {
      id: 1,
      message: "Your EMI for Feb 2025 is due in 5 days.",
      type: "warning",
      urgent: true,
    },
    {
      id: 2,
      message: "One installment is overdue. Please make payment immediately.",
      type: "error",
      urgent: true,
    },
    {
      id: 3,
      message: "Interest rate review scheduled for next month.",
      type: "info",
      urgent: false,
    },
  ];

  const getReminderStyle = (type) => {
    switch (type) {
      case "error":
        return { backgroundColor: "#f8d7da", borderColor: "#f5c6cb", color: "#721c24" };
      case "warning":
        return { backgroundColor: "#fff3cd", borderColor: "#ffeaa7", color: "#856404" };
      case "info":
        return { backgroundColor: "#d1ecf1", borderColor: "#bee5eb", color: "#0c5460" };
      default:
        return { backgroundColor: "#f8f9fa", borderColor: "#dee2e6", color: "#383d41" };
    }
  };

  return (
    <div style={styles.card}>
      <h3>Payment Reminders</h3>
      <div style={styles.remindersList}>
        {reminders.map((r) => (
          <div
            key={r.id}
            style={{
              ...styles.reminderItem,
              ...getReminderStyle(r.type),
              ...(r.urgent && styles.urgent),
            }}
          >
            <div style={styles.reminderContent}>
              <span style={styles.reminderText}>{r.message}</span>
              {r.urgent && <span style={styles.urgentBadge}>Urgent</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    borderRadius: "12px",
    padding: "24px",
    margin: "20px 0",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  remindersList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "16px",
  },
  reminderItem: {
    padding: "16px",
    borderRadius: "8px",
    border: "1px solid",
    transition: "all 0.3s ease",
  },
  reminderContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reminderText: {
    flex: 1,
  },
  urgent: {
    animation: "pulse 2s infinite",
  },
  urgentBadge: {
    backgroundColor: "#dc3545",
    color: "white",
    padding: "4px 8px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "bold",
  },
};

export default ReminderNotifications;
