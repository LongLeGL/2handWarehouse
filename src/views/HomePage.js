import './HomePage.css'
import React from 'react';
import { useState } from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';



function HomePage() {
	const username = sessionStorage.getItem('username');

	return (
		<div className="HomePage">	
			Home page's content		
			<Link to= "/2HandWarehouse/ViewProduct">
				<button className='CreateRecipeBtn'>View product</button>
			</Link>
			<Outlet/>
		</div>
	);
}

export default HomePage;