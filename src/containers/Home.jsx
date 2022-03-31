import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IconComponent from '../components/Icon';
import '../assets/styles/Home.css';
import db from '../helpers/bd.json';

const Home = () => {
	const [item, setItem] = useState([]);
	const [items, setItems] = useState([]);
	const [text, setText] = useState('');

	useEffect(() => {
		const response = db.Conceptos.concat(db.Ejemplos)
			.concat(db.Simuladores)
			.sort(() => Math.random() - 0.5);
		setItem(response);
		setItems(response);
	}, []);

	const filter = (event) => {
		let query = event.target.value;
		if (!query.length >= 1) {
			setItem(items);
		} else {
			const data = items;
			const newData = data.filter((item) => {
				const itemData = item.title.toLowerCase();
				const textData = text.toLowerCase();
				return itemData.indexOf(textData) > -1;
			});
			setItem(newData);
			setText(query);
		}
	};

	return (
		<div className='home--container'>
			<input placeholder='¿Qué estas buscando?' onChange={filter} />
			{item.map((card) => {
				return (
					<div className='category--card'>
						<Link to={`${card.to}/${card.id}`} className='category--card--item'>
							<IconComponent component={card.icon} />
							<p>{card.title}</p>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Home;
