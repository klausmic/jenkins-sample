import { Container, Row, Col, Image } from 'react-bootstrap';
import { Fade, Slide } from 'react-awesome-reveal';
import './About.css';

export default function About() {
  return (
    <Container id="about" className="py-5">
      <Fade direction="down" triggerOnce>
        <h2 className="text-center mb-5 stylish-heading">👨‍💻 About Me</h2>
      </Fade>
      <Row className="align-items-center">
        <Col md={4} className="text-center mb-4 mb-md-0">
          <Slide direction="left" triggerOnce>
            <div className="image-wrapper">
              <Image
                src="https://via.placeholder.com/200"
                roundedCircle
                alt="Vedanth"
                fluid
                className="about-image"
              />
            </div>
          </Slide>
        </Col>
        <Col md={8}>
          <Slide direction="right" triggerOnce>
            <div className="about-text-box">
              <p className="about-text">
                🚀 I'm a passionate <strong>Software Engineer</strong> at <strong>Trianz</strong>, blending Full Stack Development, DevOps, and Cloud into smart solutions. <br /><br />
                🔧 I’ve built scalable systems using <strong>React, Node.js, AWS, Jenkins, Docker, Kubernetes</strong> and more. <br /><br />
                💡 I thrive on cloud automation and love creating resilient infrastructures that empower businesses and users alike.
              </p>
            </div>
          </Slide>
        </Col>
      </Row>
    </Container>
  );
}
