import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Paper,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Chat,
  Schedule,
  ExpandMore,
  HelpOutline,
} from '@mui/icons-material';

const Contact = () => {
  const faqs = [
    {
      question: 'How do I check my loan status?',
      answer: 'Log in to your student dashboard to view your application status and loan details.'
    },
    {
      question: 'What if I miss a payment?',
      answer: 'Contact us immediately. We can help reschedule payments and avoid penalties.'
    },
    {
      question: 'How is interest calculated?',
      answer: 'Interest is calculated monthly on the outstanding balance using the agreed rate.'
    },
    {
      question: 'Can I prepay my loan?',
      answer: 'Yes, prepayment is allowed without penalties. Contact us for the process.'
    }
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
          Contact & Support
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', lineHeight: 1.6 }}>
          We're here to help you with any questions regarding your education loan application, 
          repayment schedule, or account management. Our dedicated support team ensures timely 
          assistance and accurate information.
        </Typography>
      </Box>

      {/* Contact Methods */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {/* Phone Support */}
        <Grid xs={12} md={6}>
          <Card elevation={4} sx={{ height: '100%', borderRadius: 3 }}>
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <Phone sx={{ fontSize: 60, color: '#4caf50', mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#333' }}>
                📞 Phone Support
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1976d2' }}>
                  Primary: +91 98765 43210
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1976d2' }}>
                  Secondary: +91 98765 43211
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary">
                Working Hours: Monday – Friday (9:00 AM – 6:00 PM IST)
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Email Support */}
        <Grid xs={12} md={6}>
          <Card elevation={4} sx={{ height: '100%', borderRadius: 3 }}>
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <Email sx={{ fontSize: 60, color: '#2196f3', mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#333' }}>
                📧 Email Support
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography variant="body1" sx={{ fontWeight: 600, color: '#1976d2' }}>
                  General Inquiries: support@eduloan.com
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, color: '#1976d2' }}>
                  Technical Issues: tech@eduloan.com
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary">
                Response Time: Within 24 hours
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Office Address */}
        <Grid xs={12} md={6}>
          <Card elevation={4} sx={{ height: '100%', borderRadius: 3 }}>
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <LocationOn sx={{ fontSize: 60, color: '#ff9800', mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#333' }}>
                📍 Office Address
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1976d2' }}>
                  EduLoan Support Center
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  123 Education Street
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Chennai, Tamil Nadu 600001
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  India
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Live Chat */}
        <Grid xs={12} md={6}>
          <Card elevation={4} sx={{ height: '100%', borderRadius: 3 }}>
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <Chat sx={{ fontSize: 60, color: '#9c27b0', mb: 2 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#333' }}>
                💬 Live Chat
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                  Available on our website
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  Monday – Saturday (10:00 AM – 8:00 PM IST)
                </Typography>
              </Box>
              <Button 
                variant="contained" 
                startIcon={<Chat />}
                sx={{
                  background: 'linear-gradient(135deg, #9c27b0 0%, #ba68c8 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #7b1fa2 0%, #9c27b0 100%)',
                  }
                }}
              >
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* FAQ Section */}
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3, background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <HelpOutline sx={{ fontSize: 60, color: '#1976d2', mb: 2 }} />
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: '#1976d2' }}>
            Frequently Asked Questions
          </Typography>
        </Box>
        
        {faqs.map((faq, index) => (
          <Accordion 
            key={index} 
            elevation={2}
            sx={{ 
              mb: 2, 
              borderRadius: 2,
              '&:before': { display: 'none' },
              '&.Mui-expanded': {
                margin: '0 0 16px 0',
              }
            }}
          >
            <AccordionSummary 
              expandIcon={<ExpandMore />}
              sx={{ 
                backgroundColor: 'white',
                borderRadius: 2,
                '&.Mui-expanded': {
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                ❓ {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#f9f9f9', borderRadius: '0 0 8px 8px' }}>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </Container>
  );
};

export default Contact;