import Image from 'next/image';
import Logo from '../../public/images/logo.svg';
function Navbar() {
	return (
		<nav className="navbar-con">
			<div className="navbar-hire-btn-wrap">
				<button>Hire A Developer</button>
			</div>
			<div className="navbar-logo-wrap">
				<Image layout="responsive" src={Logo} />
			</div>
			<div className="navabr-contact-wrap">
				<button>Contact Us</button>
			</div>
		</nav>
	);
}

export default Navbar;
