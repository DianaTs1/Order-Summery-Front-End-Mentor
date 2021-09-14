import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
	let buttonClasses = `${styles.button}`;

	if (props.status === 'active') {
		buttonClasses += ` ${styles.active}`;
	}
	if (props.status === 'inactive') {
		buttonClasses += ` ${styles.inactive}`;
	}
	return <button className={buttonClasses}>{props.buttonText}</button>;
};

export default Button;
