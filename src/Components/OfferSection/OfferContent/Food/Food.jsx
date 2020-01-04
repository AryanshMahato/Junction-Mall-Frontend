import React from 'react';

import OneFood from '../../../../Images/Food/one.jpg';
import TwoFood from '../../../../Images/Food/two.png';
import ThreeFood from '../../../../Images/Food/three.jpg';
import FourFood from '../../../../Images/Food/four.png';

export default function Food() {
	return (
		<div>
			<div className='food-content'>
				<img src={OneFood} className='food-one' alt='food-one' />
				<img src={TwoFood} className='food-two' alt='food-two' />
				<img src={ThreeFood} className='food-three' alt='food-three' />
				<img src={FourFood} className='food-four' alt='food-four' />
			</div>
		</div>
	);
}
