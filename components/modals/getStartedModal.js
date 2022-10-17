import * as React from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
export default function GetStartedModal({ open, handleClose }) {
	const handleCompanyName = (e) => console.log(e.target.value);
	const handleUserName = (e) => console.log(e.target.value);
	const handlePhone = (e) => console.log(e.target.value);
	const handleEmail = (e) => console.log(e.target.value);
	const handleWebsite = (e) => console.log(e.target.value);
	const handleCheckboxes = (e) => {
		if (e.target.checked && e.target.value == 'website') {
			console.log('website is checked');
		}
		if (e.target.checked && e.target.value == 'graphic') {
			console.log('graphic is checked');
		}
	};
	const handleMessage = (e) => console.log(e.target.value);
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
										<Checkbox defaultChecked={false} onChange={handleCheckboxes} value="Start Up" />
									}
									label="Start Up"
								/>
								<FormControlLabel
									control={
										<Checkbox defaultChecked={false} onChange={handleCheckboxes} value="Strategy" />
									}
									label="Strategy"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleCheckboxes}
											value="Marketing"
										/>
									}
									label="Marketing"
								/>
							</div>
							<h2 className="checkbox-heading">Brand/Logo</h2>
							<div className="checkbox-wrap">
								{/* <FormControlLabel
									disabled
									control={<Checkbox onChange={handleCheckboxes} />}
									label="Disabled"
								/> */}
								<FormControlLabel
									control={
										<Checkbox defaultChecked={false} onChange={handleCheckboxes} value="Logo" />
									}
									label="Logo"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleCheckboxes}
											value="Color Scheme"
										/>
									}
									label="Color Scheme"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleCheckboxes}
											value="Typography"
										/>
									}
									label="Typography"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleCheckboxes}
											value="Iconography"
										/>
									}
									label="Iconography"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleCheckboxes}
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
											onChange={handleCheckboxes}
											value="Brochures"
										/>
									}
									label="Brochures"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleCheckboxes}
											value="Business Cards"
										/>
									}
									label="Business Cards"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleCheckboxes}
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
											onChange={handleCheckboxes}
											value="iOS/Android Apps"
										/>
									}
									label="iOS/Android Apps"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleCheckboxes}
											value="Native/React Web Development"
										/>
									}
									label="Native/React Web Development"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleCheckboxes}
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
											onChange={handleCheckboxes}
											value="Email Campaigns"
										/>
									}
									label="Email Campaigns"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleCheckboxes}
											value="Mail Campaigns"
										/>
									}
									label="Mail Campaigns"
								/>
								<FormControlLabel
									control={
										<Checkbox defaultChecked={false} onChange={handleCheckboxes} value="SEO" />
									}
									label="SEO"
								/>
								<FormControlLabel
									control={
										<Checkbox
											defaultChecked={false}
											onChange={handleCheckboxes}
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
										<Checkbox defaultChecked={false} onChange={handleCheckboxes} value="Apparel" />
									}
									label="Apparel"
								/>
								<FormControlLabel
									control={
										<Checkbox defaultChecked={false} onChange={handleCheckboxes} value="Beverage" />
									}
									label="Beverage"
								/>
								<FormControlLabel
									control={
										<Checkbox defaultChecked={false} onChange={handleCheckboxes} value="Signs" />
									}
									label="Signs"
								/>
							</div>
							<h2 className="checkbox-heading">Message</h2>
							<textarea className="messageArea" placeholder="Message here..." onChange={handleMessage} />
							<div className="submitBtnWrap">
								<button>Send</button>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
}
