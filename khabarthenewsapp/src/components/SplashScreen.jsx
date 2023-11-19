// components/SplashScreen.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate.push('/main');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h1>Khabar The News App</h1>
    </div>
  );
};

export default SplashScreen;
