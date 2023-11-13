import './HomePage.css'
import React from 'react';
import PhoneImage from './images/GroupPhone.png';
import CarImage from './images/GroupCar.png';
import FruitsImage from './images/GroupFruits.png';
import BathroomImage from './images/GroupBathroom.png';
import WorkspaceImage from './images/GroupWorkspace.png';
import AccessoriesImage from './images/GroupAccessories.png';
import Stocktake from './images/Stocktake.png';
import Meyer from './images/Meyer.png';
import Findgood from './images/Findgood.png';
import LP1 from './images/LP1.png';
import LP2 from './images/LP2.png';
import LP3 from './images/LP3.png';
import LP4 from './images/LP4.png';
import LP5 from './images/LP5.png';
import LP6 from './images/LP6.png';
import LP7 from './images/LP7.png';
import LP8 from './images/LP8.png';
import book1 from './images/book1.png';
import book2 from './images/book2.png';
import { useState } from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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





function HomePage() {
	const username = sessionStorage.getItem('username');
	//question: cai nay tu code cũ hả Long

	return (
		<div className="HomePage">
			<div className="mainImage">
				<div className="brandName">
					2HandWarehouse
				</div>
			</div>

			<div className="PopularCatalogue">
				<div className="oneKind">
					<img className="PopularCatalogue_Image"
						loading="lazy"
						srcSet={PhoneImage}
					/>
					<div className="PopularCatalogue_Text">
						Phone
					</div>
				</div>
				<div className="oneKind">
					<img className="PopularCatalogue_Image"
						loading="lazy"
						srcSet={CarImage}
					/>
					<div className="PopularCatalogue_Text">
						Car
					</div>
				</div>
				<div className="oneKind">
					<img className="PopularCatalogue_Image"
						loading="lazy"
						srcSet={FruitsImage}
					/>
					<div className="PopularCatalogue_Text">
						Fruits
					</div>
				</div>
				<div className="oneKind">
					<img className="PopularCatalogue_Image"
						loading="lazy"
						srcSet={BathroomImage}
					/>
					<div className="PopularCatalogue_Text">
						Bathroom
					</div>
				</div>
				<div className="oneKind">
					<img className="PopularCatalogue_Image"
						loading="lazy"
						srcSet={WorkspaceImage}
					/>
					<div className="PopularCatalogue_Text">
						Workspace
					</div>
				</div>
				<div className="oneKind">
					<img className="PopularCatalogue_Image"
						loading="lazy"
						srcSet={AccessoriesImage}
					/>
					<div className="PopularCatalogue_Text">
						Accessories
					</div>
				</div>
			</div>
			{/*-----------------------*/}
			<div className="temp">
				<div className="flex-container">
					<div>
						<img className="HomePage_Stocktake"
							loading="lazy"
							srcSet={Stocktake}
						/>
					</div>
					<div className="onecolumn">
						<img className="image_onecolumn"
							loading="lazy"
							srcSet={Meyer}
						/>
						<img
							loading="lazy"
							srcSet={Findgood}
						/>

					</div>
				</div>
			</div>




			<div className="LastestProducts">
				<div className="sectionName">Lastest Products</div>
				<div className="LP">
					<div className="columnLP">
						<div className="blockLP">
							<img className="imageLP"
								loading="lazy"
								srcSet={LP1}
							/>
							<div className="LPinfo">
								<div className="LPname">Bucklo Wrop Wooden Table</div>
								<div className="LPprice">$56.12</div>
								<div className="LPaddress">TP. Hồ Chí Minh</div>
								<div className="LPadd">Add to Cart</div>
							</div>

						</div>
						<div className="blockLP">
							<img className="imageLP"
								loading="lazy"
								srcSet={LP2}
							/>
							<div className="LPinfo">
								<div className="LPname">Bucklo Wrop Wooden Table</div>
								<div className="LPprice">$56.12</div>
								<div className="LPaddress">TP. Hồ Chí Minh</div>
								<div className="LPadd">Add to Cart</div>
							</div>

						</div>
						<div className="blockLP">
							<img className="imageLP"
								loading="lazy"
								srcSet={LP3}
							/>
							<div className="LPinfo">
								<div className="LPname">Bucklo Wrop Wooden Table</div>
								<div className="LPprice">$56.12</div>
								<div className="LPaddress">TP. Hồ Chí Minh</div>
								<div className="LPadd">Add to Cart</div>
							</div>

						</div>
						<div className="blockLP">
							<img className="imageLP"
								loading="lazy"
								srcSet={LP4}
							/>
							<div className="LPinfo">
								<div className="LPname">Bucklo Wrop Wooden Table</div>
								<div className="LPprice">$56.12</div>
								<div className="LPaddress">TP. Hồ Chí Minh</div>
								<div className="LPadd">Add to Cart</div>
							</div>

						</div>
					</div>

					<div className="columnLP">
						<div className="blockLP">
							<img className="imageLP"
								loading="lazy"
								srcSet={LP5}
							/>
							<div className="LPinfo">
								<div className="LPname">Bucklo Wrop Wooden Table</div>
								<div className="LPprice">$56.12</div>
								<div className="LPaddress">TP. Hồ Chí Minh</div>
								<div className="LPadd">Add to Cart</div>
							</div>

						</div>
						<div className="blockLP">
							<img className="imageLP"
								loading="lazy"
								srcSet={LP6}
							/>
							<div className="LPinfo">
								<div className="LPname">Bucklo Wrop Wooden Table</div>
								<div className="LPprice">$56.12</div>
								<div className="LPaddress">TP. Hồ Chí Minh</div>
								<div className="LPadd">Add to Cart</div>
							</div>

						</div>
						<div className="blockLP">
							<img className="imageLP"
								loading="lazy"
								srcSet={LP7}
							/>
							<div className="LPinfo">
								<div className="LPname">Bucklo Wrop Wooden Table</div>
								<div className="LPprice">$56.12</div>
								<div className="LPaddress">TP. Hồ Chí Minh</div>
								<div className="LPadd">Add to Cart</div>
							</div>

						</div>
						<div className="blockLP">
							<img className="imageLP"
								loading="lazy"
								srcSet={LP8}
							/>
							<div className="LPinfo">
								<div className="LPname">Bucklo Wrop Wooden Table</div>
								<div className="LPprice">$56.12</div>
								<div className="LPaddress">TP. Hồ Chí Minh</div>
								<div className="LPadd">Add to Cart</div>
							</div>

						</div>
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
					<div className="blockLP">
						<img className="imageLP"
							loading="lazy"
							srcSet={LP1}
						/>
						<div className="LPinfo">
							<div className="LPname">Bucklo Wrop Wooden Table</div>
							<div className="LPprice">$56.12</div>
							<div className="LPaddress">TP. Hồ Chí Minh</div>
							<div className="LPadd">Add to Cart</div>
						</div>
					</div>
					<div className="blockLP">
						<img className="imageLP"
							loading="lazy"
							srcSet={LP2}
						/>
						<div className="LPinfo">
							<div className="LPname">Bucklo Wrop Wooden Table</div>
							<div className="LPprice">$56.12</div>
							<div className="LPaddress">TP. Hồ Chí Minh</div>
							<div className="LPadd">Add to Cart</div>
						</div>
					</div>
					<div className="blockLP">
						<img className="imageLP"
							loading="lazy"
							srcSet={LP3}
						/>
						<div className="LPinfo">
							<div className="LPname">Bucklo Wrop Wooden Table</div>
							<div className="LPprice">$56.12</div>
							<div className="LPaddress">TP. Hồ Chí Minh</div>
							<div className="LPadd">Add to Cart</div>
						</div>
					</div>
					<div className="blockLP">
						<img className="imageLP"
							loading="lazy"
							srcSet={LP4}
						/>
						<div className="LPinfo">
							<div className="LPname">Bucklo Wrop Wooden Table</div>
							<div className="LPprice">$56.12</div>
							<div className="LPaddress">TP. Hồ Chí Minh</div>
							<div className="LPadd">Add to Cart</div>
						</div>
					</div>
					<div className="blockLP">
						<img className="imageLP"
							loading="lazy"
							srcSet={LP5}
						/>
						<div className="LPinfo">
							<div className="LPname">Bucklo Wrop Wooden Table</div>
							<div className="LPprice">$56.12</div>
							<div className="LPaddress">TP. Hồ Chí Minh</div>
							<div className="LPadd">Add to Cart</div>
						</div>
					</div>
					<div className="blockLP">
						<img className="imageLP"
							loading="lazy"
							srcSet={LP6}
						/>
						<div className="LPinfo">
							<div className="LPname">Bucklo Wrop Wooden Table</div>
							<div className="LPprice">$56.12</div>
							<div className="LPaddress">TP. Hồ Chí Minh</div>
							<div className="LPadd">Add to Cart</div>
						</div>
					</div>
					<div className="blockLP">
						<img className="imageLP"
							loading="lazy"
							srcSet={LP7}
						/>
						<div className="LPinfo">
							<div className="LPname">Bucklo Wrop Wooden Table</div>
							<div className="LPprice">$56.12</div>
							<div className="LPaddress">TP. Hồ Chí Minh</div>
							<div className="LPadd">Add to Cart</div>
						</div>
					</div>
					<div className="blockLP">
						<img className="imageLP"
							loading="lazy"
							srcSet={LP8}
						/>
						<div className="LPinfo">
							<div className="LPname">Bucklo Wrop Wooden Table</div>
							<div className="LPprice">$56.12</div>
							<div className="LPaddress">TP. Hồ Chí Minh</div>
							<div className="LPadd">Add to Cart</div>
						</div>
					</div>
				</Carousel>;

			</div>

			<div className="BestSeller">
				<img className="book" srcSet={book1}
				/>
				<div className="grid-item">
					<div className="BStitle">Best seller in US</div>
					<div className="BScate"> Education</div>
					<div className="BSnav"> Explore now
					</div>

				</div>
				<img className="book" srcSet={book2} />

			</div>

			<div className="ExploreOurProducts">
				<div className="sectionName">Top Trending Products</div>
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
					<div className="blockLP">
						<img className="imageLP"
							loading="lazy"
							srcSet={LP1}
						/>
						<div className="LPinfo">
							<div className="LPname">Bucklo Wrop Wooden Table</div>
							<div className="LPprice">$56.12</div>
							<div className="LPaddress">TP. Hồ Chí Minh</div>
							<div className="LPadd">Add to Cart</div>
						</div>
					</div>
					<div className="blockLP">
						<img className="imageLP"
							loading="lazy"
							srcSet={LP2}
						/>
						<div className="LPinfo">
							<div className="LPname">Bucklo Wrop Wooden Table</div>
							<div className="LPprice">$56.12</div>
							<div className="LPaddress">TP. Hồ Chí Minh</div>
							<div className="LPadd">Add to Cart</div>
						</div>
					</div>
					<div className="blockLP">
						<img className="imageLP"
							loading="lazy"
							srcSet={LP3}
						/>
						<div className="LPinfo">
							<div className="LPname">Bucklo Wrop Wooden Table</div>
							<div className="LPprice">$56.12</div>
							<div className="LPaddress">TP. Hồ Chí Minh</div>
							<div className="LPadd">Add to Cart</div>
						</div>
					</div>
					<div className="blockLP">
						<img className="imageLP"
							loading="lazy"
							srcSet={LP4}
						/>
						<div className="LPinfo">
							<div className="LPname">Bucklo Wrop Wooden Table</div>
							<div className="LPprice">$56.12</div>
							<div className="LPaddress">TP. Hồ Chí Minh</div>
							<div className="LPadd">Add to Cart</div>
						</div>
					</div>
					<div className="blockLP">
						<img className="imageLP"
							loading="lazy"
							srcSet={LP5}
						/>
						<div className="LPinfo">
							<div className="LPname">Bucklo Wrop Wooden Table</div>
							<div className="LPprice">$56.12</div>
							<div className="LPaddress">TP. Hồ Chí Minh</div>
							<div className="LPadd">Add to Cart</div>
						</div>
					</div>
					<div className="blockLP">
						<img className="imageLP"
							loading="lazy"
							srcSet={LP6}
						/>
						<div className="LPinfo">
							<div className="LPname">Bucklo Wrop Wooden Table</div>
							<div className="LPprice">$56.12</div>
							<div className="LPaddress">TP. Hồ Chí Minh</div>
							<div className="LPadd">Add to Cart</div>
						</div>
					</div>
					<div className="blockLP">
						<img className="imageLP"
							loading="lazy"
							srcSet={LP7}
						/>
						<div className="LPinfo">
							<div className="LPname">Bucklo Wrop Wooden Table</div>
							<div className="LPprice">$56.12</div>
							<div className="LPaddress">TP. Hồ Chí Minh</div>
							<div className="LPadd">Add to Cart</div>
						</div>
					</div>
					<div className="blockLP">
						<img classmainImageName="imageLP"
							loading="lazy"
							srcSet={LP8}
						/>
						<div className="LPinfo">
							<div className="LPname">Bucklo Wrop Wooden Table</div>
							<div className="LPprice">$56.12</div>
							<div className="LPaddress">TP. Hồ Chí Minh</div>
							<div className="LPadd">Add to Cart</div>
						</div>
					</div>
				</Carousel>;

			</div>

			<div className="Categories">
				<div className="CateTitle">Categories</div>
				<div className="CateSection">
					<div className="CateSectionName">Electronics</div>
					<div className="CateSectionName">Gift Cards</div>
					<div className="CateSectionName">Kindle E-reader</div>
					<div className="CateSectionName">Baby</div>
					<div className="CateSectionName">Health and Household</div>
				</div>
				<div>
					<hr className="myLine" />
				</div>
				<div className="CateKinds">
					<div className="CateKind">
						<div className="CateKindText">Camera</div>
						<div className="CateKindText">Home audio</div>
						<div className="CateKindText">Office Electronics</div>
						<div className="CateKindText">Service Plans</div>
						<div className="CateKindText">Curtains</div>
						<div className="CateKindText">Coffe Tables</div>
					</div>
					<div className="CateKind">
						<div className="CateKindText">Appliances</div>
						<div className="CateKindText">Cabinets</div>
						<div className="CateKindText">Chairs</div>
						<div className="CateKindText">Cookware</div>
						<div className="CateKindText">Curtains</div>
						<div className="CateKindText">Dining Tables</div>
					</div>
					<div className="CateKind">
						<div className="CateKindText">Beds</div>
						<div className="CateKindText">Curtains</div>
						<div className="CateKindText">Chets</div>
						<div className="CateKindText">Lighting</div>
						<div className="CateKindText">Mattresses</div>
						<div className="CateKindText">Mirrors</div>
					</div>
					<div className="CateKind">
						<div className="CateKindText">Accessories</div>
						<div className="CateKindText">Cabinets</div>
						<div className="CateKindText">Lighting</div>
						<div className="CateKindText">Mirrors</div>
						<div className="CateKindText">Showers</div>
						<div className="CateKindText">Sinks</div>	
					</div>
					<div className="CateKind">
						<div className="CateKindText">Bookcases</div>
						<div className="CateKindText">Chairs</div>
						<div className="CateKindText">Lighting</div>
						<div className="CateKindText">Desks</div>
						<div className="CateKindText">Drawers</div>
						<div className="CateKindText">Organissers</div>	
					</div>

				</div>
			</div>


			 <Link to= "/2HandWarehouse/ViewProduct">
					<button className='CreateRecipeBtn'>View product</button>
				</Link>
			<Outlet/>
		</div >
	);
}

export default HomePage;