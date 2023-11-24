import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch, Button, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NewsIcon from '../assets/NewsIcon';
import { toggleDarkMode } from '../actions/themeAction';

const Header = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.themeState);

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" aria-label="menu">
              <NewsIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ marginLeft: '8px' }}>
              Khabar The News App
            </Typography>
          </div>
          <div sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" component={Link} to="/top-stories">
              Top Stories
            </Button>
            <Button color="inherit" component={Link} to="/all-stories">
              All Stories
            </Button>
          </div>
          <div sx={{ display: 'flex', alignItems: 'center' }}>
            <Switch
              color="default"
              checked={isDarkMode}
              onChange={handleDarkModeToggle}
              inputProps={{ 'aria-label': 'toggle dark mode' }}
            />
            <Typography variant="body2" sx={{ marginLeft: '8px' }}>
              {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </Typography>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
