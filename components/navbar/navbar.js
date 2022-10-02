import Image from 'next/image';
import Logo from '../../public/images/logo.svg';
import { topLevelPanel } from '../../redux/panel/action';
import { useDispatch } from 'react-redux';
function Navbar() {
	const dispatch = useDispatch();
	const homePanel = (value) => {
		dispatch(topLevelPanel(value));
	};
	return (
		<nav className="navbar-con">
			<div className="navbar-hire-btn-wrap">
				<button>Let&apos;s Get Started</button>
			</div>
			<div className="navbar-logo-wrap" onClick={() => homePanel('Home')}>
				<Image layout="responsive" src={Logo} />
			</div>
			<div className="navabr-contact-wrap">
				<button>Contact Us</button>
			</div>
		</nav>
	);
}

export default Navbar;
