import { Container, Row, Col, Image } from 'react-bootstrap';

export default function About() {
  return (
    <Container id="about" className="py-5">
      <h2 className="text-center mb-4">About Me</h2>
      <Row className="align-items-center">
        <Col md={4} className="text-center">
          <Image
            src="https://via.placeholder.com/200"
            roundedCircle
            alt="Vedanth"
            fluid
          />
        </Col>
        <Col md={8}>
          <p>
            I'm a passionate Software Engineer currently working at Trianz. With
            experience in Full Stack Development, DevOps, and Cloud, I’ve built
            scalable solutions using React, Node.js, AWS, Jenkins, Docker,
            Kubernetes and more. I love blending development with cloud
            automation and believe in building smart, resilient systems.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
