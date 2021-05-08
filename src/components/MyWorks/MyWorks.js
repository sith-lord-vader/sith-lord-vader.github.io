import { Fragment, useEffect, useRef, useState } from 'react';
import s from './MyWorks.module.scss';
import macImage from '../../assets/images/MyWorks/mac.jpg';
import skillTallyImage from '../../assets/images/MyWorks/skilltally.png';
import sndevsImage from '../../assets/images/MyWorks/sndevs.png';
import simFuelImage from '../../assets/images/MyWorks/sim-fuel-1.png';
import mifImage from '../../assets/images/MyWorks/mif.jpg';
import snPlayer from '../../assets/images/MyWorks/snplayer.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { animateScroll } from 'react-scroll';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

const projects = [
	{
		name: 'MarryACatholic.Com',
		url: 'https://marryacatholic.com',
		image: macImage,
		techUsed: [ 'Django', 'Python', 'Bootstrap4', 'HTML5', 'CSS3', 'Apache' ],
		desc: `It's a non-profit match-making site run by a Church. My main job was to understand, redesign and transform their old website running on ASP.Net where most of the tasks had to be done on paper to a completely online seamless experience. Security and privacy was one of the main concerns of this project which was taken care of. Also, client needed my to integrate the payment gateway which wasn't there previously to make it completely paperless and remote.`,
		source: ''
	},
	{
		name: 'SkillTally',
		url: 'https://www.skilltally.com',
		image: skillTallyImage,
		techUsed: [ 'Django', 'Python', 'Bootstrap4', 'HTML5', 'CSS3', 'Apache' ],
		desc: `SkillTally was an idea of my client. It is a skill building website to practice and become fluent in English. We use speech recognition and experimentally configured algorithm to score your spoken English.`,
		source: ''
	},
	{
		name: 'Money Is Funny',
		url: 'https://mif.sairyonodevs.in/',
		image: mifImage,
		techUsed: [ 'React', 'Bootstrap4', 'Sass', 'Flask', 'Web-Scraping', 'BeautifulSoup4' ],
		desc: `Welcome, to our webapp, here you can input any currency value of your choice and our ghost will fetch you it's value in all other currencies of the world. Beware it can turn out to be a bit haunted! Hope you find this experience unique and useful.`,
		source: 'https://github.com/Sairyo-No-Developers/currency-converter'
	},
	{
		name: 'Sairyö No Developers',
		url: 'https://www.sairyonodevs.in/',
		image: sndevsImage,
		techUsed: [ 'Angular', 'NodeJs', 'Bootstrap4', 'HTML5', 'CSS3', 'Nginx' ],
		desc: `Official site for Sairyö No Developers. With a futuristic animated background made with Angular.`,
		source: ''
	},
	{
		name: 'Sim Racing Fuel Calculator',
		url: 'https://sim-fuel.sairyonodevs.in/',
		image: simFuelImage,
		techUsed: [ 'Angular', 'NodeJs', 'Bootstrap4', 'HTML5', 'CSS3', 'Nginx' ],
		desc: `A quick web app made for all the Sim Racers to quickly calculate the amount of fuel required based on the race criteria. UI is based on Dark theme, Minimal, flat design.`,
		source: 'https://github.com/abhishekadhikari23/sim-racing-fuel-calc-angular'
	},
	{
		name: 'Sairyö No Player',
		url: 'https://github.com/abhishekadhikari23/desktop-audio-player/releases',
		image: snPlayer,
		techUsed: [ 'C#', 'DotNetCore', 'Material UI', 'Visual Studio' ],
		desc: `A Windows Desktop Audio Player with minimal look and minimal controls to help you enjoying your music without getting distracted by various control options. It can also play audio from YouTube videos.`,
		source: 'https://github.com/abhishekadhikari23/desktop-audio-player'
	}
];

const colorPairs = [
	'#f9b5b2',
	'#f36e4b',
	'#f69431',
	'#f1dd40',
	'#c6c752',
	'#b1cc9f',
	'#a5dad2',
	'#a2a18f',
	'#c8b384'
];

export const MyWorks = () => {
	const [ projectNo, setProjectNo ] = useState(0);
	const mouseOverFlag = useRef(false);
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search, 'My Works');
		animateScroll.scrollToTop();
	}, []);
	useEffect(
		() => {
			let i = setInterval(() => {
				if (!mouseOverFlag.current) {
					increment();
				}
			}, 7000);
			return () => {
				clearInterval(i);
			};
		},
		[ projectNo ]
	);
	const increment = () => {
		if (projectNo === projects.length - 1) {
			setProjectNo(0);
		} else {
			setProjectNo(projectNo + 1);
		}
	};
	const decrement = () => {
		if (projectNo === 0) {
			setProjectNo(projects.length - 1);
		} else {
			setProjectNo(projectNo - 1);
		}
	};
	return (
		<div className={s.main}>
			<Helmet>
				<title>My Works | Abhishek Adhikari</title>
			</Helmet>
			<div className={s.container}>
				<div className={s.carouselDisplay}>
					<div className={s.carouselButton} onClick={decrement}>
						<FontAwesomeIcon icon={faChevronLeft} />
					</div>
					<div className={s.carousel}>
						{projects.map((e, i) => (
							<Fragment key={i}>
								{projectNo === i ? (
									<img
										src={e.image}
										alt={e.name}
										onMouseEnter={() => {
											mouseOverFlag.current = true;
										}}
										onMouseLeave={() => {
											mouseOverFlag.current = false;
										}}
									/>
								) : (
									''
								)}
							</Fragment>
						))}
					</div>
					<div className={s.carouselButton} onClick={increment}>
						<FontAwesomeIcon icon={faChevronRight} />
					</div>
				</div>
				<div className={s.detailsMain}>
					{projects.map((e, i) => (
						<Fragment key={i}>
							{projectNo === i ? (
								<div
									className={s.details}
									onMouseEnter={() => {
										mouseOverFlag.current = true;
									}}
									onMouseLeave={() => {
										mouseOverFlag.current = false;
									}}
								>
									<h1>{e.name}</h1>
									<span>
										URL : {' '}
										<a href={e.url} referrerPolicy="origin-when-cross-origin">
											{e.url}
										</a>
									</span>
									{e.source.length > 0 && (
										<span>
											SOURCE : {' '}
											<a href={e.source} referrerPolicy="origin-when-cross-origin">
												{e.source}
											</a>
										</span>
									)}
									<div
										className={s.techUsed}
										onMouseEnter={() => {
											mouseOverFlag.current = true;
										}}
										onMouseLeave={() => {
											mouseOverFlag.current = false;
										}}
									>
										{e.techUsed.map((elem) => (
											<span
												style={{
													background:
														colorPairs[Math.floor(Math.random() * colorPairs.length)]
												}}
											>
												{elem}
											</span>
										))}
									</div>
									<p
										onMouseEnter={() => {
											mouseOverFlag.current = true;
										}}
										onMouseLeave={() => {
											mouseOverFlag.current = false;
										}}
									>
										{e.desc}
									</p>
								</div>
							) : (
								''
							)}
						</Fragment>
					))}
				</div>
			</div>
		</div>
	);
};
