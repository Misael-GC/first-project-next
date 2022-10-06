import React from 'react';
import '../styles/NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
    <div className="errorDialogue">
    <h1 className="tracking-in-contract-bck-top">¡Error!</h1>
    <h1 className="focus-in-contract-bck">404</h1>
    <h3 className="text-shadow-pop-top">Página no encontrada  &#128549;</h3>
    <Link to="/" className="home-page-link">👉Regresa a la página de inicio👈</Link>
</div>
	);
}

export default NotFound;