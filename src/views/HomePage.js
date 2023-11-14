import './HomePage.css'
import React from 'react';
import { useState } from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BlockLP from './components/Product_Homepage.js';

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
		slidesToSlide: 2, // optional, default to 1.
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 2, // optional, default to 1.

	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 2, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 2 // optional, default to 1.
	}
};



function HomePage(props) {
	const listPC = props.PopularCatalogue.map(eachPC =>
		<div className="oneKind" key={eachPC.id}>
			<img className="PopularCatalogue_Image"
				loading="lazy"
				srcSet={eachPC.imagePath}
			/>
			<div className="PopularCatalogue_Text">
				{eachPC.text}
			</div>
		</div>
	);

	return (

		<div className="HomePage">
			<div className="mainImage">
				<div className="brandName">
					2HandWarehouse
				</div>
			</div>

			<div className="PopularCatalogue">
				{props.PopularCatalogue.map(eachPC =>
					<div className="oneKind" key={eachPC.id}>
						<img className="PopularCatalogue_Image"
							loading="lazy"
							src={process.env.PUBLIC_URL + eachPC.imagePath}
							alt={eachPC.text}
						/>
						<div className="PopularCatalogue_Text">
							{eachPC.text}
						</div>
					</div>
				)}
			</div>
			{/*-----------------------*/}
			<div className="temp">
				<div className="flex-container">
					<div>
						<img className="HomePage_Stocktake"
							loading="lazy"
							srcSet={process.env.PUBLIC_URL + props.brand.imagePath1}
						/>
					</div>
					<div className="onecolumn">
						<img className="image_onecolumn"
							loading="lazy"
							srcSet={process.env.PUBLIC_URL + props.brand.imagePath2}
						/>
						<img
							loading="lazy"
							srcSet={process.env.PUBLIC_URL + props.brand.imagePath3}
						/>
					</div>
				</div>
			</div>




			<div className="LastestProducts">
				<div className="sectionName">Lastest Products</div>
				<div className="LP">
				<div className="columnLP">
						{props.LatestProducts.row1.map(block =>
							<BlockLP block={block} />
						)}
					</div>

					<div className="columnLP">
						{props.LatestProducts.row2.map(block =>
							<BlockLP block={block} />
						)}
					</div>
				</div>
			</div>

			<div className="ExploreOurProducts">
				<div className="sectionName">Explore our products</div>
				<Carousel
					renderDotsOutside={false}
					swipeable={true}
					draggable={false}
					showDots={true}
					responsive={responsive}
					ssr={true} // means to render carousel on server-side.
					infinite={false}
					autoPlaySpeed={1000}
					keyBoardControl={true}
					customTransition="all .5"
					transitionDuration={5000}
					containerClass="carousel-container"
					removeArrowOnDeviceType={["tablet", "mobile"]}
					dotListClass="react-multi-carousel-dot-list"
					itemClass="blockLP"
				>
					{props.ExploreOurProducts.map(block => 
						<BlockLP block={block} />
						)}
				</Carousel>;

			</div>

			<div className="BestSeller">
				<img className="book" srcSet={process.env.PUBLIC_URL + props.BestSeller.BSimage1}
				/>
				<div className="grid-item">
					<div className="BStitle">{props.BestSeller.BStitle}</div>
					<div className="BScate">{props.BestSeller.BScate}</div>
					<div className="BSnav">{props.BestSeller.BSnav}</div>

				</div>
				<img className="book" srcSet={process.env.PUBLIC_URL + props.BestSeller.BSimage2} />

			</div>

			<div className="ExploreOurProducts">
				<div className="sectionName">Top Trending Products</div>
				<Carousel
					renderDotsOutside={false}
					swipeable={true}
					draggable={true}
					showDots={true}
					responsive={responsive}
					ssr={true} // means to render carousel on server-side.
					infinite={false}
					autoPlaySpeed={1000}
					keyBoardControl={true}
					customTransition="all 5.5"
					transitionDuration={5000}
					containerClass="carousel-container"
					removeArrowOnDeviceType={["tablet", "mobile"]}
					dotListClass="react-multi-carousel-dot-list"
					itemClass="blockLP"
				>
					{props.ToptrendingProducts.map(block => 
						<BlockLP block={block} />
						)}
				</Carousel>;

			</div>

			<div className="Categories">
				<div className="CateTitle">Categories</div>

				<div className="CateSection">
					{props.Categories.CateKind.map(cate =>
						<div className="CateSectionName" >{cate}</div>
					)}
				</div>

				<div>
					<hr className="myLine" />
				</div>

				<div className="CateKinds">
					{props.Categories.CateName.map(cateElement =>
						<div className="CateKind">
							{cateElement.map(cateText =>
								<div className="CateKindText">{cateText}</div>
							)}
						</div>
					)}





				</div>
			</div>


			{/* <Link to="/2HandWarehouse/ViewProduct">
				<button className='CreateRecipeBtn'>View product</button>
			</Link>
			<Outlet /> */}
		</div >
	);
}

export default HomePage;