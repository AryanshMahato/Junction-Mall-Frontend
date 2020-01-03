import React, { Component } from 'react';

import Header from './Components/Global/Header/Header';
import HeroBox from './Components/HeroBox/HeroBox';
import FooterMobile from './Components/Global/Footer-Mobile/FooterMobile';
import MenuList from './Components/MenuList/MenuList';

import './CSS/Main.css';

export default class App extends Component {
	state = {
		menuActive: 'food'
	};

	menuListClicked = menuName => {
		this.setState({
			menuActive: menuName
		});
	};

	render() {
		return (
			<div className='App'>
				<Header />
				<HeroBox />
				<FooterMobile />
				<MenuList
					menuListClick={this.menuListClicked}
					menuActive={this.state.menuActive}
				/>
				{/* For Development Only */}
				<div className='development'></div>
			</div>
		);
	}
}
