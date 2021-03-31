import { faArrowRight, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Gravatar from 'react-gravatar';
import { Link } from 'react-router-dom';
import s from './Profile.module.scss';

export const Profile = () => {
	return (
		<div className={s.back} id="profile">
			<div className={s.main}>
				<div className={s.nameImg}>
					<div className={s.nameDetails}>
						<div className={s.profession}>Full-Stack Developer</div>
						<div className={s.name}>Abhishek Adhikari</div>
						<div className={s.extraDetails}>20 y.o., B.Tech in Computer Science and Engineering</div>
						<div className={s.linkSection}>
							<Link className={s.seeMyWorks} to="/works">
								See My Works&nbsp;
								<FontAwesomeIcon icon={faArrowRight} />
							</Link>
							<Link className={s.hireMe} to="/contact-me">
								Hire Me!&nbsp;
								<FontAwesomeIcon icon={faBriefcase} />
							</Link>
						</div>
					</div>
					<div className={s.profileImg}>
						<Gravatar email="abhiayush23@gmail.com" size={500} />
					</div>
				</div>
			</div>
		</div>
	);
};
