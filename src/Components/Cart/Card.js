import React from 'react';
import Button from '../UI/Button';
import PlanSummery from './PlanSummery';
import img from '../../photos/illustration-hero.svg';
import classes from './Card.module.css';

const Card = () => {
	return (
		<section className={classes.card}>
			<img src={img} alt="person dancing and listning to music" />
			<div className={classes.content}>
				<h1>Order Summery</h1>
				<p className={classes.paragraph}>
					You can now listen to millions of songs, audiobooks, and podcasts on
					any device anywhere you like
				</p>
				<PlanSummery />
				<Button status="active" buttonText="Order Now" />
				<Button status="inactive" buttonText="Cancel Order" />
			</div>
		</section>
	);
};

export default Card;
