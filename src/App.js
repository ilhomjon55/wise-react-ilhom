import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';

import Home from './Pages/Home/Home.js';
import About from './Pages/About/About.js';
import ServicePage from './Pages/ServicePage/ServicePage.js';
import ScreenshotPage from './Pages/ScreenshotPage/ScreenshotPage.js';
import Contact from './Pages/Contact/Contact.js';

function App() {
	return (
		<>
			<Header />

			<main>
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/about' component={About} exact />
					<Route path='/service' component={ServicePage} exact />
					<Route path='/screenshot' component={ScreenshotPage} exact />
					<Route path='/contact' component={Contact} exact />
				</Switch>
			</main>

			<Footer />
		</>
	);
}

export default App;
