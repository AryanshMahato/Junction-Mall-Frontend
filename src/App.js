import React from "react";

import Header from "./Components/Global/Header/Header";
import HeroBox from "./Components/HeroBox/HeroBox";
import FooterMobile from "./Components/Global/Footer-Mobile/FooterMobile";
import MenuList from "./Components/MenuList/MenuList";

import "./CSS/Main.css";

function App() {
	return (
		<div className="App">
			<Header />
			<HeroBox />
			<FooterMobile />
			<MenuList />
			{/* For Development Only */}
			<div className="development"></div>
		</div>
	);
}

export default App;
