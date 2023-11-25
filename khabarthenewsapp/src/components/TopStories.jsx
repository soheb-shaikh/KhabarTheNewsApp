import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from '@mui/material';
import Header from './Header';
import { useTheme } from '@mui/material/styles';

const TopStories = () => {
  const topStories = useSelector((state) => state.newsPage.topStories);
  const theme = useTheme();

  return (
    <div>
      <Header />
      <Container>
        <Typography variant="h4" component="h2" className="mt-4">
          Top Stories
        </Typography>
        <Grid container spacing={3} className="mt-3">
          {topStories.map((story) => (
            <Grid key={story.uuid} item xs={12} md={6} lg={4}>
              <Card>
                {story.image_url && (
                  <CardMedia
                    component="img"
                    height="140"
                    image={story.image_url}
                    alt={story.title}
                  />
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
                    style={{ backgroundColor: theme.palette.primary.main }}
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

export default TopStories;
