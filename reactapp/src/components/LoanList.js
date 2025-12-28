import React from 'react';
import { useLoan } from '../context/LoanContext';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  Chip,
  Paper,
  Alert,
} from '@mui/material';
import {
  AccountBalance,
  TrendingUp,
  Assignment,
  CheckCircle,
  Pending,
  Cancel,
} from '@mui/icons-material';

const LoanList = () => {
  const { loans } = useLoan();

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Approved': return <CheckCircle sx={{ fontSize: 18 }} />;
      case 'Pending': return <Pending sx={{ fontSize: 18 }} />;
      case 'Rejected': return <Cancel sx={{ fontSize: 18 }} />;
      default: return <Assignment sx={{ fontSize: 18 }} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': return 'success';
      case 'Pending': return 'warning';
      case 'Rejected': return 'error';
      default: return 'default';
    }
  };

  const totalAmount = loans.reduce((sum, loan) => sum + parseFloat(loan.amount || 0), 0);
  const approvedLoans = loans.filter(loan => loan.status === 'Approved').length;

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h1" gutterBottom align="center">
          Loan List
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
          Track and manage your education loan applications
        </Typography>
      </Box>

      {/* Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
              color: 'white',
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                  {loans.length}
                </Typography>
                <Typography variant="body1">Total Applications</Typography>
              </Box>
              <Assignment sx={{ fontSize: 48, opacity: 0.8 }} />
            </Box>
          </Paper>
        </Grid>
        
        <Grid xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              background: 'linear-gradient(135deg, #4caf50 0%, #81c784 100%)',
              color: 'white',
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                  ${totalAmount.toLocaleString()}
                </Typography>
                <Typography variant="body1">Total Amount</Typography>
              </Box>
              <AccountBalance sx={{ fontSize: 48, opacity: 0.8 }} />
            </Box>
          </Paper>
        </Grid>
        
        <Grid xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              background: 'linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)',
              color: 'white',
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                  {approvedLoans}
                </Typography>
                <Typography variant="body1">Approved Loans</Typography>
              </Box>
              <TrendingUp sx={{ fontSize: 48, opacity: 0.8 }} />
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Loan Cards */}
      {loans.length === 0 ? (
        <Alert 
          severity="info" 
          sx={{ 
            borderRadius: 2, 
            fontSize: '1.1rem',
            py: 3,
          }}
        >
          <Typography variant="h6" gutterBottom>
            No loans available
          </Typography>
          <Typography>
            Start by adding your first education loan application to track your progress.
          </Typography>
        </Alert>
      ) : (
        <Grid container spacing={3}>
          {loans.map(loan => (
            <Grid xs={12} md={6} lg={4} key={loan.id}>
              <Card 
                elevation={3}
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#1976d2' }}>
                      {loan.name}
                    </Typography>
                    <Chip
                      icon={getStatusIcon(loan.status)}
                      label={loan.status}
                      color={getStatusColor(loan.status)}
                      size="small"
                      sx={{ fontWeight: 600 }}
                    />
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AccountBalance sx={{ mr: 1, color: '#666', fontSize: 20 }} />
                    <Typography variant="h5" sx={{ fontWeight: 600, color: '#333' }}>
                      ${parseFloat(loan.amount || 0).toLocaleString()}
                    </Typography>
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary">
                    Application ID: #{loan.id}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default LoanList;