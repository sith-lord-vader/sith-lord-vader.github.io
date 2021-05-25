import { faFacebookF, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './Footer.module.scss';

export const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={s.top}>
				<ul>
					<li>
						<a
							className={s.github}
							href="https://github.com/abhishekadhikari23"
							rel="noreferrer"
							target="_blank"
						>
							<FontAwesomeIcon icon={faGithub} />
						</a>
					</li>
					<li>
						<a
							className={s.linkedin}
							href="https://www.linkedin.com/in/abhiayush23/"
							rel="noreferrer"
							target="_blank"
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</li>
					<li>
						<a
							className={s.instagram}
							href="https://www.instagram.com/abhiayush23/"
							rel="noreferrer"
							target="_blank"
						>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</li>
					<li>
						<a
							className={s.facebook}
							href="https://www.facebook.com/abhiayush23"
							rel="noreferrer"
							target="_blank"
						>
							<FontAwesomeIcon icon={faFacebookF} />
						</a>
					</li>
				</ul>
			</div>
			<div className={s.middle}>
				<span>
					Made With 💗 By&nbsp;<a href="https://github.com/abhishekadhikari23">Abhishek Adhikari</a>
				</span>
				<span>"Competing with Myself to Win the Race of Life. 🏁"</span>
			</div>
		</footer>
	);
};
