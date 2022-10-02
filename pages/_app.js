import Navbar from '../components/navbar/navbar';
import '../styles/globals.scss';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Footer from '../components/footer/footer';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<div>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</div>
		</Provider>
	);
}

export default MyApp;
