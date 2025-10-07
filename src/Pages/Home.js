import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <Container style={{ padding: "20px" }}>
      <Row className="g-4">
        {/* Card 1 */}
        <Col md={3}>
          <Card style={{ width: "100%" }}>
            <video
              width="100%"
              height="200"
              controls
              muted
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support video.
            </video>
            <Card.Body>
              <Card.Title>Cartoon 1</Card.Title>
              <Card.Text>30s cartoon video.</Card.Text>
              <Button variant="danger">Play</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col md={3}>
          <Card style={{ width: "100%" }}>
            <video
              width="100%"
              height="200"
              controls
              muted
            >
              <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
            </video>
            <Card.Body>
              <Card.Title>Cartoon 2</Card.Title>
              <Card.Text>Another 30s clip.</Card.Text>
              <Button variant="danger">Play</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col md={3}>
          <Card style={{ width: "100%" }}>
            <video
              width="100%"
              height="200"
              controls
              muted
            >
              <source src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" type="video/mp4" />
            </video>
            <Card.Body>
              <Card.Title>Cartoon 3</Card.Title>
              <Card.Text>Short fun clip.</Card.Text>
              <Button variant="danger">Play</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 4 */}
        <Col md={3}>
          <Card style={{ width: "100%" }}>
            <video
              width="100%"
              height="200"
              controls
              muted
            >
              <source src="https://samplelib.com/lib/preview/mp4/sample-10s.mp4" type="video/mp4" />
            </video>
            <Card.Body>
              <Card.Title>Cartoon 4</Card.Title>
              <Card.Text>Kids animation.</Card.Text>
              <Button variant="danger">Play</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
