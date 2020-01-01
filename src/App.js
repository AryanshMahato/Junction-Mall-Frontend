import React from 'react';

import Header from './Components/Global/Header/Header';
import HeroBox from './Components/HeroBox/HeroBox';
import FooterMobile from './Components/Global/Footer-Mobile/FooterMobile';

import './CSS/Main.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<HeroBox />
			<FooterMobile />
		</div>
	);
}

export default App;
