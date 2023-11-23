// components/TopStories.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs, Container, Row, Col, Card } from 'react-bootstrap';
import AllStories from './AllStories';

const TopStories = () => {

  const topStories = useSelector((state) => state.topStories);
  const navigate = useNavigate();

  return (
    <Container>
      <h2 className="mt-4">Top Stories</h2>
      <Tabs
        defaultActiveKey="top-stories"
        id="main-tabs"
        onSelect={(key) => navigate(`/${key}`)}
        className="mb-4"
      >
        <Tab eventKey="top-stories" title="Top Stories">
          <Row className="mt-3">
            {topStories.map((story) => (
              <Col key={story.uuid} xs={12} md={6} lg={4} className="mb-4">
                <Card>
                  {story.image_url && (
                    <Card.Img variant="top" src={story.image_url} alt={story.title} />
                  )}
                  <Card.Body>
                    <Card.Title>{story.title}</Card.Title>
                    <Card.Text>{story.description}</Card.Text>
                    <Card.Text>
                      <small className="text-muted">
                      Published at: {new Date(story.published_at).toLocaleString()}
                      </small>
                    </Card.Text>
                    <a
                      href={story.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Read More
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>
        <Tab eventKey="all-news" title="All News">
          <AllStories />
        </Tab>
        </Tabs>
    </Container>
  );
};

export default TopStories;
