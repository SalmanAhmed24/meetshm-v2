function LogoPanel({ content }) {
	return (
		<main className="panel">
			<h1 className="panel-heading">Brand & Logo</h1>
			<p className="panel-sub-heading">{content.title}</p>
			<p className="panel-desc">{content.description}</p>
			<button>Hire Now</button>
		</main>
	);
}

export default LogoPanel;
