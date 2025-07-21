import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router";
import '../assets/css/Header.css'

export default function Header() {
  return (
    <header>
      <Nav className="justify-content-end bg-light">
        <Nav.Item>
          <Nav.Link as={NavLink} to="/" className="text-secondary" end>
            Accueil
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/category/vetements"
            className="text-secondary"
          >
            Vêtements
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/category/chaussures"
            className="text-secondary"
          >
            Chaussures
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}
