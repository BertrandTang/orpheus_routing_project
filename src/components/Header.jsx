import Nav from "react-bootstrap/Nav";
import { NavLink, useMatch } from "react-router";
import "../assets/css/Header.css";

export default function Header() {
  const match = useMatch("/category/:query");

  return (
    <header>
      <Nav className="bg-light d-flex justify-content-between">
        <Nav.Item>
          {match ? (
            <p className="mb-0 py-2 ps-3">Catégorie : {match.params.query}</p>
          ) : (
            <p className="mb-0 py-2 ps-3">Bienvenue sur le site</p>
          )}
        </Nav.Item>
        <div className="d-flex">
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
        </div>
      </Nav>
    </header>
  );
}
