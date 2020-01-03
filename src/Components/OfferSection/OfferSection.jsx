import React from 'react';

import OfferContent from './OfferContent/OfferContent';

export default function OfferSection(props) {
	const annotation = () => {
		if (props.menuActive === 'food') {
			return (
				<div className='offer-section__annotation'>
					Offers in <span>Food</span>
				</div>
			);
		}
		if (props.menuActive === 'shopping') {
			return (
				<div className='offer-section__annotation'>
					Offers in <span>Shopping</span>
				</div>
			);
		}
		if (props.menuActive === 'events') {
			return (
				<div className='offer-section__annotation'>
					<span>Events</span> at our Mall
				</div>
			);
		}
		if (props.menuActive === 'entertainment') {
			return (
				<div className='offer-section__annotation'>
					Offers in <span>Entertainment</span>
				</div>
			);
		}
	};

	return (
		<div id='offer-section'>
			{annotation()}
			{<OfferContent menuActive={props.menuActive} />}
		</div>
	);
}
