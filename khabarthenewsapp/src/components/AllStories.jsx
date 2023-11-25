import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import Header from './Header';

const AllStories = () => {
  const allStories = useSelector((state) => state.newsPage.allNews);

  return (
    <div>
      <Header />
      <Container>
        <Typography variant="h4" component="h2" className="mt-4">
          All Stories
        </Typography>
        <Grid container spacing={3} className="mt-3">
          {allStories?.map((story) => (
            <Grid key={story.uuid} item xs={12} md={6} lg={4}>
              <Card>
                {story.image_url && (
                  <img src={story.image_url} alt={story.title} style={{ maxWidth: '100%' }} />
                )}
                <CardContent>
                  <Typography variant="h6" component="div">
                    {story.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="div">
                    {story.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="div">
                    Source: {story.source}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="div">
                    Published at: {new Date(story.published_at).toLocaleString()}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={story.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AllStories;
