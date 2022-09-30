import React, { useEffect, useRef, useState } from 'react';
import { marketing } from '../../utils/constant';
import EmailMarkting from './subComponent/emailMarketing';
function MarketingHero() {
	const [ activePanel, setActivePanel ] = useState('Direct Mail Marketing');
	const [ singlePanel, setSinglePanel ] = useState('');
	const videoRef = useRef();
	useEffect(() => {
		const singleValue = marketing.find((i) => i.title == activePanel);
		setSinglePanel(singleValue);
	}, []);
	const sublinkComponents = (value) => {
		setActivePanel(value);
		const singleValue = marketing.find((i) => i.title == value);
		setSinglePanel(singleValue);
	};
	return (
		<main className="market-con">
			<video ref={videoRef} autoPlay={true} muted loop id="myVideo">
				<source src="./images/mail3.mp4" type="video/mp4" />
			</video>
			<section className="background-layout" />
			<section className="content-con">
				<div className="content-wrap">
					<div className="content-links">
						<ul className="content-ul-links">
							<li
								onClick={() => sublinkComponents('Direct Mail Marketing')}
								className={activePanel == 'Direct Mail Marketing' ? 'activePanelLink' : ''}
							>
								<img src="./images/direct-marketing.png" alt="" />
								Direct Mail Marketing
							</li>
							<li
								onClick={() => sublinkComponents('Email Marketing')}
								className={activePanel == 'Email Marketing' ? 'activePanelLink' : ''}
							>
								<img src="./images/mail.png" alt="" />
								Email Marketing
							</li>
							<li
								onClick={() => sublinkComponents('Social Media')}
								className={activePanel == 'Social Media' ? 'activePanelLink' : ''}
							>
								<img src="./images/social-market.png" alt="" />
								Social Media
							</li>
						</ul>
					</div>
					<div className="panel-con">
						<EmailMarkting content={singlePanel} />
					</div>
				</div>
			</section>
		</main>
	);
}

export default MarketingHero;
