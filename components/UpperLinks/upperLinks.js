import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { topLevelPanel } from '../../redux/panel/action';
function UpperLinks() {
	const showContent = (value) => {
		dispatch(topLevelPanel(value));
	};
	const dispatch = useDispatch();
	const panelUpper = useSelector((state) => state.upperPanel.panelActive);
	console.log('@@@@', panelUpper);
	return (
		<main className="upper-links-wrap">
			<ul className="upper-links-ul">
				<li
					onClick={() => showContent('Consulting')}
					className={panelUpper.toLowerCase() == 'consulting' ? 'activeUpperLink' : ''}
				>
					<img onClick={() => showContent('Brand & Logo')} src="./images/consult.png" alt="" />
					Consulting
				</li>
				<li
					onClick={() => showContent('Brand & Logo')}
					className={panelUpper.toLowerCase() == 'brand & logo' ? 'activeUpperLink' : ''}
				>
					<img onClick={() => showContent('Brand & Logo')} src="./images/brand.png" alt="" />
					Brand & Logo
				</li>
				<li
					onClick={() => showContent('Design & Print')}
					className={panelUpper.toLowerCase() == 'design & print' ? 'activeUpperLink' : ''}
				>
					<img onClick={() => showContent('Brand & Logo')} src="./images/design.png" alt="" />
					Design & Print
				</li>
				<li
					onClick={() => showContent('Web & Apps')}
					className={panelUpper.toLowerCase() == 'web & apps' ? 'activeUpperLink' : ''}
				>
					<img onClick={() => showContent('Brand & Logo')} src="./images/web.png" alt="" />
					Web & Apps
				</li>
				<li
					onClick={() => showContent('Marketing')}
					className={panelUpper.toLowerCase() == 'marketing' ? 'activeUpperLink' : ''}
				>
					<img onClick={() => showContent('Brand & Logo')} src="./images/marketing.png" alt="" />
					Marketing
				</li>
				<li
					onClick={() => showContent('Promotional Apparel')}
					className={panelUpper.toLowerCase() == 'promotional apparel' ? 'activeUpperLink' : ''}
				>
					<img onClick={() => showContent('Brand & Logo')} src="./images/apparel.png" alt="" />
					Promotional Apparel
				</li>
			</ul>
		</main>
	);
}

export default UpperLinks;
