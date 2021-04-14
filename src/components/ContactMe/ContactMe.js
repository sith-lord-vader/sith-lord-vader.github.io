import s from './ContactMe.module.scss';
import { useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import { useForm, ValidationError } from '@formspree/react';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

export const ContactMe = () => {
	const [ state, handleSubmit ] = useForm('mgereepk');
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search, 'Contact Me');
		animateScroll.scrollToTop();
	}, []);
	return (
		<div className={s.main}>
			<Helmet>
				<title>Contact Me | Abhishek Adhikari</title>
			</Helmet>
			{state.succeeded ? (
				<h1 className={s.thanks}>Thanks For Contacting!!! 😃</h1>
			) : (
				<div className={s.formDiv}>
					<h1>Say Hello!</h1>
					<form onSubmit={handleSubmit}>
						<div>
							<input
								type="text"
								id="name"
								required={true}
								name="name"
								placeholder="Enter your name"
								autoComplete="name"
							/>
							<label htmlFor="name">Your Name</label>
						</div>
						<ValidationError prefix="Name" field="name" errors={state.errors} />
						<div>
							<input
								type="email"
								name="_replyto"
								id="_replyto"
								placeholder="Enter your email"
								autoComplete="email"
								required={true}
							/>
							<label htmlFor="_replyto">Your Email</label>
						</div>
						<ValidationError prefix="Email" field="email" errors={state.errors} />
						<div className={s.text}>
							<textarea name="message" id="message" placeholder="Enter Your Message" required={true} />
							<label htmlFor="message">Your Message</label>
						</div>
						<ValidationError prefix="Message" field="message" errors={state.errors} />
						<input type="hidden" name="_subject" value="Contact form submitted" />
						<input type="hidden" name="_honeypot" value="" />
						<button>Beam Your Message</button>
					</form>
				</div>
			)}
		</div>
	);
};
