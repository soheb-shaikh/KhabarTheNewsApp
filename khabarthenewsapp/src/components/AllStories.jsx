// src/components/AllStories.js
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';

const AllStories = () => {
  const allStories = useSelector((state) => state.allStories);

  return (
    <div>
      <h2>All Stories</h2>
      <ul>
        {allStories?.map((story) => (
          <li key={story.uuid}>
            <div>
              <h3>{story.title}</h3>
              {story.image_url && <img src={story.image_url} alt={story.title} />}
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

export default AllStories;
