import React, { useEffect, useRef, useState } from 'react';
import EmailMarkting from './subComponent/emailMarketing';
function MarketingHero() {
	const [ activePanel, setActivePanel ] = useState('Marketing 1');
	const videoRef = useRef();
	const sublinkComponents = (value) => {
		setActivePanel(value);
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
								onClick={() => sublinkComponents('Marketing 1')}
								className={activePanel == 'Marketing 1' ? 'activePanelLink' : ''}
							>
								<img src="./images/email-market.png" alt="" />
								Marketing 1
							</li>
							<li>
								<img src="./images/email-market.png" alt="" />
								Marketing 2
							</li>
							<li>
								<img src="./images/email-market.png" alt="" />
								Marketing 3
							</li>
							<li>
								<img src="./images/email-market.png" alt="" />
								Marketing 4
							</li>
							<li>
								<img src="./images/email-market.png" alt="" />
								Marketing 5
							</li>
							<li>
								<img src="./images/email-market.png" alt="" />
								Marketing 6
							</li>
						</ul>
					</div>
					<div className="panel-con">{activePanel == 'Marketing 1' ? <EmailMarkting /> : null}</div>
				</div>
			</section>
		</main>
	);
}

export default MarketingHero;
