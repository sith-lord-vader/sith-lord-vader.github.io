import './App.scss';
import { Button, Layout } from 'antd';
import { Fragment } from 'react';
import { Footer } from './components/Footer/Footer';
import { Typewriter } from './components/Typewriter/Typewriter';
import { Profile } from './components/Profile/Profile';
import { Route, Switch } from 'react-router';
import { MyWorks } from './components/MyWorks/MyWorks';
import { ContactMe } from './components/ContactMe/ContactMe';

function App() {
	return (
		<div className="app">
			<div>
				<Switch>
					<Route path="/works">
						<MyWorks />
					</Route>
					<Route path="/contact-me">
						<ContactMe />
					</Route>
					<Route exact path="/">
						<Typewriter />
						<Profile />
					</Route>
				</Switch>
			</div>
			<Footer />
		</div>
	);
}

export default App;
