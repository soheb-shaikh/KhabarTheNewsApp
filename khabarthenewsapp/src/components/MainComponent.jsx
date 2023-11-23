// components/MainComponent.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Card,
  CardContent,
  Typography,
  useTheme,
  Grid,
  Box,
} from '@mui/material';
import { fetchTopStories, fetchAllNews } from '../actions/newsAction.jsx';
import TopStories from './TopStories';
import AllStories from './AllStories';
import { useNavigate } from 'react-router-dom';
import { useUserAuthentication } from '../authentication/UsersAuthenticationContext.jsx';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainComponent = () => {
  const { logOut, user } = useUserAuthentication();
  const theme = useTheme();


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/signin");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    // Fetch top stories and all stories when the component mounts
    dispatch(fetchTopStories());
    dispatch(fetchAllNews());
  }, [dispatch]);

  return (
    <Box>
      <Box>
        <Header />
        <Outlet />
      </Box>
      <Box mt={3} textAlign="center" p={4} bgcolor={theme.palette.mode === 'dark' ? '#333' : '#fff'}>
        <Typography variant="h6">
          Welcome <br />
          {user && user.email}
        </Typography>
      </Box>
      <Box display="grid" gap={2}>
        <Button variant="contained" color="primary" onClick={handleSignOut}>
          Sign Out
        </Button>
      </Box>
      <Grid container justifyContent="space-around" mt={4} spacing={2}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              width: '100%',
              backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff',
            }}
          >
            <CardContent>
              <Typography variant="h6">Top Stories</Typography>
              <TopStories />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              width: '100%',
              backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff',
            }}
          >
            <CardContent>
              <Typography variant="h6">All News</Typography>
              <AllStories />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainComponent;
