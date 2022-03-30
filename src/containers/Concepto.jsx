import React from 'react';
import db from '../helpers/bd.json';
import "../assets/styles/Concepto.css"

const Concepto = (props) => {
	const conceptos = db.Conceptos;
	let id = props.id;
	const concepto = conceptos.filter((concepto) => concepto.id_definicion == id);
	console.log('Concepto: ', concepto);
	return (
		<div className='home--container'>
			<div className='category--card'>
				<h1 className='category-card--title'>{concepto[0].nombre}</h1>
				
			</div>
			<div className='category--card' style={{ flexDirection: 'column' }}>
				<h3 className='category-card--subtitle'>Definición</h3>
				<img className='img' src={concepto[0].url_imagen}/>
				<p className='category-card--text'>{concepto[0].definicion}</p>
			</div>
		</div>
	);
};

export default Concepto;