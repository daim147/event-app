import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateEvent from './pages/CreateEvent';
import LandingPage from './pages/LandingPage';
import Event from './pages/Event';
import { useState } from 'react';

function App() {
	const [eventData, setEventData] = useState(null);
	return (
		<Router>
			<Switch>
				<Route path='/' exact>
					<LandingPage />
				</Route>
				<Route path='/create' exact>
					<CreateEvent sendEventData={setEventData} />
				</Route>
				<Route path='/event' exact>
					<Event eventData={eventData} />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
