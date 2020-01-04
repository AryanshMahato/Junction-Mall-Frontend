import React from 'react';
import OfferContent from './OfferContent/OfferContent';

export default function OfferSection(props) {
	return (
		<div className='offer-section'>
			<OfferContent menuActive={props.menuActive} />
		</div>
	);
}
