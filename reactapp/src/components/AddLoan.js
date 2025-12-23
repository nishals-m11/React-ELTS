import React, { useState } from 'react';
import { useLoan } from '../context/LoanContext';
import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
  InputAdornment,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  School,
  AttachMoney,
  Assignment,
  Send,
  Person,
  Business,
  CalendarToday,
} from '@mui/icons-material';

const AddLoan = () => {
  const { addLoan } = useLoan();
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    status: 'Pending',
    studentName: '',
    courseName: '',
    institutionName: '',
    duration: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.amount) {
      addLoan(formData);
      setFormData({ 
        name: '', 
        amount: '', 
        status: 'Pending',
        studentName: '',
        courseName: '',
        institutionName: '',
        duration: ''
      });
      setShowSuccess(true);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mb: 4, mt: 4 }}>
        <Typography variant="h1" gutterBottom align="center" sx={{ fontSize: '2.5rem' }}>
          Add New Loan
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
          Fill in your details to apply for an education loan
        </Typography>
      </Box>

      <Paper 
        elevation={4}
        sx={{ 
          p: 4, 
          borderRadius: 3,
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        }}
      >
        <Card elevation={0} sx={{ backgroundColor: 'white', p: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <School sx={{ fontSize: 32, color: '#1976d2', mr: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 600, color: '#1976d2' }}>
                Student Information
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid xs={12}>
                  <TextField
                    fullWidth
                    label="Student Name"
                    name="studentName"
                    placeholder="Student Name"
                    value={formData.studentName}
                    onChange={handleChange}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person sx={{ color: '#1976d2' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid xs={12}>
                  <TextField
                    fullWidth
                    label="Course Name"
                    name="courseName"
                    placeholder="Course Name"
                    value={formData.courseName}
                    onChange={handleChange}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <School sx={{ color: '#1976d2' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid xs={12}>
                  <TextField
                    fullWidth
                    label="Institution Name"
                    name="institutionName"
                    placeholder="Institution Name"
                    value={formData.institutionName}
                    onChange={handleChange}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Business sx={{ color: '#1976d2' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Loan Amount (₹)"
                    name="amount"
                    type="number"
                    placeholder="Loan Amount"
                    value={formData.amount}
                    onChange={handleChange}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AttachMoney sx={{ color: '#1976d2' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Loan Duration (Years)"
                    name="duration"
                    type="number"
                    placeholder="Duration"
                    value={formData.duration}
                    onChange={handleChange}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarToday sx={{ color: '#1976d2' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid xs={12}>
                  <TextField
                    fullWidth
                    label="Loan Name"
                    name="name"
                    placeholder="Loan Name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Assignment sx={{ color: '#1976d2' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid xs={12}>
                  <TextField
                    fullWidth
                    select
                    label="Application Status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    variant="outlined"
                    SelectProps={{
                      native: true,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Assignment sx={{ color: '#1976d2' }} />
                        </InputAdornment>
                      ),
                    }}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </TextField>
                </Grid>

                <Grid xs={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 20px rgba(25,118,210,0.4)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Add Loan
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Paper>

      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowSuccess(false)} 
          severity="success" 
          sx={{ width: '100%', borderRadius: 2 }}
        >
          Loan application submitted successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddLoan;