import React from 'react';

import Food from './Food/Food';
import Shopping from './Shopping/Shopping';
import Events from './Events/Events';
import Entertainment from './Entertainment/Entertainment';

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
			return <Entertainment />;
		}
	};

	return <div className='offer-content'>{content()}</div>;
}
