import { faArrowRight, faBriefcase, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Gravatar from 'react-gravatar';
import { Link } from 'react-router-dom';
import s from './Profile.module.scss';

export const Profile = () => {
	return (
		<div className={s.back} id="profile">
			<div className={s.wave} />
			<div className={s.main}>
				<div className={s.nameImg}>
					<div className={s.nameDetails}>
						<div className={s.profession}>Full-Stack Developer</div>
						<div className={s.name}>
							Hola! I'm <span style={{ color: '#CD5088' }}>Abhishek Adhikari</span>
						</div>
						<div className={s.extraDetails}>20 y.o., B.Tech in Computer Science and Engineering</div>
						<p>
							I may look serious n boring but I'm rather funny and cool. I'm currently learning Ionic
							Framework. Ask me anything about React, Next.Js, SCSS, Typescript, UI/UX and Figma.
						</p>
						<div className={s.linkSection}>
							<Link className={s.seeMyWorks} to="/works">
								See My Works&nbsp;
								<FontAwesomeIcon icon={faArrowRight} />
							</Link>
							<Link className={s.hireMe} to="/contact-me">
								Hire Me!&nbsp;
								<FontAwesomeIcon icon={faBriefcase} />
							</Link>
							<a
								className={s.resume}
								href="https://cdn.abhishekadhikari.rocks/Abhishek_Adhikari_Resume.pdf"
								download
							>
								My Resume&nbsp;
								<FontAwesomeIcon icon={faDownload} />
							</a>
						</div>
					</div>
					<div className={s.imgDiv}>
						<div className={s.profileImg} />
						<Gravatar email="abhiayush23@gmail.com" size={500} />
					</div>
				</div>
			</div>
		</div>
	);
};
