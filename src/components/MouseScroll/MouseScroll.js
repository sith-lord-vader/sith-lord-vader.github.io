import s from './MouseScroll.module.scss';
import { Link } from 'react-scroll';

export const MouseScroll = ({ link }) => {
	return (
		<Link to={link} className={s.mouse_scroll} smooth={true} delay={200} duration={500}>
			<div className={s.mouse}>
				<div className={s.wheel} />
			</div>
			<div>
				<span className={[ s.m_scroll_arrows, s.unu ].join(' ')} />
				<span className={[ s.m_scroll_arrows, s.doi ].join(' ')} />
				<span className={[ s.m_scroll_arrows, s.trei ].join(' ')} />
			</div>
		</Link>
	);
};
