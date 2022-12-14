import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/header/header';
import UpperLinks from '../components/UpperLinks/upperLinks';
import { useSelector } from 'react-redux';
import HoverPanel from '../components/hoverPanel/hoverPanel';
import { brandLogo, consulting, marketing, promotion, webData, designPrint } from '../utils/constant';
import HomeContent from '../components/Home/homeContent';
export default function Home() {
	const activePanel = useSelector((state) => state.upperPanel.panelActive);
	return (
		<div>
			<Head>
				<title>Meetshm | Digital Marketing Agency</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<UpperLinks />
			<Header />
			<div className="hover-main-bg">
				{activePanel == 'Brand & Logo' ? (
					brandLogo.map((i) => <HoverPanel key={i.id} selectedPanel={i} />)
				) : null}
			</div>
			<div className="hover-main-bg">
				{activePanel == 'Consulting' ? (
					consulting.map((i) => <HoverPanel key={i.id} selectedPanel={i} />)
				) : null}
			</div>
			<div className="hover-main-bg">
				{activePanel == 'Marketing' ? marketing.map((i) => <HoverPanel key={i.id} selectedPanel={i} />) : null}
			</div>
			<div className="hover-main-bg">
				{activePanel == 'Promotional Apparel' ? (
					promotion.map((i) => <HoverPanel key={i.id} selectedPanel={i} />)
				) : null}
			</div>
			<div className="hover-main-bg">
				{activePanel == 'Web & Apps' ? webData.map((i) => <HoverPanel key={i.id} selectedPanel={i} />) : null}
			</div>
			<div className="hover-main-bg">
				{activePanel == 'Design & Print' ? (
					designPrint.map((i) => <HoverPanel key={i.id} selectedPanel={i} />)
				) : null}
			</div>
			{activePanel == 'Home' ? <HomeContent /> : null}
		</div>
	);
}
