import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
	HomeOutlined,
	SearchOutlined,
	BookOutlined,
	FunctionOutlined,
	ExperimentOutlined,
} from '@ant-design/icons';
import '../assets/styles/Footer.css';

const Footer = () => {
	return (
		<nav className='navbar'>
			<ul>
				<li>
					<NavLink
						to='/home'
						activeStyle={{
							fontWeight: 'bold',
							color: '#ecb365',
						}}
						style={{
							textAlign: 'center',
						}}>
						<HomeOutlined
							style={{ fontSize: '20px', color: '#fefefe', textAlign: 'center' }}
						/>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						activeStyle={{
							fontWeight: 'bold',
							color: '#ecb365',
						}}
						to='/search'
						style={{
							textAlign: 'center',
						}}>
						<SearchOutlined style={{ fontSize: '20px', color: '#fefefe' }} />
						Buscar
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/conceptos'
						activeStyle={{
							fontWeight: 'bold',
							color: '#ecb365',
						}}
						style={{
							textAlign: 'center',
						}}>
						<BookOutlined style={{ fontSize: '20px', color: '#fefefe' }} />
						Conceptos
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/problemas'
						activeStyle={{
							fontWeight: 'bold',
							color: '#ecb365',
						}}
						style={{
							textAlign: 'center',
						}}>
						<FunctionOutlined style={{ fontSize: '20px', color: '#fefefe' }} />
						Problemas
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/simuladores'
						activeStyle={{
							fontWeight: 'bold',
							color: '#ecb365',
						}}
						style={{
							textAlign: 'center',
						}}>
						<ExperimentOutlined style={{ fontSize: '20px', color: '#fefefe' }} />
						Simuladores
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Footer;
