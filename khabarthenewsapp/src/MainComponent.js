// MainComponent.js
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import TopStories from './TopStories';
import AllNews from './AllNews';
import SimilarNews from './SimilarNews';

const MainComponent = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/main/top-stories">Top Stories</Link></li>
          <li><Link to="/main/all-news">All News</Link></li>
          <li><Link to="/main/similar-news">Similar News</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/main/top-stories" component={TopStories} />
        <Route path="/main/all-news" component={AllNews} />
        <Route path="/main/similar-news" component={SimilarNews} />
      </Switch>
    </div>
  );
};

export default MainComponent;
