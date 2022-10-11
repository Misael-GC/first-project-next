import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/SendEmail.module.scss';
import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';

const SendEmail = () => {
	return (
		<div className={styles.SendEmail}>
			<div className={styles["form-container"]}>
				<Image src={logo} alt="logo" className={styles["SendEmail-logo"]} width={25} height={25}/>
				<h1 className={styles.title}>Email has been sent!</h1>
				<p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>
				<div className={styles["email-image"]}>
					<Image src={email} alt="email" width={250} height={250} layout='responsive'/>
				</div>
				<button className={`${styles["primary-button"]} ${styles["login-button"]}`}>Login</button>
				<p className={styles.resend}>
					<span>Did not receive the email?</span>
					<Link href="/">Resend</Link>
				</p>
			</div>
		</div>
	);
};

export default SendEmail;