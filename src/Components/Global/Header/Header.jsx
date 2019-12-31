import React from 'react';

import Logo from '../../../Assets/Logo.svg';
import TimeRemainingLogo from '../../../Assets/Time-Remaining-Logo.svg';

export default function Header() {
	return (
		<div className='main-header'>
			<div className='logo'>
				<img src={Logo} alt='Logo' />
			</div>
			<hr />
			<div className='time-remaining-for-sale'>
				<img src={TimeRemainingLogo} alt='Time Remaining Logo' />
				<div className='time-remaining__annotation'>
					<span>Hurry Up Sale is going on</span>
					<span className='time-remaining'>20:15:32</span>
				</div>
			</div>
		</div>
	);
}
