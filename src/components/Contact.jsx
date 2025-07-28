import { Container, Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <Container id="contact" className="py-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Write something..." />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  );
}
