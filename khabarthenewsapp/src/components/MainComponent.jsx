// components/MainComponent.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Tab, Tabs } from 'react-bootstrap';
import { fetchTopStories, fetchAllNews } from '../actions/newsAction.jsx';
import TopStories from './TopStories';
import AllStories from './AllStories';
import { useNavigate } from 'react-router-dom';
import { useUserAuthentication } from '../authentication/UsersAuthenticationContext.jsx';

const MainComponent = () => {
  const { signOut, user } = useUserAuth();


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
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
  <div>
    <Tabs defaultActiveKey="top-stories" id="main-tabs" onSelect={(key) => navigate(`/${key}`)}>
      <Tab eventKey="top-stories" title="Top Stories">
        <TopStories />
      </Tab>
      <Tab eventKey="all-news" title="All News">
        <AllStories />
      </Tab>
      </Tabs>
  </div>
  );
};

export default MainComponent;
