import React from 'react';

import one from '../../../../Images/Entertainment/1.jpg';
import two from '../../../../Images/Entertainment/2.jpg';
import three from '../../../../Images/Entertainment/3.jpg';
import four from '../../../../Images/Entertainment/4.jpg';

export default function Entertainment() {
	return (
		<div className='Entertainment'>
			<h1 className='entertainment__annotation'>
				We have so many things to Entertain you
			</h1>
			<div className='entertainment-content'>
				<img src={one} alt='First' className='entertainment-one' />
				<img src={two} alt='Second' className='entertainment-two' />
				<img src={three} alt='Third' className='entertainment-three' />
				<img src={four} alt='Fourth' className='entertainment-four' />
			</div>
		</div>
	);
}
