import React, { useState, useEffect } from 'react';
function HoverPanel({ selectedPanel }) {
	const [ selectedSec, setSelectedSec ] = useState('info center');
	const [ titleFlag, setTitleFlag ] = useState(false);
	const setAccordion = (value) => setSelectedSec(value);
	const titleFlagHandler = () => {
		setTitleFlag(!titleFlag);
		setSelectedSec('info center');
	};

	return (
		<main className={titleFlag ? 'hover-panel-con' : 'maxHeight350'}>
			<div className="hover-panel-wrap">
				<div className="hover-content-wrap">
					<h1 onClick={() => titleFlagHandler()}>
						<span>0{selectedPanel.id}</span>
						{selectedPanel.title}
						<span>
							<img src={titleFlag ? './images/upload.png' : './images/down-arrow.png'} />
						</span>
					</h1>
				</div>
			</div>
			<div className={titleFlag ? 'red-block' : 'displayNone'}>
				<div className="block-wrap">
					<div
						onClick={() => setAccordion('info center')}
						className={selectedSec == 'info center' ? 'width95' : 'width5'}
					>
						{selectedSec == 'info center' ? (
							<div className="information-wrap">
								<h1>Information Center</h1>
								<p>{selectedPanel.description}</p>
							</div>
						) : (
							<img src="./images/information.png" className="icon-box" />
						)}
					</div>
					<div
						onClick={() => setAccordion('pricing')}
						className={selectedSec == 'pricing' ? 'width95' : 'width5'}
					>
						{selectedSec == 'pricing' ? (
							<div className="information-wrap">
								<h1>Pricing</h1>
								<p>{selectedPanel.pricing}</p>
							</div>
						) : (
							<img src="./images/dollar.png" className="icon-box" />
						)}
					</div>
					<div
						onClick={() => setAccordion('portfolio')}
						className={selectedSec == 'portfolio' ? 'width95' : 'width5'}
					>
						{selectedSec == 'portfolio' ? (
							<div className="information-wrap">
								<h1>Portfolio</h1>
								<p>We love to show you our WORK</p>
								<button>View Portfolio</button>
							</div>
						) : (
							<img src="./images/portfolio.png" className="icon-box" />
						)}
					</div>
					<div
						onClick={() => setAccordion('process')}
						className={selectedSec == 'process' ? 'width95' : 'width5'}
					>
						{selectedSec == 'process' ? (
							<div className="information-wrap">
								<h1>Process</h1>
								<p>Soon all the content will be available</p>
							</div>
						) : (
							<img src="./images/process.png" className="icon-box" />
						)}
					</div>
					<div
						onClick={() => setAccordion('get started')}
						className={selectedSec == 'get started' ? 'width95' : 'width5'}
					>
						{selectedSec == 'get started' ? (
							<div className="information-wrap">
								<h1>Get Started</h1>
								<p>What are you waiting for you are one click away</p>
								<button>Get Started</button>
							</div>
						) : (
							<img src="./images/start.png" className="icon-box" />
						)}
					</div>
				</div>
			</div>
		</main>
	);
}

export default HoverPanel;
