import React, { useEffect, useRef, useState } from 'react';
import Hats from './subComponents/hats';
import { promotion } from '../../utils/constant';
function PromotionalHero() {
	const [ activePanel, setActivePanel ] = useState('Hats');
	const [ singlePanel, setSinglePanel ] = useState('');
	const videoRef = useRef();
	useEffect(() => {
		const singleValue = promotion.find((i) => i.title == activePanel);
		setSinglePanel(singleValue);
	}, []);
	const sublinkComponents = (value) => {
		setActivePanel(value);
		const singleValue = promotion.find((i) => i.title == value);
		setSinglePanel(singleValue);
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
							<li
								onClick={() => sublinkComponents('Pens')}
								className={activePanel == 'Pens' ? 'activePanelLink' : ''}
							>
								<img src="./images/pen.png" alt="" />
								Pens
							</li>
							<li
								onClick={() => sublinkComponents('Shirts')}
								className={activePanel == 'Shirts' ? 'activePanelLink' : ''}
							>
								<img src="./images/tshirt.png" alt="" />
								Shirts
							</li>
							<li
								onClick={() => sublinkComponents('Stickers')}
								className={activePanel == 'Stickers' ? 'activePanelLink' : ''}
							>
								<img src="./images/sticker.png" alt="" />
								Stickers
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
						<Hats content={singlePanel} />
					</div>
				</div>
			</section>
		</main>
	);
}

export default PromotionalHero;
