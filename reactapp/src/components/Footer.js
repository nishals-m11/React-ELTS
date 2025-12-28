import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
} from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1976d2',
        color: 'white',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              EduLoan Tracker
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Comprehensive Education Loan Management System for students and financial institutions.
            </Typography>
          </Grid>
          
          <Grid xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Email sx={{ mr: 1, fontSize: 18 }} />
              <Typography variant="body2">support@eduloantracker.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Phone sx={{ mr: 1, fontSize: 18 }} />
              <Typography variant="body2">+91 98765 43210</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOn sx={{ mr: 1, fontSize: 18 }} />
              <Typography variant="body2">123 Education Street, Coimbatore, Tamil Nadu 641001</Typography>
            </Box>
          </Grid>
          
          <Grid xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Terms of Service
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', mb: 1, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Help Center
            </Link>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 3, backgroundColor: 'rgba(255,255,255,0.2)' }} />
        
        <Typography variant="body2" align="center" sx={{ opacity: 0.8 }}>
          © 2024 EduLoan Tracker. All rights reserved. | Developed with ❤️ for Education
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;