import React, { useEffect, useRef, useState } from 'react';
import Web from './subComponent/web';
function WebAppHero() {
	const [ activePanel, setActivePanel ] = useState('Web development');
	const videoRef = useRef();
	const sublinkComponents = (value) => {
		setActivePanel(value);
	};
	return (
		<main className="webapp-con">
			<video ref={videoRef} autoPlay={true} muted loop id="myVideo">
				<source src="./images/web.mp4" type="video/mp4" />
			</video>
			<section className="background-layout" />
			<section className="content-con">
				<div className="content-wrap">
					<div className="content-links">
						<ul className="content-ul-links">
							<li
								onClick={() => sublinkComponents('Web development')}
								className={activePanel == 'Web development' ? 'activePanelLink' : ''}
							>
								<img src="./images/internet.png" alt="" />
								Web development
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
						<div className="arrow-wrap">
							<p>
								View Details<span>
									<img src="./images/right-arrow.png" alt="" />
								</span>
							</p>
						</div>
						<Web />
					</div>
				</div>
			</section>
		</main>
	);
}

export default WebAppHero;
