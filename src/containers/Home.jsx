import React from 'react';
import { BookOutlined, FunctionOutlined, ExperimentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../assets/styles/Home.css';

const categories = [
	{
		id: 1,
		icon: <BookOutlined style={{ fontSize: '32px', color: '#fefefe' }} />,
		title: 'Conceptos',
		to: '/conceptos',
	},
	{
		id: 2,
		icon: <FunctionOutlined style={{ fontSize: '32px', color: '#fefefe' }} />,
		title: 'Problemas',
		to: '/ejemplos',
	},
	{
		id: 3,
		icon: <ExperimentOutlined style={{ fontSize: '32px', color: '#fefefe' }} />,
		title: 'Simuladores',
		to: '/simuladores',
	},
];

const Home = () => {
	return (
		<div className='home--container'>
			<input placeholder='¿Qué estas buscando?' />
			{categories.map((category) => {
				return (
					<div key={category.id} className='category--card'>
						<Link to={category.to} className='category--card--item'>
							{category.icon}
							<p>{category.title}</p>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Home;
