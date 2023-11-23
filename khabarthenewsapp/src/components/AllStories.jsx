// src/components/AllStories.js
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Tab, Tabs } from 'react-bootstrap';
import TopStories from './TopStories';

const AllStories = () => {
  const allStories = useSelector((state) => state.allStories);

  return (
    <Container>
      <h2 className="mt-4">All Stories</h2>
      <Tabs defaultActiveKey="all-news" id="all-stories-tabs" className="mt-3">
        <Tab eventKey="all-news" title="All News">
          <Row className="mt-3">
            {allStories?.map((story) => (
              <Col key={story.uuid} xs={12} md={6} lg={4} className="mb-4">
                <Card>
                  {story.image_url && <Card.Img variant="top" src={story.image_url} alt={story.title} />}
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
                      className="btn btn-primary">
                      Read More
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>
        <Tab eventKey="top-stories" title="Top Stories">
          <TopStories />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default AllStories;
