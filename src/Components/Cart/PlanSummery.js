import React from 'react';
import icon from '../../photos/icon-music.svg';
import classes from './PlanSummery.module.css';

const PlanSummery = () => {
	return (
		<div className={classes.summery}>
			<div className={classes['plan-name-wrapper']}>
				<img src={icon} alt="music icon" />
				<div className={classes['plan-name']}>
					<h3>Annual Plan</h3>
					<p>$59.99/year</p>
				</div>
			</div>
			<a href="">Change</a>
		</div>
	);
};

export default PlanSummery;
