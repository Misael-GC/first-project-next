import React from 'react';
import styles from '@styles/NotFound.module.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
    <div className={styles.errorDialogue}>
    <h1 className={styles["tracking-in-contract-bck-top"]}>¡Error!</h1>
    <h1 className={styles["focus-in-contract-bck"]}>404</h1>
    <h3 className={styles["text-shadow-pop-top"]}>Página no encontrada  &#128549;</h3>
    <Link to="/" className={styles["home-page-link"]}>👉Regresa a la página de inicio👈</Link>
</div>
	);
};

export default NotFound;