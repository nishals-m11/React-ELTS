/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { FaUser, FaBook, FaUniversity, FaMoneyBillWave, FaClock, FaFileAlt, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { useAuth } from "../context/AuthContext";

function ApplyLoan() {
  const { isLoggedIn, addApplication } = useAuth();

  if (!isLoggedIn) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Access Denied</h2>
        <p>Please login to apply for a loan.</p>
      </div>
    );
  }
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    address: "",
    course: "",
    institution: "",
    loanAmount: "",
    duration: "",
    fatherName: "",
    motherName: "",
    annualIncome: "",
    documents: [],
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      documents: Array.from(e.target.files),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Individual field validations
    if (!formData.studentName.trim()) {
      alert("Please enter your full name.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.trim()) {
      alert("Please enter your email address.");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.phone.trim()) {
      alert("Please enter your phone number.");
      setIsSubmitting(false);
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.address.trim()) {
      alert("Please enter your address.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.course.trim()) {
      alert("Please enter your course name.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.institution.trim()) {
      alert("Please enter your institution name.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.loanAmount || isNaN(formData.loanAmount) || parseFloat(formData.loanAmount) <= 0) {
      alert("Please enter a valid loan amount greater than 0.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.duration || isNaN(formData.duration) || parseInt(formData.duration) <= 0) {
      alert("Please enter a valid loan duration in years.");
      setIsSubmitting(false);
      return;
    }

    if (formData.fatherName && formData.fatherName.trim().length < 2) {
      alert("Please enter a valid father's name (at least 2 characters).");
      setIsSubmitting(false);
      return;
    }

    if (formData.motherName && formData.motherName.trim().length < 2) {
      alert("Please enter a valid mother's name (at least 2 characters).");
      setIsSubmitting(false);
      return;
    }

    if (formData.annualIncome && (isNaN(formData.annualIncome) || parseFloat(formData.annualIncome) < 0)) {
      alert("Please enter a valid annual income.");
      setIsSubmitting(false);
      return;
    }

    // If all validations pass
    setError("");
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    addApplication(formData);
    setSubmitted(true);
    setIsSubmitting(false);

    // Reset form after successful submission
    setFormData({
      studentName: "",
      email: "",
      phone: "",
      address: "",
      course: "",
      institution: "",
      loanAmount: "",
      duration: "",
      fatherName: "",
      motherName: "",
      annualIncome: "",
      documents: [],
    });

    // Reset submitted state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

    console.log("Loan Application Submitted:", formData);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          <FaFileAlt style={styles.titleIcon} />
          Education Loan Application
        </h1>
        <p style={styles.subtitle}>Fill out the form below to apply for your education loan</p>
      </div>

      {error && (
        <div style={styles.alertError}>
          <FaExclamationTriangle style={styles.alertIcon} />
          {error}
        </div>
      )}

      {submitted && (
        <div style={styles.alertSuccess}>
          <FaCheckCircle style={styles.alertIcon} />
          Loan application submitted successfully! We'll review your application and get back to you within 3-5 business days.
        </div>
      )}

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Personal Information</h3>
          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                <FaUser style={styles.labelIcon} />
                Full Name *
              </label>
              <input
                type="text"
                name="studentName"
                placeholder="Enter your full name"
                value={formData.studentName}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                <FaEnvelope style={styles.labelIcon} />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                <FaPhone style={styles.labelIcon} />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                <FaMapMarkerAlt style={styles.labelIcon} />
                Address
              </label>
              <textarea
                name="address"
                placeholder="Enter your complete address"
                value={formData.address}
                onChange={handleChange}
                style={styles.textarea}
                rows="3"
              />
            </div>
          </div>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Education Details</h3>
          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                <FaBook style={styles.labelIcon} />
                Course Name *
              </label>
              <input
                type="text"
                name="course"
                placeholder="e.g., Bachelor of Computer Science"
                value={formData.course}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                <FaUniversity style={styles.labelIcon} />
                Institution Name *
              </label>
              <input
                type="text"
                name="institution"
                placeholder="e.g., University of Technology"
                value={formData.institution}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Loan Details</h3>
          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                <FaMoneyBillWave style={styles.labelIcon} />
                Loan Amount (₹) *
              </label>
              <input
                type="number"
                name="loanAmount"
                placeholder="e.g., 500000"
                value={formData.loanAmount}
                onChange={handleChange}
                style={styles.input}
                min="10000"
                max="5000000"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                <FaClock style={styles.labelIcon} />
                Loan Duration (Years) *
              </label>
              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="">Select duration</option>
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
                <option value="4">4 Years</option>
                <option value="5">5 Years</option>
              </select>
            </div>
          </div>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Family Information</h3>
          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Father's Name</label>
              <input
                type="text"
                name="fatherName"
                placeholder="Enter father's full name"
                value={formData.fatherName}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Mother's Name</label>
              <input
                type="text"
                name="motherName"
                placeholder="Enter mother's full name"
                value={formData.motherName}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Annual Family Income (₹)</label>
              <input
                type="number"
                name="annualIncome"
                placeholder="e.g., 500000"
                value={formData.annualIncome}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Required Documents</h3>
          <div style={styles.formGroup}>
            <label style={styles.label}>Upload Documents</label>
            <input
              type="file"
              name="documents"
              multiple
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              style={styles.fileInput}
            />
            <small style={styles.helpText}>
              Upload: ID proof, income certificate, admission letter, fee structure (PDF/JPG/PNG, max 5MB each)
            </small>
          </div>
        </div>

        <button
          type="submit"
          style={isSubmitting ? {...styles.btnPrimary, ...styles.btnDisabled} : styles.btnPrimary}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div style={styles.loading}></div>
              Submitting Application...
            </>
          ) : (
            <>
              <FaFileAlt style={styles.btnIcon} />
              Submit Loan Application
            </>
          )}
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "30px",
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.2rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#4a5568",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
  },
  titleIcon: {
    fontSize: "1.8rem",
    color: "#9f7aea",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#666",
    margin: 0,
  },
  alertError: {
    backgroundColor: "#fed7d7",
    color: "#c53030",
    padding: "15px 20px",
    borderRadius: "8px",
    border: "1px solid #feb2b2",
    marginBottom: "30px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  alertSuccess: {
    backgroundColor: "#c6f6d5",
    color: "#276749",
    padding: "15px 20px",
    borderRadius: "8px",
    border: "1px solid #9ae6b4",
    marginBottom: "30px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  alertIcon: {
    fontSize: "1.2rem",
  },
  form: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "40px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    border: "1px solid #e2e8f0",
  },
  section: {
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#4a5568",
    marginBottom: "25px",
    paddingBottom: "10px",
    borderBottom: "2px solid #9f7aea",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#4a5568",
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  labelIcon: {
    color: "#9f7aea",
    fontSize: "1rem",
  },
  input: {
    padding: "12px 15px",
    border: "1px solid #cbd5e0",
    borderRadius: "6px",
    fontSize: "1rem",
    backgroundColor: "#f7fafc",
  },
  textarea: {
    padding: "12px 15px",
    border: "1px solid #cbd5e0",
    borderRadius: "6px",
    fontSize: "1rem",
    backgroundColor: "#f7fafc",
    resize: "vertical",
    fontFamily: "inherit",
  },
  select: {
    padding: "12px 15px",
    border: "1px solid #cbd5e0",
    borderRadius: "6px",
    fontSize: "1rem",
    backgroundColor: "#f7fafc",
  },
  fileInput: {
    padding: "10px",
    border: "2px dashed #9f7aea",
    borderRadius: "6px",
    backgroundColor: "#f8fafc",
    cursor: "pointer",
  },
  helpText: {
    fontSize: "0.85rem",
    color: "#666",
    marginTop: "5px",
  },
  btnPrimary: {
    backgroundColor: "#9f7aea",
    color: "white",
    padding: "15px 30px",
    border: "none",
    borderRadius: "6px",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    justifyContent: "center",
    margin: "0 auto",
  },
  btnDisabled: {
    opacity: 0.6,
    cursor: "not-allowed",
  },
  btnIcon: {
    fontSize: "1rem",
  },
  loading: {
    width: "20px",
    height: "20px",
    border: "3px solid #f3f3f3",
    borderTop: "3px solid #ffffff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default ApplyLoan;
