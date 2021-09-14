import React from 'react';
import Card from '../Components/Cart/Card';
import classes from './OrderSummery.module.css';

const OrderSummerty = () => {
	return (
		<section className={classes.summery}>
			<div className={classes['section-wrapper']}>
				<Card />
			</div>
		</section>
	);
};

export default OrderSummerty;
