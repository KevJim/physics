import React from 'react';
import db from '../helpers/bd.json';
import "../assets/styles/Ejemplo.css"

const Ejemplo = (props) => {
	const ejemplos = db.Ejemplos;
	let id = props.id;
	const ejemplo = ejemplos.filter((ejemplo) => ejemplo.id_ejemplo == id);
	console.log('Ejemplo: ', ejemplo);
	return (
		<div className='home--container'>
			<div className='category--card'>
				<h1 className='category-card--title'>{ejemplo[0].tema}</h1>
			</div>
			<div className='category--card' style={{ flexDirection: 'column' }}>
				<h3 className='category-card--subtitle'>Problema</h3>
				<p className='category-card--text'>{ejemplo[0].problema}</p>
			</div>
			<div className='category--card' style={{ flexDirection: 'column' }}>
				<h3 className='category-card--subtitle'>Datos</h3>
				<p className='category-card--text'>{ejemplo[0].datos}</p>
			</div>
			<div className='category--card' style={{ flexDirection: 'column' }}>
				<h3 className='category-card--subtitle'>Fórmula</h3>
				<p className='category-card--text'>{ejemplo[0].formula}</p>
			</div>
			<div className='category--card' style={{ flexDirection: 'column' }}>
				<h3 className='category-card--subtitle'>Procedimiento</h3>
				<p className='category-card--text'>{ejemplo[0].procedimiento}</p>
			</div>
			<div className='category--card' style={{ flexDirection: 'column' }}>
				<h3 className='category-card--subtitle'>Resultado</h3>
				<p className='category-card--text'>{ejemplo[0].resultado}</p>
			</div>
		</div>
	);
};

export default Ejemplo;
