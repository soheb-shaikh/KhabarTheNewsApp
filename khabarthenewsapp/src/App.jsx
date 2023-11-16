// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TopStories from './components/TopStories';
import AllStories from './components/AllStories';
import SplashScreen from './components/SplashScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState('top-stories');

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) that takes time
    const fetchData = async () => {
      // For the sake of the example, we'll use a setTimeout to simulate loading time
      setTimeout(() => {
        setIsLoading(false); // Set isLoading to false when data is loaded
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div>
        {isLoading ? (
          <SplashScreen />
        ) : (
          <>
            <header>
              <h1>Khabar - The News App</h1>
              <nav>
                <ul>
                  <li>
                    <Navigate to="/top-stories" replace state={{ from: '/' }} />
                  </li>
                  <li>
                    <Navigate to="/all-stories" replace state={{ from: '/' }} />
                  </li>
                </ul>
              </nav>
            </header>

            <main>
              <Routes>
                <Route path="/top-stories" element={<TopStories />} />
                <Route path="/all-stories" element={<AllStories />} />
              </Routes>
            </main>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
