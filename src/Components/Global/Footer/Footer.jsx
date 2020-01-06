import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

export default function Footer() {
	return (
		<div className='main-footer'>
			<div className='main-footer__content'>
				<div id='location'>Location by Google Maps</div>
				<div className='contacts'>
					<div className='email'>
						<span>
							<FaEnvelope />
						</span>
						<a href="mailto:junction@junction.com?subject=This Email Doesn't Work">
							junction@junction.com
						</a>
					</div>
					<div className='phone-number'>
						<span>
							<FaPhone />
						</span>
						<span className='number'>+91 955 955 5555</span>
					</div>
					<button className='contact-for-events'>
						Contact Us for Event Hosting
					</button>
				</div>
			</div>
		</div>
	);
}
