import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: "Concierto Cloud POC",
    description: "Built a multi-cloud management POC using AWS, Jenkins, and custom automation scripts.",
    link: "https://github.com/vedanth/concierto-poc",
  },
  {
    title: "Medical Services Website",
    description: "Full-stack website for managing medical resources with React and Node.js.",
    link: "https://github.com/vedanth/med-care",
  },
];

export default function Projects() {
  return (
    <Container id="projects" className="py-5">
      <h2 className="text-center mb-4">Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.link} target="_blank">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
