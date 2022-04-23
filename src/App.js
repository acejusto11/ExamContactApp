import Header from './core/Header/Header';
import AppProviders from './providers/AppProviders';

const App = () => {
	return (
		<>
			<AppProviders>
				<Header />
			</AppProviders>
		</>
	);
};
export default App;
