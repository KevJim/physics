import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './containers/Home';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/home' component={Home} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
