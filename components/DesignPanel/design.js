import React, { useEffect, useRef, useState } from 'react';
import { designPrint } from '../../utils/constant';
import Brochure from './subComponent/brochure';
function DesignHero() {
	const [ activePanel, setActivePanel ] = useState('Business Cards');
	const [ singlePanel, setSinglePanel ] = useState('');
	const videoRef = useRef();
	useEffect(() => {
		const singleValue = designPrint.find((i) => i.title == activePanel);
		setSinglePanel(singleValue);
	}, []);
	const sublinkComponents = (value) => {
		setActivePanel(value);
		const singleValue = designPrint.find((i) => i.title == value);
		setSinglePanel(singleValue);
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
								onClick={() => sublinkComponents('Business Cards')}
								className={activePanel == 'Business Cards' ? 'activePanelLink' : ''}
							>
								<img src="./images/business-cards.png" alt="" />
								Business Cards
							</li>
							<li
								onClick={() => sublinkComponents('Logos')}
								className={activePanel == 'Logos' ? 'activePanelLink' : ''}
							>
								<img src="./images/logo-design.png" alt="" />
								Logos
							</li>
							<li
								onClick={() => sublinkComponents('Postcards')}
								className={activePanel == 'Postcards' ? 'activePanelLink' : ''}
							>
								<img src="./images/postcard.png" alt="" />
								Postcards
							</li>
							<li
								onClick={() => sublinkComponents('Signs')}
								className={activePanel == 'Signs' ? 'activePanelLink' : ''}
							>
								<img src="./images/sign.png" alt="" />
								Signs
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
						<Brochure content={singlePanel} />
					</div>
				</div>
			</section>
		</main>
	);
}

export default DesignHero;
