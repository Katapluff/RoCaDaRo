import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import "./FooterButtons.css";

function FooterButtons() {
  return (
    <div>
      <Link to="/about">
        <Badge bg="light" text="dark" className="footer-badge">
          Über uns
        </Badge>
      </Link>{" "}
      <a href="mailto:rocadaro@example.com">
        <Badge bg="light" text="dark" className="footer-badge">
          Kontakt
        </Badge>
      </a>{" "}
      <Link to="/AGB">
        <Badge bg="light" text="dark" className="footer-badge">
          AGB
        </Badge>
      </Link>{" "}
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <Badge bg="light" text="dark" className="footer-badge">
          <FaTwitter />
        </Badge>
      </a>{" "}
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <Badge bg="light" text="dark" className="footer-badge">
          <FaFacebook />
        </Badge>
      </a>{" "}
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <Badge bg="light" text="dark" className="footer-badge">
          <FaInstagram />
        </Badge>
      </a>{" "}
    </div>
  );
}

export default FooterButtons;
