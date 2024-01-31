import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container  ">
                <Link className="navbar-brand" to="/">Gestion etudiants</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav ">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" style={{ margin: '0 1rem' }} to="/">Afficher</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " style={{ margin: '0 1rem' }} to="/ajouter">Ajouter</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " style={{ margin: '0 1rem' }} to="/modifier">Modifier</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " style={{ margin: '0 1rem' }} to="/supprimer">Supprimer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/rechercher">Rechercher</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
