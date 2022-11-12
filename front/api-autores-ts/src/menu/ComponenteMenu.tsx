import { Link, NavLink } from "react-router-dom";

export default function ComponenteMenu(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Api - Autore</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/principal">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/autores">Autores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/libros">Libros</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}