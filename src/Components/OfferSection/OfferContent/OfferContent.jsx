import React from 'react';

import OneShopping from '../../../Images/Shopping/one.png';
import TwoShopping from '../../../Images/Shopping/two.svg';
import ThreeShopping from '../../../Images/Shopping/three.png';
import FourShopping from '../../../Images/Shopping/four.jpg';

import OneFood from '../../../Images/Food/one.jpg';
import TwoFood from '../../../Images/Food/two.png';
import ThreeFood from '../../../Images/Food/three.jpg';
import FourFood from '../../../Images/Food/four.png';

export default function OfferContent(props) {
	const content = () => {
		if (props.menuActive === 'food') {
			return (
				<div className='food-content'>
					<img src={OneFood} className='food-one' alt='food-one' />
					<img src={TwoFood} className='food-two' alt='food-two' />
					<img src={ThreeFood} className='food-three' alt='food-three' />
					<img src={FourFood} className='food-four' alt='food-four' />
				</div>
			);
		}
		if (props.menuActive === 'shopping') {
			return (
				<div className='shopping-content'>
					<img src={OneShopping} className='shopping-one' alt='shopping-one' />
					<img src={TwoShopping} className='shopping-two' alt='shopping-two' />
					<img
						src={ThreeShopping}
						className='shopping-three'
						alt='shopping-three'
					/>
					<img
						src={FourShopping}
						className='shopping-four'
						alt='shopping-four'
					/>
				</div>
			);
		}
		if (props.menuActive === 'events') {
			return <div className='events-content'></div>;
		}
		if (props.menuActive === 'entertainment') {
			return <div className='entertainment-content'></div>;
		}
	};

	return <div className='offer-content'>{content()}</div>;
}
