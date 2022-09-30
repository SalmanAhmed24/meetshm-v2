import React, { useEffect, useRef, useState } from 'react';
import LogoPanel from './subComponents/logoDesignPanel/logoPanel';
import { brandLogo } from '../../utils/constant';
function BrandHero() {
	const [ activePanel, setActivePanel ] = useState('Brand Development');
	const [ singlePanel, setSinglePanel ] = useState('');
	const videoRef = useRef();
	useEffect(() => {
		const singleValue = brandLogo.find((i) => i.title == activePanel);
		setSinglePanel(singleValue);
	}, []);
	const sublinkComponents = (value) => {
		setActivePanel(value);
		const singleValue = brandLogo.find((i) => i.title == value);
		setSinglePanel(singleValue);
	};
	console.log('singlePanel', singlePanel);
	return (
		<main className="brand-con">
			<video ref={videoRef} autoPlay={true} muted loop id="myVideo">
				<source src="./images/brand.mp4" type="video/mp4" />
			</video>
			<section className="background-layout" />
			<section className="content-con">
				<div className="content-wrap">
					<div className="content-links">
						<ul className="content-ul-links">
							<li
								onClick={() => sublinkComponents('Brand Development')}
								className={activePanel == 'Brand Development' ? 'activePanelLink' : ''}
							>
								<img src="./images/brand-w.png" alt="" />
								Brand Development
							</li>
							<li
								onClick={() => sublinkComponents('Logo Design')}
								className={activePanel == 'Logo Design' ? 'activePanelLink' : ''}
							>
								<img src="./images/logo-design.png" alt="" />
								Logo Design
							</li>
							<li
								onClick={() => sublinkComponents('Color Scheme')}
								className={activePanel == 'Color Scheme' ? 'activePanelLink' : ''}
							>
								<img src="./images/color-palette.png" alt="" />
								Color Scheme
							</li>
							<li
								onClick={() => sublinkComponents('Slogan')}
								className={activePanel == 'Slogan' ? 'activePanelLink' : ''}
							>
								<img src="./images/slogan.png" alt="" />
								Slogan
							</li>
							<li
								onClick={() => sublinkComponents('Audio')}
								className={activePanel == 'Audio' ? 'activePanelLink' : ''}
							>
								<img src="./images/mic.png" alt="" />
								Audio
							</li>
						</ul>
					</div>
					<div className="panel-con">
						<LogoPanel content={singlePanel} />
					</div>
				</div>
			</section>
		</main>
	);
}

export default BrandHero;
