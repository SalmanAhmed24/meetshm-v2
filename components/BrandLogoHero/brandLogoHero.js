import React, { useEffect, useRef, useState } from 'react';
import LogoPanel from './subComponents/logoDesignPanel/logoPanel';
function BrandHero() {
	const [ activePanel, setActivePanel ] = useState('Logo Design');
	const videoRef = useRef();
	const sublinkComponents = (value) => {
		console.log('$$$', value);
		setActivePanel(value);
	};
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
								onClick={() => sublinkComponents('Logo Design')}
								className={activePanel == 'Logo Design' ? 'activePanelLink' : ''}
							>
								<img src="./images/logo-design.png" alt="" />
								Logo Design
							</li>
							<li>
								<img src="./images/logo-design.png" alt="" />
								Logo Design
							</li>
							<li>
								<img src="./images/logo-design.png" alt="" />
								Logo Design
							</li>
							<li>
								<img src="./images/logo-design.png" alt="" />
								Logo Design
							</li>
							<li>
								<img src="./images/logo-design.png" alt="" />
								Logo Design
							</li>
							<li>
								<img src="./images/logo-design.png" alt="" />
								Logo Design
							</li>
						</ul>
					</div>
					<div className="panel-con">{activePanel == 'Logo Design' ? <LogoPanel /> : null}</div>
				</div>
			</section>
		</main>
	);
}

export default BrandHero;
