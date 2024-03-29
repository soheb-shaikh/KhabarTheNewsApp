import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { Container, Typography, Button } from '@mui/material';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/top-stories');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
      <Container component="div" maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <FontAwesomeIcon icon={faNewspaper} size="4x" style={{ color: 'primary', marginBottom: '1rem' }} />
        <Typography variant="h4" component="h1" color="textPrimary" gutterBottom>
          Khabar The News App
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/top-stories')} style={{ marginTop: '1rem' }}>
          Continue
        </Button>
      </Container>
  );
};

export default SplashScreen;
