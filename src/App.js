import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './containers/Home';
import Conceptos from './containers/Conceptos';
import Concepto from './containers/Concepto';
import Ejemplos from './containers/Ejemplos';
import Ejemplo from './containers/Ejemplo';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/home' component={Home} />
					<Route exact path='/conceptos' component={Conceptos} />
					<Route exact path='/ejemplos' component={Ejemplos} />
					<Route
						exact
						path='/ejemplos/:id'
						render={({ match }) => {
							return <Ejemplo id={match.params.id} />;
						}}
					/>
					<Route
						exact
						path='/conceptos/:id'
						render={({ match }) => {
							return <Concepto id={match.params.id} />;
						}}
					/>
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
