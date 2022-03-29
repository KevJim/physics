import React from 'react';
import {
	LineChartOutlined,
	ArrowRightOutlined,
	VerticalAlignBottomOutlined,
	DashboardOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../assets/styles/Ejemplos.css';

const categories = [
	{
		id: 1,
		icon: <LineChartOutlined style={{ fontSize: '32px', color: '#fefefe' }} />,
		title: 'Ejemplo Tiro Vertical',
		to: '/ejemplos',
	},
	{
		id: 2,
		icon: <ArrowRightOutlined style={{ fontSize: '32px', color: '#fefefe' }} />,
		title: 'Ejemplo M.R.U.',
		to: '/ejemplos',
	},
	{
		id: 3,
		icon: <VerticalAlignBottomOutlined style={{ fontSize: '32px', color: '#fefefe' }} />,
		title: 'Ejemplo Caida Libre',
		to: '/ejemplos',
	},
	{
		id: 4,
		icon: <DashboardOutlined style={{ fontSize: '32px', color: '#fefefe' }} />,
		title: 'Ejemplo Velocidad',
		to: '/ejemplos',
	},
];

const Problemas = () => {
	return (
		<div className='home--container'>
			<h2 className='example--title'>EJEMPLOS</h2>
			{categories.map((category) => {
				return (
					<div key={category.id} className='category--card'>
						<Link to={`${category.to}/${category.id}`} className='category--card--item'>
							{category.icon}
							<p>{category.title}</p>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Problemas;
