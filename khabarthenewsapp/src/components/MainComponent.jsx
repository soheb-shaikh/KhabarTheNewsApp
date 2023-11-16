// components/MainComponent.js
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopStories, fetchAllNews, fetchSimilarNews } from '../actions/newsActions';
import TopStories from './TopStories';
import AllNews from './AllNews';
import SimilarNews from './SimilarNews';

const MainComponent = () => {
  const dispatch = useDispatch();

  const topStories = useSelector((state) => state.topStories);
  const allNews = useSelector((state) => state.allNews);
  const similarNews = useSelector((state) => state.similarNews);

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
        <Route path="/main/top-stories">
          <TopStories data={topStories} />
        </Route>
        <Route path="/main/all-news">
          <AllNews data={allNews} />
        </Route>
        <Route path="/main/similar-news">
          <SimilarNews data={similarNews} />
        </Route>
      </Switch>
    </div>
  );
};

export default MainComponent;
