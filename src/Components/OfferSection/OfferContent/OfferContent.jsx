import React from 'react';

import ZaraLogo from '../../../Images/Zara.svg';

export default function OfferContent(props) {
	const content = () => {
		if (props.menuActive === 'food') {
			return <div className='food-content'></div>;
		}
		if (props.menuActive === 'shopping') {
			return (
				<div className='shopping-content'>
					<img src={ZaraLogo} className='one' alt='Zara-Logo' />
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
