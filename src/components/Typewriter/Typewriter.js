import { useEffect, useRef } from 'react';
import { MouseScroll } from '../MouseScroll/MouseScroll';
import s from './Typewriter.module.scss';
import { animateScroll } from 'react-scroll';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Typewriter = () => {
	const text = useRef(null);
	const listOfText = useRef([
		'a Full-Stack Web Developer     ',
		'a Student     ',
		'an Engineer     ',
		'a Freelancer     ',
		'a Cool Guy     '
	]);

	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search, 'Homepage');
		animateScroll.scrollToTop();
		var i = 0;
		var j = 0;
		var forward = true;
		var list = listOfText.current;
		const interval = setInterval(() => {
			if (i < list.length) {
				if (forward) {
					if (j <= list[i].length) {
						text.current.innerHTML = list[i].slice(0, j);
					}
					j++;
					if (j > list[i].length) {
						j--;
						forward = false;
					}
				} else {
					if (j >= 0) {
						text.current.innerHTML = list[i].slice(0, j);
					}
					j--;
					if (j < 0) {
						j = 0;
						forward = true;
						i++;
					}
				}
				if (i === list.length) {
					i = 0;
				}
			}
		}, 120);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<div className={s.main}>
			<Helmet>
				<title>Abhishek Adhikari 😉 | Cool Dev</title>
			</Helmet>
			<h1>ABHISHEK ADHIKARI</h1>
			<div className={s.text}>
				<b>I'm</b>&nbsp;
				<span ref={text} />
			</div>
			<div className={s.social}>
				<a href="https://github.com/abhishekadhikari23" rel="noreferrer" target="_blank" className={s.github}>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a
					href="https://www.linkedin.com/in/abhishek-a-b00840114/"
					rel="noreferrer"
					target="_blank"
					className={s.linkedin}
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
				<a
					href="https://www.instagram.com/abhiayush23/"
					rel="noreferrer"
					target="_blank"
					className={s.instagram}
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				<a href="https://www.facebook.com/abhiayush23" rel="noreferrer" target="_blank" className={s.facebook}>
					<FontAwesomeIcon icon={faFacebookF} />
				</a>
			</div>
			<MouseScroll link="profile" />
		</div>
	);
};
