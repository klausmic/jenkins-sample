import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: "Concierto Cloud POC",
    description: "Built a multi-cloud management POC using AWS, Jenkins, and custom automation scripts.",
    link: "https://github.com/klausmic/",
  },
  {
    title: "Medical Services Website",
    description: "Full-stack website for managing medical resources with React and Node.js.",
    link: "https://github.com/klausmic",
  },
  {
    title: "Dockerized MERN Portfolio",
    description: "Containerized a MERN stack portfolio website using Docker and deployed with Docker Compose for easier scaling.",
    link: "https://github.com/klausmic/docker-mern-portfolio",
  },
  {
    title: "Kubernetes Microservices Deployment",
    description: "Deployed a set of Node.js microservices on a Kubernetes cluster with Ingress and Auto-scaling.",
    link: "https://github.com/klausmic/k8s-microservices",
  },
  {
    title: "Terraform Infra as Code",
    description: "Automated the provisioning of AWS infrastructure (EC2, VPC, S3) using Terraform modules.",
    link: "https://github.com/klausmic/terraform-infra",
  },
  {
    title: "CI/CD with Jenkins",
    description: "Implemented a full CI/CD pipeline using Jenkins for a React app with GitHub Webhooks and Nginx deployment.",
    link: "https://github.com/klausmic/jenkins-cicd-pipeline",
  },
  {
    title: "Monitoring with Prometheus & Grafana",
    description: "Set up infrastructure monitoring for Linux servers using Prometheus, Node Exporter, and Grafana dashboards.",
    link: "https://github.com/klausmic/monitoring-stack",
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
