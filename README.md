# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

I needed to build an order summery page 

### The challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

## Desktop
<img width="1670" alt="Screen Shot 2021-09-13 at 10 27 47 PM" src="https://user-images.githubusercontent.com/73934231/133185737-7ea7c8f1-97fa-4b18-91a7-8f9caae65c26.png">

## Mobile

<img width="305" alt="Screen Shot 2021-09-13 at 10 27 34 PM" src="https://user-images.githubusercontent.com/73934231/133186253-fa6bb4ec-9988-4ed5-84fe-9693d7541b80.png">


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### Some JSX code I'm proud of


```
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

```

### Continued development

Next I want to focus on more dynamic web flows

### Useful resources

- https://html-css-js.com/css/generator/box-shadow/ - This helped me for finding the best box-shadow for the buttons
