import React from 'react';

import one from '../../../../Images/Events/1.jpg';
import two from '../../../../Images/Events/2.jpg';
import three from '../../../../Images/Events/3.jpg';
import four from '../../../../Images/Events/4.jpg';

export default function Events() {
	return (
		<div className='event'>
			<h1 className='event__annotation'>Events in our mall</h1>
			<div className='event-content'>
				<img src={one} alt='First' className='event-one' />
				<img src={two} alt='First' className='event-two' />
				<img src={three} alt='First' className='event-three' />
				<img src={four} alt='First' className='event-four' />
			</div>
		</div>
	);
}
