import React from 'react';

export default function MenuList(props) {
	const classes = menuItem => {
		if (menuItem === props.menuActive) {
			return menuItem + ' active';
		} else {
			return menuItem;
		}
	};

	return (
		<div className='menu-lists'>
			<div className='menu-list-1'>
				<div
					className={classes('food')}
					onClick={() => props.menuListClick('food')}
				>
					Food
				</div>
				<div
					className={classes('shopping')}
					onClick={() => props.menuListClick('shopping')}
				>
					Shopping
				</div>
			</div>
			<div className='menu-list-2'>
				<div
					className={classes('events')}
					onClick={() => props.menuListClick('events')}
				>
					Events
				</div>
				<div
					className={classes('entertainment')}
					onClick={() => props.menuListClick('entertainment')}
				>
					Entertainment
				</div>
			</div>
		</div>
	);
}
