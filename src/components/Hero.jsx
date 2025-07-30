import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <Container className="text-center py-5" id="home">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="display-4 fw-bold"
      >
        Hey, I'm Vedanth 👋
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="lead text-muted"
      >
        Software Engineer | Full Stack Dev | AWS Certified | DevOps Enthusiast 
      </motion.p>
    </Container>
  );
}
