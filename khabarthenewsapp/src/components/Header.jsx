// components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import NewsIcon from '../assets/NewsIcon';
import { toggleDarkMode } from '../assets/Themes';

const Header = () => {
  const dispatch = useDispatch();

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <NewsIcon/>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Khabar The News App
        </Typography>
        <Switch
          color="default"
          checked={false}
          onChange={handleDarkModeToggle}
          inputProps={{ 'aria-label': 'toggle dark mode' }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
