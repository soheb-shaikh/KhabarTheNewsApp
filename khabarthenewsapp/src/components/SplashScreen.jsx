// components/SplashScreen.js
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const SplashScreen = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/main');
    }, 2000);

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <div>
      <h1>Khabar The News App</h1>
    </div>
  );
};

export default SplashScreen;
