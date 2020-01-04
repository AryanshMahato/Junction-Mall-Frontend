import React from 'react';

import Food from './Food/Food';
import Shopping from './Shopping/Shopping';

export default function OfferContent(props) {
	const content = () => {
		if (props.menuActive === 'food') {
			return <Food />;
		}
		if (props.menuActive === 'shopping') {
			return <Shopping />;
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
