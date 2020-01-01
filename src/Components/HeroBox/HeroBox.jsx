import React from 'react';

import Image1 from '../../Images/1.jpg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function HeroBox() {
	return (
		<div className='hero-box' id='hero-box'>
			<div id='hero-box__left-arrow'>
				<IoIosArrowBack />
			</div>
			<div id='hero-box__right-arrow'>
				<IoIosArrowForward />
			</div>
			<img src={Image1} alt='Hero-Image' />
		</div>
	);
}
