import React from 'react';

import Food from './Food/Food';
import Shopping from './Shopping/Shopping';
import Events from './Events/Events';

export default function OfferContent(props) {
	const content = () => {
		if (props.menuActive === 'food') {
			return <Food />;
		}
		if (props.menuActive === 'shopping') {
			return <Shopping />;
		}
		if (props.menuActive === 'events') {
			return <Events />;
		}
		if (props.menuActive === 'entertainment') {
			return <div className='entertainment-content'></div>;
		}
	};

	return <div className='offer-content'>{content()}</div>;
}
