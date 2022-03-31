import React from 'react';
import db from '../helpers/bd.json';

const Simulador = (props) => {
	const simuladores = db.Simuladores;
	let id = props.id;
	const simulador = simuladores.filter((simulador) => simulador.id == id);
	console.log(simulador);
	return (
		<div className='home--container'>
			<div className='category--card'>
				<h1 className='category-card--title' style={{ textAlign: 'center' }}>
					{simulador[0].title}
				</h1>
			</div>
			<div className='category--card' style={{ flexDirection: 'column' }}>
				<h3 className='category-card--subtitle'>Descripción</h3>
				<p className='category-card--text' style={{ textAlign: 'center' }}>
					{simulador[0].descripcion}
				</p>
			</div>
			<div className='category--card' style={{ flexDirection: 'column' }}>
				<h3 className='category-card--subtitle'>Enlace</h3>
				<a
					href={simulador[0].url}
					target='_blank'
					rel='noreferrer'
					style={{ textDecoration: 'underline', color: '#fefefe', fontSize: '2.4rem' }}>
					Enlace al simulador
				</a>
			</div>
		</div>
	);
};

export default Simulador;
