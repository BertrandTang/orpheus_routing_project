import { useParams } from "react-router";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

export default function Category() {
  const { category } = useParams();
  const navigate = useNavigate();

  function backToHomePage() {
    navigate('/');
  }

  return (
    <div>
      <h1>{category}</h1>
      <Button variant="primary" onClick={backToHomePage}>Retour à la page d'accueil</Button>
    </div>
  );
}