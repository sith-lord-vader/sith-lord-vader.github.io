import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Typewriter } from './components/Typewriter/Typewriter';
import { Profile } from './components/Profile/Profile';
import { Route, Link, NavLink } from 'react-router-dom';
import { MyWorks } from './components/MyWorks/MyWorks';
import { ContactMe } from './components/ContactMe/ContactMe';
import { StyledOffCanvas, Menu, Overlay } from 'styled-off-canvas';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { AnimatedSwitch } from 'react-router-transition';
import ReactGA from 'react-ga';
import RouterChangeTracker from './components/RouterChangeTracker/RouterChangeTracker';

ReactGA.initialize('UA-181634162-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
	const [ isOpen, setIsOpen ] = useState(false);
	return (
		<StyledOffCanvas isOpen={isOpen} onClose={() => setIsOpen(false)}>
			<RouterChangeTracker />
			<button onClick={() => setIsOpen(!isOpen)} className="hamburger">
				<FontAwesomeIcon icon={faBars} />
			</button>
			<Menu className="Menu">
				<ul className="list">
					<li className="closeButton">
						<button onClick={() => setIsOpen(false)}>
							<FontAwesomeIcon icon={faWindowClose} />
						</button>
					</li>
					<li className="nav-links">
						<NavLink exact to="/" activeClassName="linkActive">
							Home
						</NavLink>
					</li>
					<li className="nav-links">
						<NavLink to="/works" activeClassName="linkActive">
							My Works
						</NavLink>
					</li>
					<li className="nav-links">
						<NavLink to="/contact-me" activeClassName="linkActive">
							Contact Me
						</NavLink>
					</li>
				</ul>
			</Menu>
			<Overlay />
			<div className="app">
				<AnimatedSwitch
					atEnter={{ opacity: 0 }}
					atLeave={{ opacity: 0 }}
					atActive={{ opacity: 1 }}
					className="switch-wrapper"
				>
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
				</AnimatedSwitch>
				<Footer />
			</div>
		</StyledOffCanvas>
	);
}

export default App;
