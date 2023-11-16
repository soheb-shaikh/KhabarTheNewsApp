// components/TopStories.js
import React from 'react';

const TopStories = ({ stories }) => {
  return (
    <div>
      <h2>Top Stories</h2>
      <ul>
        {stories.map((story) => (
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
