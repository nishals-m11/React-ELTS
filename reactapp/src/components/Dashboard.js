import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Alert,
  Chip,
} from '@mui/material';
import {
  AccountBalance,
  TrendingUp,
  Warning,
  CheckCircle,
  Schedule,
} from '@mui/icons-material';

const Dashboard = () => {
  const loanData = {
    amount: 500000,
    interestRate: 8,
    tenure: 5,
    moratorium: 1
  };

  const repaymentSchedule = [
    { month: 'Jan 2025', emi: 10456, status: 'Unpaid' },
    { month: 'Feb 2025', emi: 10456, status: 'Unpaid' },
    { month: 'Mar 2025', emi: 10456, status: 'Unpaid' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4, backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Page Heading */}
      <Typography 
        variant="h3" 
        align="center" 
        gutterBottom 
        sx={{ 
          fontWeight: 600, 
          color: '#1976d2', 
          mb: 4,
          fontSize: { xs: '2rem', md: '3rem' }
        }}
      >
        Student Loan Dashboard
      </Typography>

      {/* 1. Loan Summary Section */}
      <Card elevation={3} sx={{ mb: 4, borderRadius: 2 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#333', mb: 3 }}>
            Loan Summary
          </Typography>
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                <AccountBalance sx={{ fontSize: 32, color: '#1976d2', mb: 1 }} />
                <Typography variant="body2" color="text.secondary">Loan Amount</Typography>
                <Typography variant="h5" sx={{ fontWeight: 600, color: '#1976d2' }}>
                  ₹{loanData.amount.toLocaleString()}
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                <TrendingUp sx={{ fontSize: 32, color: '#4caf50', mb: 1 }} />
                <Typography variant="body2" color="text.secondary">Interest Rate</Typography>
                <Typography variant="h5" sx={{ fontWeight: 600, color: '#4caf50' }}>
                  {loanData.interestRate}%
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                <Schedule sx={{ fontSize: 32, color: '#ff9800', mb: 1 }} />
                <Typography variant="body2" color="text.secondary">Tenure</Typography>
                <Typography variant="h5" sx={{ fontWeight: 600, color: '#ff9800' }}>
                  {loanData.tenure} years
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                <CheckCircle sx={{ fontSize: 32, color: '#9c27b0', mb: 1 }} />
                <Typography variant="body2" color="text.secondary">Moratorium Period</Typography>
                <Typography variant="h5" sx={{ fontWeight: 600, color: '#9c27b0' }}>
                  {loanData.moratorium} year
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* 2. Repayment Schedule Section */}
      <Card elevation={3} sx={{ mb: 4, borderRadius: 2 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#333', mb: 3 }}>
            Repayment Schedule
          </Typography>
          <TableContainer component={Paper} elevation={1} sx={{ borderRadius: 2 }}>
            <Table>
              <TableHead sx={{ backgroundColor: '#f8f9fa' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600, fontSize: '1rem' }}>Month</TableCell>
                  <TableCell sx={{ fontWeight: 600, fontSize: '1rem' }}>EMI Amount</TableCell>
                  <TableCell sx={{ fontWeight: 600, fontSize: '1rem' }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 600, fontSize: '1rem' }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {repaymentSchedule.map((row, index) => (
                  <TableRow key={index} sx={{ '&:hover': { backgroundColor: '#f9f9f9' } }}>
                    <TableCell sx={{ fontSize: '1rem' }}>{row.month}</TableCell>
                    <TableCell sx={{ fontSize: '1rem', fontWeight: 600 }}>₹{row.emi.toLocaleString()}</TableCell>
                    <TableCell>
                      <Typography 
                        sx={{ 
                          color: row.status === 'Unpaid' ? '#d32f2f' : '#2e7d32',
                          fontWeight: 600
                        }}
                      >
                        {row.status}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Button 
                        variant="contained" 
                        size="small"
                        sx={{ 
                          backgroundColor: '#1976d2',
                          '&:hover': { backgroundColor: '#1565c0' },
                          borderRadius: 2
                        }}
                      >
                        Pay Now
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* 3. Payment History Section */}
      <Card elevation={3} sx={{ mb: 4, borderRadius: 2 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#333', mb: 3 }}>
            Payment History
          </Typography>
          <Alert severity="info" sx={{ borderRadius: 2, backgroundColor: '#e3f2fd' }}>
            <Typography variant="body1">No payments made yet.</Typography>
          </Alert>
        </CardContent>
      </Card>

      {/* 4. Payment Reminders Section */}
      <Card elevation={3} sx={{ borderRadius: 2 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#333', mb: 3 }}>
            Payment Reminders
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Alert 
              severity="warning" 
              sx={{ borderRadius: 2 }}
              icon={<Warning />}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="body1">
                  Your EMI for Feb 2025 is due in 5 days.
                </Typography>
              </Box>
            </Alert>
            <Alert 
              severity="error" 
              sx={{ borderRadius: 2 }}
              icon={<Warning />}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Chip label="Urgent" color="error" size="small" sx={{ mr: 1 }} />
                <Typography variant="body1">
                  One installment is overdue. Please make payment immediately.
                </Typography>
              </Box>
            </Alert>
            <Alert 
              severity="info" 
              sx={{ borderRadius: 2 }}
            >
              <Typography variant="body1">
                Interest rate review scheduled for next month.
              </Typography>
            </Alert>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Dashboard;