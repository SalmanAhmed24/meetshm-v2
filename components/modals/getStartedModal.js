import { useState, useEffect } from 'react';
import * as React from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
export default function GetStartedModal({ open, handleClose }) {
	const [ companyName, setCompanyName ] = useState('');
	const [ userName, setUserName ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ website, setWebsite ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ consultCheckBox, setConsultCheckBox ] = useState({ startUp: false, strategy: false, marketing: false });
	const [ brandCheckBox, setBrandCheckBox ] = useState({
		logo: false,
		colorScheme: false,
		typography: false,
		iconography: false,
		brandGuide: false
	});
	const [ designCheckBox, setDesignCheckBox ] = useState({ brochure: false, businessCard: false, postCards: false });
	const [ webCheckBox, setWebCheckBox ] = useState({ mobileApp: false, webApp: false, wordPress: false });
	const [ marketingCheckBox, setMarketingCheckBox ] = useState({
		emailCompaign: false,
		mailCompaign: false,
		seo: false,
		socialMedia: false
	});
	const [ promCheckBox, setPromCheckBox ] = useState({ apparel: false, beverage: false, signs: false });
	const handleCompanyName = (e) => setCompanyName(e.target.value);
	const handleUserName = (e) => setUserName(e.target.value);
	const handlePhone = (e) => setPhone(e.target.value);
	const handleEmail = (e) => setEmail(e.target.value);
	const handleWebsite = (e) => setWebsite(e.target.value);
	const handleConsultingCheckbox = (e) => {
		console.log('here', e.target.checked, e.target.value);
		if (e.target.checked && e.target.value == 'Start Up') {
			console.log('here in startup true');
			consultCheckBox.startUp = true;
			setConsultCheckBox(consultCheckBox);
		} else if (!e.target.checked && e.target.value == 'Start Up') {
			console.log('here in startup false');
			consultCheckBox.startUp = false;
			setConsultCheckBox(consultCheckBox);
		}
		if (e.target.checked && e.target.value == 'Strategy') {
			consultCheckBox.strategy = true;
			setConsultCheckBox(consultCheckBox);
		} else if (!e.target.checked && e.target.value == 'Strategy') {
			consultCheckBox.strategy = false;
			setConsultCheckBox(consultCheckBox);
		}
		if (e.target.checked && e.target.value == 'Marketing') {
			consultCheckBox.marketing = true;
			setConsultCheckBox(consultCheckBox);
		} else if (!e.target.checked && e.target.value == 'Marketing') {
			consultCheckBox.marketing = false;
			setConsultCheckBox(consultCheckBox);
		}
	};
	const handleBrandCheckbox = (e) => {
		console.log('here', e.target.checked, e.target.value);
		if (e.target.checked && e.target.value == 'Logo') {
			brandCheckBox.logo = true;
			setBrandCheckBox(brandCheckBox);
		} else if (!e.target.checked && e.target.value == 'Logo') {
			brandCheckBox.logo = false;
			setBrandCheckBox(brandCheckBox);
		}
		if (e.target.checked && e.target.value == 'Color Scheme') {
			brandCheckBox.colorScheme = true;
			setBrandCheckBox(brandCheckBox);
		} else if (!e.target.checked && e.target.value == 'Color Scheme') {
			brandCheckBox.colorScheme = false;
			setBrandCheckBox(brandCheckBox);
		}
		if (e.target.checked && e.target.value == 'Typography') {
			brandCheckBox.typography = true;
			setBrandCheckBox(brandCheckBox);
		} else if (!e.target.checked && e.target.value == 'Typography') {
			brandCheckBox.typography = false;
			setBrandCheckBox(brandCheckBox);
		}
		if (e.target.checked && e.target.value == 'Iconography') {
			brandCheckBox.iconography = true;
			setBrandCheckBox(brandCheckBox);
		} else if (!e.target.checked && e.target.value == 'Iconography') {
			brandCheckBox.iconography = false;
			setBrandCheckBox(brandCheckBox);
		}
		if (e.target.checked && e.target.value == 'Brand Guide') {
			brandCheckBox.brandGuide = true;
			setBrandCheckBox(brandCheckBox);
		} else if (!e.target.checked && e.target.value == 'Brand Guide') {
			brandCheckBox.brandGuide = false;
			setBrandCheckBox(brandCheckBox);
		}
	};
	const handleDesignCheckbox = (e) => {
		console.log('here', e.target.checked, e.target.value);
		if (e.target.checked && e.target.value == 'Brochures') {
			designCheckBox.brochure = true;
			setDesignCheckBox(designCheckBox);
		} else if (!e.target.checked && e.target.value == 'Brochures') {
			designCheckBox.brochure = false;
			setDesignCheckBox(designCheckBox);
		}
		if (e.target.checked && e.target.value == 'Business Cards') {
			designCheckBox.businessCard = true;
			setDesignCheckBox(designCheckBox);
		} else if (!e.target.checked && e.target.value == 'Business Cards') {
			designCheckBox.businessCard = false;
			setDesignCheckBox(designCheckBox);
		}
		if (e.target.checked && e.target.value == 'Postcards') {
			designCheckBox.postCards = true;
			setDesignCheckBox(designCheckBox);
		} else if (!e.target.checked && e.target.value == 'Postcards') {
			designCheckBox.postCards = false;
			setDesignCheckBox(designCheckBox);
		}
	};
	const handleWebCheckbox = (e) => {
		if (e.target.checked && e.target.value == 'iOS/Android Apps') {
			webCheckBox.mobileApp = true;
			setWebCheckBox(webCheckBox);
		} else if (!e.target.checked && e.target.value == 'iOS/Android Apps') {
			webCheckBox.mobileApp = false;
			setWebCheckBox(webCheckBox);
		}
		if (e.target.checked && e.target.value == 'Native/React Web Development') {
			webCheckBox.webApp = true;
			setWebCheckBox(webCheckBox);
		} else if (!e.target.checked && e.target.value == 'Native/React Web Development') {
			webCheckBox.webApp = false;
			setWebCheckBox(webCheckBox);
		}
		if (e.target.checked && e.target.value == 'Wordpress Web Development') {
			webCheckBox.wordPress = true;
			setWebCheckBox(webCheckBox);
		} else if (!e.target.checked && e.target.value == 'Wordpress Web Development') {
			webCheckBox.wordPress = false;
			setWebCheckBox(webCheckBox);
		}
	};
	const handleMarketingCheckbox = (e) => {
		if (e.target.checked && e.target.value == 'Email Campaigns') {
			marketingCheckBox.emailCompaign = true;
			setMarketingCheckBox(marketingCheckBox);
		} else if (!e.target.checked && e.target.value == 'Email Campaigns') {
			marketingCheckBox.emailCompaign = false;
			setMarketingCheckBox(marketingCheckBox);
		}
		if (e.target.checked && e.target.value == 'Mail Campaigns') {
			marketingCheckBox.mailCompaign = true;
			setMarketingCheckBox(marketingCheckBox);
		} else if (!e.target.checked && e.target.value == 'Mail Campaigns') {
			marketingCheckBox.mailCompaign = false;
			setMarketingCheckBox(marketingCheckBox);
		}
		if (e.target.checked && e.target.value == 'SEO') {
			marketingCheckBox.seo = true;
			setMarketingCheckBox(marketingCheckBox);
		} else if (!e.target.checked && e.target.value == 'SEO') {
			marketingCheckBox.seo = false;
			setMarketingCheckBox(marketingCheckBox);
		}
		if (e.target.checked && e.target.value == 'Social Media') {
			marketingCheckBox.socialMedia = true;
			setMarketingCheckBox(marketingCheckBox);
		} else if (!e.target.checked && e.target.value == 'Social Media') {
			marketingCheckBox.socialMedia = false;
			setMarketingCheckBox(marketingCheckBox);
		}
	};
	const handlePromCheckbox = (e) => {
		if (e.target.checked && e.target.value == 'Apparel') {
			promCheckBox.apparel = true;
			setPromCheckBox(promCheckBox);
		} else if (!e.target.checked && e.target.value == 'Apparel') {
			promCheckBox.apparel = false;
			setPromCheckBox(promCheckBox);
		}
		if (e.target.checked && e.target.value == 'Beverage') {
			promCheckBox.beverage = true;
			setPromCheckBox(promCheckBox);
		} else if (!e.target.checked && e.target.value == 'Beverage') {
			promCheckBox.beverage = false;
			setPromCheckBox(promCheckBox);
		}
		if (e.target.checked && e.target.value == 'Signs') {
			promCheckBox.signs = true;
			setPromCheckBox(promCheckBox);
		} else if (!e.target.checked && e.target.value == 'Signs') {
			promCheckBox.signs = false;
			setPromCheckBox(promCheckBox);
		}
	};
	const handleMessage = (e) => setMessage(e.target.value);
	const handleSubmit = () => {
		const data = {
			company: companyName,
			name: userName,
			phone,
			email,
			website,
			consulting: consultCheckBox,
			brand: brandCheckBox,
			design: designCheckBox,
			web: webCheckBox,
			promotional: promCheckBox,
			message
		};
		axios
			.post('http://localhost:3000/api/mail', data)
			.then((res) => console.log(res))
			.catch((error) => console.log(error));
	};
	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
			>
				<div className="getstarted-modal">
					<div className="inner-wrap">
						<p className="close" onClick={handleClose}>
							x
						</p>
						<h1 className="getStarted-heading">Tell Us How We Can Help</h1>
						<div className="getStarted-formWrap">
							<div className="inp-con">
								<TextField
									onChange={handleCompanyName}
									id="standard-basic"
									label="Company Name"
									variant="standard"
								/>
							</div>
							<div className="inp-con">
								<TextField
									onChange={handleUserName}
									id="standard-basic"
									label="Full Name"
									variant="standard"
								/>
							</div>
							<div className="inp-con">
								<TextField
									onChange={handlePhone}
									id="standard-basic"
									type={'number'}
									label="Phone"
									variant="standard"
								/>
							</div>
							<div className="inp-con">
								<TextField
									onChange={handleEmail}
									id="standard-basic"
									type={'email'}
									label="Email"
									variant="standard"
								/>
							</div>
							<div className="inp-con">
								<TextField
									onChange={handleWebsite}
									id="standard-basic"
									type={'text'}
									label="Website (Optional)"
									variant="standard"
								/>
							</div>
							<h2 className="checkbox-heading">Consulting</h2>
							<div className="checkbox-wrap">
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleConsultingCheckbox}
											value="Start Up"
										/>
									}
									label="Start Up"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleConsultingCheckbox}
											value="Strategy"
										/>
									}
									label="Strategy"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleConsultingCheckbox}
											value="Marketing"
										/>
									}
									label="Marketing"
								/>
							</div>
							<h2 className="checkbox-heading">Brand/Logo</h2>
							<div className="checkbox-wrap">
								<FormControlLabel
									control={
										<Checkbox defaultChecked={false} onChange={handleBrandCheckbox} value="Logo" />
									}
									label="Logo"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleBrandCheckbox}
											value="Color Scheme"
										/>
									}
									label="Color Scheme"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleBrandCheckbox}
											value="Typography"
										/>
									}
									label="Typography"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleBrandCheckbox}
											value="Iconography"
										/>
									}
									label="Iconography"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleBrandCheckbox}
											value="Brand Guide"
										/>
									}
									label="Brand Guide"
								/>
							</div>
							<h2 className="checkbox-heading">Design/Print</h2>
							<div className="checkbox-wrap">
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleDesignCheckbox}
											value="Brochures"
										/>
									}
									label="Brochures"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleDesignCheckbox}
											value="Business Cards"
										/>
									}
									label="Business Cards"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleDesignCheckbox}
											value="Postcards"
										/>
									}
									label="Postcards"
								/>
							</div>
							<h2 className="checkbox-heading">Web/Apps</h2>
							<div className="checkbox-wrap">
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleWebCheckbox}
											value="iOS/Android Apps"
										/>
									}
									label="iOS/Android Apps"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleWebCheckbox}
											value="Native/React Web Development"
										/>
									}
									label="Native/React Web Development"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleWebCheckbox}
											value="Wordpress Web Development"
										/>
									}
									label="Wordpress Web Development"
								/>
							</div>
							<h2 className="checkbox-heading">Marketing</h2>
							<div className="checkbox-wrap">
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleMarketingCheckbox}
											value="Email Campaigns"
										/>
									}
									label="Email Campaigns"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleMarketingCheckbox}
											value="Mail Campaigns"
										/>
									}
									label="Mail Campaigns"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleMarketingCheckbox}
											value="SEO"
										/>
									}
									label="SEO"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleMarketingCheckbox}
											value="Social Media"
										/>
									}
									label="Social Media"
								/>
							</div>
							<h2 className="checkbox-heading">Promotional Products</h2>
							<div className="checkbox-wrap">
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handlePromCheckbox}
											value="Apparel"
										/>
									}
									label="Apparel"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handlePromCheckbox}
											value="Beverage"
										/>
									}
									label="Beverage"
								/>
								<FormControlLabel
									control={
										<Checkbox defaultChecked={false} onChange={handlePromCheckbox} value="Signs" />
									}
									label="Signs"
								/>
							</div>
							<h2 className="checkbox-heading">Message</h2>
							<textarea className="messageArea" placeholder="Message here..." onChange={handleMessage} />
							<div className="submitBtnWrap">
								<button onClick={handleSubmit}>Send</button>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
}
