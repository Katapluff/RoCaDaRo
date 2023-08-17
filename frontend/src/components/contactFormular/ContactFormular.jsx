import React, { useState } from "react";
import Store from "../../store/Context";
import { Modal, Button, Form } from "react-bootstrap";
const ContactForm = () => {
  // const [showModal, setShowModal] = useState(false);
  const { showModal, setShowModal } = Store();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Close modal
    setShowModal(false);
  };

  return (
    <>
      <Button variant="secondary" onClick={handleModalToggle}>
        Contact
      </Button>

      <Modal show={showModal} onHide={handleModalToggle}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                rows={4}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactForm;
