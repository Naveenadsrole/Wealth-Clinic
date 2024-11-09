import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import './careerform.css';

const CareerForm = () => {
  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center">
        <Col md={8} className="bgDesgin">
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" required />
            </Form.Group>

            <Form.Group controlId="formPosition" className="mb-3">
              <Form.Label>Position Applied For</Form.Label>
              <Form.Control type="text" placeholder="Enter the position you're applying for" required />
            </Form.Group>

            <Form.Group controlId="formResume" className="mb-3">
              <Form.Label>Resume</Form.Label>
              <Form.Control type="file" required />
            </Form.Group>

            <Form.Group controlId="formCoverLetter" className="mb-3">
              <Form.Label>Cover Letter</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your cover letter" />
            </Form.Group>

            <Form.Group controlId="formLinkedIn" className="mb-3">
              <Form.Label>LinkedIn Profile</Form.Label>
              <Form.Control type="url" placeholder="Enter your LinkedIn profile URL" />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Submit Application
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CareerForm;
