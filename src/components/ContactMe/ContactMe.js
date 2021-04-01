import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './ContactMe.module.scss';
import { useEffect } from 'react';

export const ContactMe = () => {
	useEffect(() => {
		document.title = 'Contact Me | Abhishek Adhikari';
	}, []);
	return (
		<div className={s.main}>
			<div>
				Under Construction!!!&nbsp;<FontAwesomeIcon icon={faWrench} />
			</div>
		</div>
	);
};
