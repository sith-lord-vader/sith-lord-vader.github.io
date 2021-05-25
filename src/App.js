import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Typewriter } from './components/Typewriter/Typewriter';
import { Profile } from './components/Profile/Profile';
import { Route, NavLink } from 'react-router-dom';
import { MyWorks } from './components/MyWorks/MyWorks';
import { ContactMe } from './components/ContactMe/ContactMe';
import { StyledOffCanvas, Menu, Overlay } from 'styled-off-canvas';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { AnimatedSwitch } from 'react-router-transition';
import ReactGA from 'react-ga';
import DynamicSitemap from 'react-dynamic-sitemap';
import { Helmet } from 'react-helmet';
import { PageNotFound } from './components/404/PageNotFound';
import { BlogsArticlesFull } from './components/BlogsArticles/BlogsArticles';

ReactGA.initialize('UA-181634162-1');

const Sitemap = (props) => {
	return <DynamicSitemap routes={Routes} prettify={true} {...props} />;
};

const Routes = () => {
	return (
		<AnimatedSwitch
			atEnter={{ opacity: 0 }}
			atLeave={{ opacity: 0 }}
			atActive={{ opacity: 1 }}
			className="switch-wrapper"
		>
			<Route path="/works" sitemapIndex={true} priority={1} changefreq="weekly">
				<MyWorks />
			</Route>
			<Route path="/contact-me" sitemapIndex={true} priority={1} changefreq="weekly">
				<ContactMe />
			</Route>
			<Route path="/blog" sitemapIndex={true} priority={1} changefreq="weekly">
				<BlogsArticlesFull />
			</Route>
			<Route path="/sitemap" sitemapIndex={false}>
				<Sitemap />
			</Route>
			<Route exact path="/" sitemapIndex={true} priority={1} changefreq="daily">
				<Typewriter />
				<Profile />
			</Route>
			<Route path="*">
				<PageNotFound />
			</Route>
		</AnimatedSwitch>
	);
};

export const App = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	return (
		<StyledOffCanvas isOpen={isOpen} onClose={() => setIsOpen(false)}>
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
				<Helmet>
					<title>Abhishek Adhikari 😉 | Cool Dev</title>
				</Helmet>
				<Routes />
				<Footer />
			</div>
		</StyledOffCanvas>
	);
};
