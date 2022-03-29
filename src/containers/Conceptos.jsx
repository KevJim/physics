import React from 'react';
import {
	BranchesOutlined,
	ArrowRightOutlined,
	RocketOutlined,
	LineChartOutlined,
	DashboardOutlined,
	VerticalAlignMiddleOutlined,
	ColumnWidthOutlined,
	RiseOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../assets/styles/Conceptos.css';

const categories = [
	{
		id: 1,
		icon: <BranchesOutlined style={{ fontSize: '32px', color: '#fefefe' }} />,
		title: 'Física',
		to: '/conceptos',
	},
	{
		id: 2,
		icon: <ArrowRightOutlined style={{ fontSize: '32px', color: '#fefefe' }} />,
		title: 'M.R.U',
		to: '/conceptos',
	},
	{
		id: 3,
		icon: <RocketOutlined style={{ fontSize: '32px', color: '#fefefe' }} />,
		title: 'Gravedad',
		to: '/conceptos',
	},
	{
		id: 4,
		icon: <LineChartOutlined style={{ fontSize: '32px', color: '#fefefe' }} />,
		title: 'Tiro Vertical',
		to: '/conceptos',
	},
	{
		id: 5,
		icon: <VerticalAlignMiddleOutlined style={{ fontSize: '32px', color: '#fefefe' }} />,
		title: 'Fuerza',
		to: '/conceptos',
	},
	{
		id: 6,
		icon: <RiseOutlined style={{ fontSize: '32px', color: '#fefefe' }} />,
		title: 'Aceleración',
		to: '/conceptos',
	},
	{
		id: 7,
		icon: <DashboardOutlined style={{ fontSize: '32px', color: '#fefefe' }} />,
		title: 'Velocidad',
		to: '/conceptos',
	},
	{
		id: 8,
		icon: <ColumnWidthOutlined style={{ fontSize: '32px', color: '#fefefe' }} />,
		title: 'Distancia',
		to: '/conceptos',
	}
];

const Conceptos = () => {
	return (
		<div className='home--container'>
			<h2 className='example--title'>Conceptos</h2>
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

export default Conceptos;
