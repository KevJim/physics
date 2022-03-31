import React from 'react';
import db from '../helpers/bd.json';
import '../assets/styles/Concepto.css';

const Concepto = (props) => {
	const conceptos = db.Conceptos;
	let id = props.id;
	const concepto = conceptos.filter((concepto) => concepto.id == id);
	return (
		<div className='home--container'>
			<div className='concept--card'>
				<h1 className='concept-card--title'>{concepto[0].title}</h1>
			</div>
			<div className='concept--card' style={{ flexDirection: 'column' }}>
				<h3 className='concept-card--subtitle'>Definición</h3>
				<img className='img' src={concepto[0].url_imagen} alt={concepto[0].title} />
				<p className='concept-card--text'>{concepto[0].definicion}</p>
			</div>
		</div>
	);
};

export default Concepto;
