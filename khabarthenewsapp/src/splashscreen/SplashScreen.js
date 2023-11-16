// SplashScreen.js
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const SplashScreen = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/main'); // Navigate to the main screen after a delay
    }, 3000); // 3000 milliseconds (2 seconds)

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [history]);

  return (
    <div>
      <h1>Khabar The News App</h1>
      { }
    </div>
  );
};

export default SplashScreen;
