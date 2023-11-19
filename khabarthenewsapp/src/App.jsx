// src/App.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { fetchTopStories, fetchAllNews } from './actions/newsAction.jsx';
import TopStories from './components/TopStories';
import AllStories from './components/AllStories';
import SplashScreen from './components/SplashScreen';

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState('top-stories');

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Dispatch actions to fetch data
        await dispatch(fetchTopStories());
        await dispatch(fetchAllNews());
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
