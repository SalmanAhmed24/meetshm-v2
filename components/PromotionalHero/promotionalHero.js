import React, { useEffect, useRef, useState } from 'react';
import Hats from './subComponents/hats';
function PromotionalHero() {
	const [ activePanel, setActivePanel ] = useState('Hats');
	const videoRef = useRef();
	const sublinkComponents = (value) => {
		setActivePanel(value);
	};
	return (
		<main className="promotional-con">
			<video ref={videoRef} autoPlay={true} muted loop id="myVideo">
				<source src="./images/promotional.mp4" type="video/mp4" />
			</video>
			<section className="background-layout" />
			<section className="content-con">
				<div className="content-wrap">
					<div className="content-links">
						<ul className="content-ul-links">
							<li
								onClick={() => sublinkComponents('Hats')}
								className={activePanel == 'Hats' ? 'activePanelLink' : ''}
							>
								<img src="./images/cap.png" alt="" />
								Hats
							</li>
							<li>
								<img src="./images/cap.png" alt="" />
								Product 2
							</li>
							<li>
								<img src="./images/cap.png" alt="" />
								Product 3
							</li>
							<li>
								<img src="./images/cap.png" alt="" />
								Product 4
							</li>
							<li>
								<img src="./images/cap.png" alt="" />
								Product 5
							</li>
							<li>
								<img src="./images/cap.png" alt="" />
								Product 6
							</li>
						</ul>
					</div>
					<div className="panel-con">{activePanel == 'Hats' ? <Hats /> : null}</div>
				</div>
			</section>
		</main>
	);
}

export default PromotionalHero;
