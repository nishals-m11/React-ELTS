import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  TrendingUp,
  AccountBalance,
  Assessment,
  Warning,
  CheckCircle,
  Person,
  Payment,
  Notifications,
  PieChart,
} from '@mui/icons-material';

const AdminPanel = () => {
  const stats = {
    totalLoans: 120,
    totalAmount: 65000000, // 6.5 crores
    averageLoan: 540000, // 5.4 lakhs
    onTimePayments: 85,
    overdueAccounts: 15,
    totalRepayments: 1020,
    lowRisk: 70,
    mediumRisk: 20,
    highRisk: 10
  };

  const recentActivities = [
    { type: 'application', text: 'New loan application from Vasanth M - ₹3,00,000', icon: <Person />, time: '2 hours ago' },
    { type: 'payment', text: 'Payment received from Uvadaran R - ₹10,456', icon: <Payment />, time: '4 hours ago' },
    { type: 'approval', text: 'Loan approved for Pranesh Sekar U S - ₹5,00,000', icon: <CheckCircle />, time: '6 hours ago' },
    { type: 'notice', text: 'Overdue notice sent to 5 students', icon: <Warning />, time: '1 day ago' },
  ];

  const topLoans = [
    { student: 'Arjun Kumar', amount: 800000, status: 'Active', risk: 'Low' },
    { student: 'Priya Sharma', amount: 750000, status: 'Active', risk: 'Medium' },
    { student: 'Rahul Patel', amount: 650000, status: 'Overdue', risk: 'High' },
    { student: 'Sneha Reddy', amount: 600000, status: 'Active', risk: 'Low' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4, backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
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
        Admin Reports & Loan Overview
      </Typography>

      {/* Loan Disbursement Report */}
      <Card elevation={3} sx={{ mb: 4, borderRadius: 2 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#333', mb: 3 }}>
            Loan Disbursement Report
          </Typography>
          <Grid container spacing={3}>
            <Grid xs={12} md={4}>
              <Paper 
                elevation={2}
                sx={{ 
                  p: 3, 
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                  color: 'white',
                  borderRadius: 2
                }}
              >
                <TrendingUp sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                  {stats.totalLoans}
                </Typography>
                <Typography variant="h6">Total Loans Disbursed</Typography>
              </Paper>
            </Grid>
            <Grid xs={12} md={4}>
              <Paper 
                elevation={2}
                sx={{ 
                  p: 3, 
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #4caf50 0%, #81c784 100%)',
                  color: 'white',
                  borderRadius: 2
                }}
              >
                <AccountBalance sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                  ₹{(stats.totalAmount / 10000000).toFixed(1)}Cr
                </Typography>
                <Typography variant="h6">Total Amount</Typography>
              </Paper>
            </Grid>
            <Grid xs={12} md={4}>
              <Paper 
                elevation={2}
                sx={{ 
                  p: 3, 
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)',
                  color: 'white',
                  borderRadius: 2
                }}
              >
                <Assessment sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                  ₹{(stats.averageLoan / 100000).toFixed(1)}L
                </Typography>
                <Typography variant="h6">Average Loan Amount</Typography>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Repayment Report */}
      <Card elevation={3} sx={{ mb: 4, borderRadius: 2 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#333', mb: 3 }}>
            Repayment Report
          </Typography>
          <Grid container spacing={4}>
            <Grid xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <CheckCircle sx={{ fontSize: 50, color: '#4caf50', mb: 2 }} />
                <Typography variant="h2" sx={{ fontWeight: 700, color: '#4caf50', mb: 1 }}>
                  {stats.onTimePayments}%
                </Typography>
                <Typography variant="h6" color="text.secondary">On-Time Payments</Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={stats.onTimePayments} 
                  sx={{ mt: 2, height: 8, borderRadius: 4 }}
                  color="success"
                />
              </Box>
            </Grid>
            <Grid xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Warning sx={{ fontSize: 50, color: '#f44336', mb: 2 }} />
                <Typography variant="h2" sx={{ fontWeight: 700, color: '#f44336', mb: 1 }}>
                  {stats.overdueAccounts}%
                </Typography>
                <Typography variant="h6" color="text.secondary">Overdue Accounts</Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={stats.overdueAccounts} 
                  sx={{ mt: 2, height: 8, borderRadius: 4 }}
                  color="error"
                />
              </Box>
            </Grid>
            <Grid xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Payment sx={{ fontSize: 50, color: '#1976d2', mb: 2 }} />
                <Typography variant="h2" sx={{ fontWeight: 700, color: '#1976d2', mb: 1 }}>
                  {stats.totalRepayments}
                </Typography>
                <Typography variant="h6" color="text.secondary">Total Repayments</Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {/* Default Analysis */}
        <Grid xs={12} md={6}>
          <Card elevation={3} sx={{ height: '100%', borderRadius: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#333', mb: 3 }}>
                Default Analysis
              </Typography>
              <Grid container spacing={3}>
                <Grid xs={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{ 
                      width: 80, 
                      height: 80, 
                      borderRadius: '50%', 
                      background: 'linear-gradient(135deg, #4caf50 0%, #81c784 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2
                    }}>
                      <Typography variant="h5" sx={{ color: 'white', fontWeight: 700 }}>
                        {stats.lowRisk}%
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>Low Risk</Typography>
                  </Box>
                </Grid>
                <Grid xs={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{ 
                      width: 80, 
                      height: 80, 
                      borderRadius: '50%', 
                      background: 'linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2
                    }}>
                      <Typography variant="h5" sx={{ color: 'white', fontWeight: 700 }}>
                        {stats.mediumRisk}%
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>Medium Risk</Typography>
                  </Box>
                </Grid>
                <Grid xs={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Box sx={{ 
                      width: 80, 
                      height: 80, 
                      borderRadius: '50%', 
                      background: 'linear-gradient(135deg, #f44336 0%, #ef5350 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2
                    }}>
                      <Typography variant="h5" sx={{ color: 'white', fontWeight: 700 }}>
                        {stats.highRisk}%
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>High Risk</Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Top Loans */}
        <Grid xs={12} md={6}>
          <Card elevation={3} sx={{ height: '100%', borderRadius: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#333', mb: 3 }}>
                Top Loans by Amount
              </Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600 }}>Student</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Risk</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {topLoans.map((loan, index) => (
                      <TableRow key={index}>
                        <TableCell>{loan.student}</TableCell>
                        <TableCell>₹{(loan.amount / 100000).toFixed(1)}L</TableCell>
                        <TableCell>
                          <Typography 
                            sx={{ 
                              color: loan.risk === 'Low' ? '#4caf50' : loan.risk === 'Medium' ? '#ff9800' : '#f44336',
                              fontWeight: 600,
                              fontSize: '0.875rem'
                            }}
                          >
                            {loan.risk}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Activities */}
      <Card elevation={3} sx={{ mt: 3, borderRadius: 2 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#333', mb: 3 }}>
            Recent Activities
          </Typography>
          <List>
            {recentActivities.map((activity, index) => (
              <React.Fragment key={index}>
                <ListItem sx={{ px: 0 }}>
                  <Box sx={{ mr: 2, color: '#1976d2' }}>
                    {activity.icon}
                  </Box>
                  <ListItemText 
                    primary={activity.text}
                    secondary={activity.time}
                    sx={{ 
                      '& .MuiListItemText-primary': { 
                        fontSize: '1rem',
                        fontWeight: 500
                      },
                      '& .MuiListItemText-secondary': {
                        fontSize: '0.875rem',
                        color: '#666'
                      }
                    }}
                  />
                </ListItem>
                {index < recentActivities.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AdminPanel;