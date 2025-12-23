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
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Assignment,
  CheckCircle,
  Person,
  Schedule,
  Payment,
  TrendingUp,
  Security,
  Code,
  Speed,
} from '@mui/icons-material';

const About = () => {
  const features = [
    {
      icon: <Assignment />,
      title: 'Loan Application Management',
      description: 'Students can easily submit detailed loan applications, capturing academic details, course information, and financial requirements.'
    },
    {
      icon: <CheckCircle />,
      title: 'Approval & Disbursement',
      description: 'Streamlined approval process with automatic fund disbursement based on verified schedules and agreements.'
    },
    {
      icon: <Person />,
      title: 'Account Management',
      description: 'Comprehensive loan account creation with interest rates, tenure periods, and moratorium details.'
    },
    {
      icon: <Schedule />,
      title: 'Repayment Scheduling',
      description: 'Automated generation of repayment schedules with clear EMI amounts and due dates after moratorium completion.'
    },
    {
      icon: <Payment />,
      title: 'Payment Tracking',
      description: 'Real-time tracking of repayments, overdue amounts, and partial payments with instant status updates.'
    },
    {
      icon: <TrendingUp />,
      title: 'Balance Monitoring',
      description: 'Automatic calculation of outstanding balances, interest accrual, and real-time loan summaries.'
    }
  ];

  const objectives = [
    'Improve transparency in education loan management processes',
    'Simplify loan tracking and monitoring for students',
    'Provide clear and accurate repayment information',
    'Support role-based access for students and administrators',
    'Ensure compliance with education loan regulations',
    'Deliver a user-friendly and intuitive interface'
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h2" 
          gutterBottom 
          sx={{ 
            fontWeight: 700,
            background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 3
          }}
        >
          About Education Loan Tracking System
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', lineHeight: 1.6 }}>
          The Education Loan Tracking System is a comprehensive platform designed to streamline 
          the entire lifecycle of education loans, ensuring transparency, efficiency, and accessibility 
          for both students and financial institutions.
        </Typography>
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {features.map((feature, index) => (
          <Grid xs={12} md={6} key={index}>
            <Card 
              elevation={4}
              sx={{ 
                height: '100%',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                }
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ 
                    p: 1.5, 
                    borderRadius: 2, 
                    backgroundColor: '#e3f2fd', 
                    color: '#1976d2',
                    mr: 2,
                    mt: 0.5
                  }}>
                    {feature.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#333' }}>
                      📋 {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Key Objectives */}
      <Paper elevation={4} sx={{ p: 4, mb: 6, borderRadius: 3, background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: '#1976d2', mb: 3 }}>
          Key Objectives
        </Typography>
        <List>
          {objectives.map((objective, index) => (
            <ListItem key={index} sx={{ px: 0 }}>
              <ListItemIcon>
                <CheckCircle sx={{ color: '#4caf50' }} />
              </ListItemIcon>
              <ListItemText 
                primary={objective}
                sx={{ 
                  '& .MuiListItemText-primary': { 
                    fontSize: '1.1rem',
                    fontWeight: 500
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Technology Stack */}
      <Card elevation={4} sx={{ borderRadius: 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: '#1976d2', mb: 3 }}>
            Technology Stack
          </Typography>
          <Grid container spacing={3}>
            <Grid xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Code sx={{ fontSize: 60, color: '#61dafb', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>React</Typography>
                <Typography variant="body2" color="text.secondary">
                  Modern JavaScript library for building user interfaces
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Security sx={{ fontSize: 60, color: '#4caf50', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>Context API</Typography>
                <Typography variant="body2" color="text.secondary">
                  State management with Context API and useReducer
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Speed sx={{ fontSize: 60, color: '#ff9800', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>Material-UI</Typography>
                <Typography variant="body2" color="text.secondary">
                  Professional styling for optimal performance and UX
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4, p: 3, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
            <Typography variant="body1" sx={{ lineHeight: 1.6, textAlign: 'center' }}>
              Built with React for a responsive and dynamic user interface, utilizing modern JavaScript features, 
              state management with Context API and useReducer, and styled with Material-UI for optimal 
              performance and user experience.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;