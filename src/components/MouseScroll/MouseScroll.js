import s from './MouseScroll.module.scss';

export const MouseScroll = ({ link }) => {
	return (
		<a href={link} className={s.mouse_scroll}>
			<div className={s.mouse}>
				<div className={s.wheel} />
			</div>
			<div>
				<span className={[ s.m_scroll_arrows, s.unu ].join(' ')} />
				<span className={[ s.m_scroll_arrows, s.doi ].join(' ')} />
				<span className={[ s.m_scroll_arrows, s.trei ].join(' ')} />
			</div>
		</a>
	);
};
