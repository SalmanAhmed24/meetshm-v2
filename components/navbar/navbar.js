import Image from 'next/image';
// import Logo from '../../public/images/logo.svg';
import { topLevelPanel } from '../../redux/panel/action';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import GetStartedModal from '../modals/getStartedModal';
function Navbar() {
	const dispatch = useDispatch();
	const [ open, setOpen ] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const homePanel = (value) => {
		dispatch(topLevelPanel(value));
	};
	return (
		<nav className="navbar-con">
			<div className="navbar-hire-btn-wrap">
				<button onClick={handleOpen}>Let&apos;s Get Started</button>
			</div>
			<div className="navbar-logo-wrap" onClick={() => homePanel('Home')}>
				{/* <Image layout="responsive" src={Logo} /> */}
				<img src="./images/dark-red-logo.png" alt="SiliconHillsMarketing" className="logo-main" />
			</div>
			<div className="navabr-contact-wrap">
				<button>Contact Us</button>
			</div>
			<GetStartedModal open={open} handleClose={handleClose} />
		</nav>
	);
}

export default Navbar;
