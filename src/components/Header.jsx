import Nav from "react-bootstrap/Nav";
import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <Nav activeKey="/" className="justify-content-end bg-light">
        <Nav.Item>
          <Nav.Link as={Link} to="/" className="text-secondary">
            Accueil
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/vetements" className="text-secondary">
            Vêtements
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/chaussures" className="text-secondary">
            Chaussures
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}
