// components/TopStories.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs } from 'react-bootstrap';
import AllStories from './AllStories';

const TopStories = () => {

  const topStories = useSelector((state) => state.topStories);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Top Stories</h2>
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
      <ul>
        {topStories.map((story) => (
          <li key={story.uuid}>
            <div>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
              <p>Published at: {new Date(story.published_at).toLocaleString()}</p>
              <a href={story.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopStories;
