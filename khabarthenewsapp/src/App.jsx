// src/App.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import MainComponent from './components/MainComponent';
import TopStories from './components/TopStories';
import AllStories from './components/AllStories';

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set isLoading to false when data is loaded
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors or set a flag to indicate an error occurred
      }
    };

    fetchData();
  }, [dispatch]);

  return (
      <div>
        {isLoading ? (
          <SplashScreen />
        ) : (
          <>
            <header>
              <h1>Khabar - The News App</h1>
            </header>

            <main>
              <Routes>
                <Route path="/main/*" element={<MainComponent />}/>
                <Route path="top-stories" element={<TopStories />} />
                <Route path="all-news" element={<AllStories />} /> 
                <Route index element={<Navigate to="/main" replace />} />
              </Routes>
            </main>
          </>
        )}
      </div>
  );
};

export default App;
