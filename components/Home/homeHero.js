import React, { useEffect, useRef, useState } from 'react';
function HomeHero() {
	const videoRef = useRef();
	return (
		<main className="home-hero-com">
			<video ref={videoRef} autoPlay={true} muted loop id="myVideo">
				<source src="./images/Home-bg.mp4" type="video/mp4" />
			</video>
			<div className="black-bg">
				<section className="home-hero-wrap">
					<div className="home-info-wrap">
						<div className="info-content">
							<span>Welome To Siliconhillsmarketing</span>
							<h1>One Way Digital Solution</h1>
							<p>
								lorem ipsum this is just a dummy text which is used in order to fill your paragraph or
								other porttions.
							</p>
						</div>
						<div className="info-image">
							<img src="./images/hero-main.png" />
							<div className="ad-pod-blog-wrap">
								<p>Ads</p>
								<p>Podcast</p>
								<p>Blog</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}

export default HomeHero;
