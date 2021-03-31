import './App.scss';
import { Button, Layout } from 'antd';
import { Fragment } from 'react';
import { Footer } from './components/Footer/Footer';
import { Typewriter } from './components/Typewriter/Typewriter';

function App() {
	return (
		<div className="app">
			<div>
				<Typewriter />
			</div>
			<Footer />
		</div>
	);
}

export default App;
