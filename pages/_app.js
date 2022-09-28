import Navbar from '../components/navbar/navbar';
import '../styles/globals.scss';
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<div>
				<Navbar />
				<Component {...pageProps} />
			</div>
		</Provider>
	);
}

export default MyApp;
