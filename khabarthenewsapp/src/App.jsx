// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import MainComponent from './components/MainComponent';
import TopStories from './components/TopStories';
import AllStories from './components/AllStories';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './assets/Themes';
import RouteProtection from './components/RouteProtection';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div>
            <main>
              <Routes>
                <Route path="/main" element={<RouteProtection><MainComponent /></RouteProtection>}>
                  <Route path="top-stories" element={<TopStories />}/>
                  <Route path="all-stories" element={<AllStories />} />
                </Route>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route index element={<Navigate to="/signin" replace />} />
                <Route index element={<SplashScreen />} />
              </Routes>
            </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
