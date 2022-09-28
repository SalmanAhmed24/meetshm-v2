import React, { useEffect, useRef, useState } from 'react';
import BrandConsult from './subComponent/brandConsult';
function ConsultingHero() {
	const [ activePanel, setActivePanel ] = useState('brand consulting');
	const videoRef = useRef();
	const sublinkComponents = (value) => {
		setActivePanel(value);
	};
	return (
		<main className="consulting-con">
			<video ref={videoRef} autoPlay={true} muted loop id="myVideo">
				<source src="./images/consult.mp4" type="video/mp4" />
			</video>
			<section className="background-layout" />
			<section className="content-con">
				<div className="content-wrap">
					<div className="content-links">
						<ul className="content-ul-links">
							<li
								onClick={() => sublinkComponents('brand consulting')}
								className={activePanel == 'brand consulting' ? 'activePanelLink' : ''}
							>
								<img src="./images/brand-consult.png" alt="" />
								Brand Consulting
							</li>
							<li>
								<img src="./images/internet.png" alt="" />
								Marketing 2
							</li>
							<li>
								<img src="./images/internet.png" alt="" />
								Marketing 3
							</li>
							<li>
								<img src="./images/internet.png" alt="" />
								Marketing 4
							</li>
							<li>
								<img src="./images/internet.png" alt="" />
								Marketing 5
							</li>
							<li>
								<img src="./images/internet.png" alt="" />
								Marketing 6
							</li>
						</ul>
					</div>
					<div className="panel-con">
						{activePanel.toLowerCase() == 'brand consulting' ? <BrandConsult /> : null}
					</div>
				</div>
			</section>
		</main>
	);
}

export default ConsultingHero;
