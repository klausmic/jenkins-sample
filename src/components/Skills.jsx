import { Container, Row, Col } from 'react-bootstrap';
import { FaAws, FaDocker, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiKubernetes, SiMongodb, SiPython, SiJenkins, SiAnsible, SiTerraform } from 'react-icons/si';

const skills = [
  { icon: <FaAws size={40} />, name: "AWS" },
  { icon: <FaDocker size={40} />, name: "Docker" },
  { icon: <SiKubernetes size={40} />, name: "Kubernetes" },
  { icon: <FaReact size={40} />, name: "ReactJS" },
  { icon: <FaNodeJs size={40} />, name: "NodeJS" },
  { icon: <SiMongodb size={40} />, name: "MongoDB" },
  { icon: <SiPython size={40} />, name: "Python" },
  { icon: <SiJenkins size={40} />, name: "Jenkins" },
  { icon: <SiAnsible size={40} />, name: "Ansible" },
  { icon: <SiTerraform size={40} />, name: "Terraform" },
];

export default function Skills() {
  return (
    <Container id="skills" className="py-5 text-center">
      <h2 className="mb-4">Skills</h2>
      <Row className="justify-content-center">
        {skills.map((skill, idx) => (
          <Col key={idx} xs={6} sm={4} md={3} lg={2} className="mb-4">
            <div>{skill.icon}</div>
            <div className="mt-2">{skill.name}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
