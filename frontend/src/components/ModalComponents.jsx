import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { loginApi } from "../api";
import { useState } from "react";
import Store from "../store/Context";
import CreateUser from "./CreateUser";

function ModalComponents({ isModalOpen, handleModalToggle }) {
  const { setShowModal } = Store();
  const [showCreateUser, setShowCreateUser] = useState(false); // Zustand hinzugefügt
  const [showLoginForm, setShowLoginForm] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // loginApi({ email: email, password: password });
    const result = await loginApi({ email: email, password: password });
    console.log(result);
    if (result?.message === "Anmeldung erfolgreich") {
      handleModalToggle();
    }
    //setShowModal(false);
  };

  //1.
  //
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    setShowCreateUser(false);
    setShowLoginForm(true);
  };

  const handleCreateUserClick = () => {
    setShowCreateUser(true);
    setShowLoginForm(false);
  };
  const handleCreateUserSuccess = () => {
    setShowCreateUser(true);
    setShowLoginForm(true);
    handleModalToggle();
  };

  //
  return (
    <Modal
      //className="modal show"
      show={isModalOpen}
      centered
    >
      <Modal.Dialog>
        <Modal.Header
          closeButton
          variant="secondary"
          onClick={handleModalToggle}
        >
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {showLoginForm ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(evt) => setPassword(evt.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          ) : (
            <CreateUser onSuccess={handleCreateUserSuccess} />
          )}
        </Modal.Body>

        <Modal.Footer style={{display: "flex", justifyContent: "center"}}>
          {showLoginForm ? (
            <Button onClick={handleCreateUserClick} variant="primary">
              CreateUser{" "}
            </Button>
          ) : (
            <Button onClick={handleLoginClick} variant="primary">
              Back to Login
            </Button>
          )}
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
ModalComponents.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleModalToggle: PropTypes.func.isRequired,
};

export default ModalComponents;
