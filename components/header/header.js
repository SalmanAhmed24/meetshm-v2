import BrandHero from '../BrandLogoHero/brandLogoHero';
import { useSelector } from 'react-redux';
import MarketingHero from '../Marketing/marketingPanel';
import PromotionalHero from '../PromotionalHero/promotionalHero';
import WebAppHero from '../webApps/webApps';
import ConsultingHero from '../consulting/consulting';
import DesignHero from '../DesignPanel/design';
import HomeHero from '../Home/homeHero';
function Header() {
	const panelUpper = useSelector((state) => state.upperPanel.panelActive);
	return (
		<header className="header-con">
			{panelUpper.toLowerCase() == 'brand & logo' ? (
				<BrandHero />
			) : panelUpper.toLowerCase() == 'marketing' ? (
				<MarketingHero />
			) : panelUpper.toLowerCase() == 'promotional apparel' ? (
				<PromotionalHero />
			) : panelUpper.toLowerCase() == 'web & apps' ? (
				<WebAppHero />
			) : panelUpper.toLowerCase() == 'consulting' ? (
				<ConsultingHero />
			) : panelUpper.toLowerCase() == 'design & print' ? (
				<DesignHero />
			) : panelUpper.toLowerCase() == 'home' ? (
				<HomeHero />
			) : null}
		</header>
	);
}

export default Header;
