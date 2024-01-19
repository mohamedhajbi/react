import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/survey/1000">Questionnaire</Link>
    </nav>
  );
}
export default Header;