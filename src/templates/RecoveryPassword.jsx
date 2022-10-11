import React from 'react';
import styles from '@styles/RecoveryPassword.module.scss';
import logo from '@logos/logo_yard_sale.svg';

const PasswordRecovery = () => {
	return (
		<div className={styles.PasswordRecovery}>
			<div className={styles["PasswordRecovery-container"]}>
				<img src={logo} alt="logo" className={styles["PasswordRecovery-logo"]} />
				<h1 className={styles.title}>Password recovery</h1>
				<p className={styles.subtitle}>Inform the email address used to create your account</p>
				<form action="/" className={styles.form}>
					<label htmlFor="email" className={styles.label}>Email address</label>
					<input type="text" id="email" className={styles["input input-email"]} />
					<input type="submit" value="Confirm" className={`${styles["primary-button"]} ${styles["login-button"]}`} />
				</form>
			</div>
		</div>
	);
}

export default PasswordRecovery;
