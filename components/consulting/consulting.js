import React, { useEffect, useRef, useState } from 'react';
import BrandConsult from './subComponent/brandConsult';
import { consulting } from '../../utils/constant';
function ConsultingHero() {
	const [ activePanel, setActivePanel ] = useState('Start Up');
	const [ singlePanel, setSinglePanel ] = useState('');
	const videoRef = useRef();
	useEffect(() => {
		const singleValue = consulting.find((i) => i.title == activePanel);
		setSinglePanel(singleValue);
	}, []);
	const sublinkComponents = (value) => {
		setActivePanel(value);
		const singleValue = consulting.find((i) => i.title == value);
		setSinglePanel(singleValue);
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
								onClick={() => sublinkComponents('Start Up')}
								className={activePanel == 'Start Up' ? 'activePanelLink' : ''}
							>
								<img src="./images/rocket.png" alt="" />
								Start Up
							</li>
							<li
								onClick={() => sublinkComponents('Financial')}
								className={activePanel == 'Financial' ? 'activePanelLink' : ''}
							>
								<img src="./images/assets.png" alt="" />
								Financial
							</li>
							<li
								onClick={() => sublinkComponents('Marketing Plan')}
								className={activePanel == 'Marketing Plan' ? 'activePanelLink' : ''}
							>
								<img src="./images/strategy.png" alt="" />
								Marketing Plan
							</li>
							<li
								onClick={() => sublinkComponents('Go To Market')}
								className={activePanel == 'Go To Market' ? 'activePanelLink' : ''}
							>
								<img src="./images/market.png" alt="" />
								Go To Market
							</li>
							<li
								onClick={() => sublinkComponents('Investor')}
								className={activePanel == 'Investor' ? 'activePanelLink' : ''}
							>
								<img src="./images/investor.png" alt="" />
								Investor
							</li>
							<li
								onClick={() => sublinkComponents('Technology')}
								className={activePanel == 'Technology' ? 'activePanelLink' : ''}
							>
								<img src="./images/tech.png" alt="" />
								Technology
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
						<BrandConsult content={singlePanel} />
					</div>
				</div>
			</section>
		</main>
	);
}

export default ConsultingHero;
