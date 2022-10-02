function HomeContent() {
	return (
		<main className="home-content-con">
			<h1 className="why-chose-h1">Why Choose Us</h1>
			<section className="home-content-wrap">
				<div className="content-single">
					<img src="./images/expert.png" alt="" />
					<h1>Over 28 years in business</h1>
				</div>
				<div className="content-single">
					<img src="./images/tech-team.png" alt="" />
					<h1>Over 140 talented consultants 2 serve you</h1>
				</div>
				<div className="content-single">
					<img src="./images/globe.png" alt="" />
					<h1>Offer our services in 7 countries</h1>
				</div>
			</section>
			<h1 className="why-chose-h1">Some Of Our SPECIALS</h1>
			<section className="specials-wrap">
				<div>
					<img src="./images/offer.png" />
					<h1>$99 Get Started Consulation Package 1</h1>
				</div>
				<div>
					<img src="./images/offer.png" />

					<h1>$199 3 Logo Package</h1>
				</div>
				<div>
					<img src="./images/offer.png" />

					<h1>$499 Special 3</h1>
				</div>
				<div>
					<img src="./images/offer.png" />

					<h1>$999 Basic Web Package</h1>
				</div>
			</section>
		</main>
	);
}

export default HomeContent;
