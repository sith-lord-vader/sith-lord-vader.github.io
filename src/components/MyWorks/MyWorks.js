import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import s from './MyWorks.module.scss';

export const MyWorks = () => {
	useEffect(() => {
		const title = document.title;
		document.title = 'My Works | Abhishek Adhikari';
		return () => (document.title = title);
	});
	return (
		<div className={s.main}>
			<div>
				Under Construction!!!&nbsp;<FontAwesomeIcon icon={faWrench} />
			</div>
		</div>
	);
};
