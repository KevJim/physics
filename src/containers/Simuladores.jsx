import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconComponent from '../components/Icon';
import db from '../helpers/bd.json';

const Simuladores = () => {
	const [simulators, setSimulators] = useState([]);
	useEffect(() => {
		const simuladores = db.Simuladores;
		setSimulators(simuladores);
	}, []);

	return (
		<div className='home--container'>
			<h2 className='example--title'>Simuladores</h2>
			{simulators.map((simulator) => {
				return (
					<div key={simulator.id} className='category--card'>
						<Link to={`${simulator.to}/${simulator.id}`} className='category--card--item'>
							<IconComponent component={simulator.icon} />
							<p>{simulator.title}</p>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Simuladores;
