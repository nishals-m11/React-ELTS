import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Menu,
  MenuItem,
} from '@mui/material';
import { School, ExpandMore } from '@mui/icons-material';

const Navigation = () => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [userType, setUserType] = useState('student'); // 'student' or 'admin'

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
    handleMenuClose();
  };

  return (
    <AppBar position="static" elevation={2}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <School sx={{ fontSize: 32 }} />
            <Typography variant="h6" component={Link} to="/" sx={{ fontWeight: 600, textDecoration: 'none', color: 'inherit' }}>
              EduLoan Tracker
            </Typography>
          </Box>
          
          <nav>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: '8px', alignItems: 'center' }}>
              <li>
                <Button
                  component={Link}
                  to="/"
                  color="inherit"
                  sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
                >
                  Loan List
                </Button>
              </li>
              <li>
                <Button
                  component={Link}
                  to="/add-loan"
                  color="inherit"
                  sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
                >
                  Add Loan
                </Button>
              </li>
            </ul>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;