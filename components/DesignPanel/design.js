import React, { useEffect, useRef, useState } from 'react';
import Brochure from './subComponent/brochure';
function DesignHero() {
	const [ activePanel, setActivePanel ] = useState('brochure design');
	const videoRef = useRef();
	const sublinkComponents = (value) => {
		setActivePanel(value);
	};
	return (
		<main className="design-con">
			<video ref={videoRef} autoPlay={true} muted loop id="myVideo">
				<source src="./images/design.mp4" type="video/mp4" />
			</video>
			<section className="background-layout" />
			<section className="content-con">
				<div className="content-wrap">
					<div className="content-links">
						<ul className="content-ul-links">
							<li
								onClick={() => sublinkComponents('brochure design')}
								className={activePanel == 'brochure design' ? 'activePanelLink' : ''}
							>
								<img src="./images/internet.png" alt="" />
								Brochure Design
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
						{activePanel.toLowerCase() == 'brochure design' ? <Brochure /> : null}
					</div>
				</div>
			</section>
		</main>
	);
}

export default DesignHero;
