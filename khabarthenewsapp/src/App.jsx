import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import TopStories from './components/TopStories';
import AllStories from './components/AllStories';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './assets/Themes';
import { fetchTopStories, fetchAllNews } from './actions/newsAction';

const App = () => {
  const isDarkMode = useSelector((state) => state.themeState);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch actions to fetch top stories and all news when the component mounts
    dispatch(fetchTopStories());
    dispatch(fetchAllNews());
  }, [dispatch])

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div>
        <main>
              <Routes>
                <Route index element={<SplashScreen />} />
                <Route path="/top-stories" element={<TopStories />}/>
                <Route path="/all-stories" element={<AllStories />} />
                <Route index element={<Navigate to="/top-stories" replace />} />
              </Routes>
          </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
