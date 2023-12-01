import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import MyImage from "./components/myImage";
import "./ProductViewPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Star from "./components/Star";
import AddToCart from "./components/AddToCard";
import { Button } from "./components/button";
import Product from "./components/Product";

// const API = "http://localhost:8080/api/get-item?id=all"



function ProductViewing(props) {
    const [data, setData] = useState(null);
    const [all, setDataAll] = useState(null);
    const { id } = useParams();
    // let mainImage = [
    //     { id: '1', url: `https://down-vn.img.susercontent.com/file/c3c76a6e6bc7557377c4ac31adcff646` },
    //     { id: '2', url: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llt6afd17vtrba" },
    //     { id: '3', url: "https://down-vn.img.susercontent.com/file/bbf41598d31e6414c79e2ea327a55d7c" },
    //     { id: '4', url: "https://down-vn.img.susercontent.com/file/sg-11134201-22120-b5nywz8t4jkv30" }
    // ]

    useEffect(() => {
        // Function to fetch data when the component mounts
        console.log(id)
        fetchData(id);
        fetchDataAll();
    }, [id]);
    let fetchData = async (id) => {
        try {
            // Make a GET request using the fetch API
            const response = await fetch('https://twohandwarehouse-v1.onrender.com/api/get-item?' + new URLSearchParams({
                id: id
            }))

            // Check if the request was successful (status code 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Parse the JSON data
            const result = await response.json();

            // Set the data in the state
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    let fetchDataAll = async () => {
        try {
            // Make a GET request using the fetch API
            const response = await fetch('https://twohandwarehouse-v1.onrender.com/api/get-item?' + new URLSearchParams({
                id: "all"
            }))

            // Check if the request was successful (status code 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Parse the JSON data
            const result = await response.json();

            // Set the data in the state
            setDataAll(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    if (data) {
        let item = data.items
        let mainImage = [
            { id: '1', url: process.env.PUBLIC_URL + item.images[0].url },
            { id: '2', url: item.images[1].url },
            { id: '3', url: item.images[2].url },
            { id: '4', url: item.images[3].url }
        ]
        if (all) {
            let items = all.items
            return (
                <div className="product-viewing">
                    <div className="div-2">
                        <div className="frame">
                            <div className="overlap-wrapper">
                                <div className="overlap-3">
                                    <div className="product">
                                        <div className="rectangle">
                                            <MyImage imgs={mainImage} />
                                        </div>
                                        <p className="p">{item.prodName}</p>
                                        <div className="rating-large-solid-instance">
                                            <Star stars={Math.floor(Math.random() * 51 + 10)/10.0} reviews={Math.floor(Math.random() * 1001)} />
                                        </div>
                                        <div className="text-wrapper-9">{item.prodAskPrice} USD</div>
                                        <div className="overlap-group-2">
                                            <div className="flexcontainer">
                                                <p className="text">
                                                    <span className="span">
                                                        ========================= <br />
                                                    </span>
                                                </p>
                                                <p className="text">
                                                    <span className="span">
                                                        <br />
                                                    </span>
                                                </p>
                                                <p className="text">
                                                    <span className="span">
                                                        {item.prodDesc}
                                                        <br />
                                                    </span>
                                                </p>
                                            </div>

                                        </div>

                                        <div className="rectangle-2" />
                                        <p className="product-location-da">
                                            <span className="text-wrapper-10">Product location:</span>
                                            <span className="text-wrapper-11"> {item.location.city}, {item.location.country}</span>
                                        </p>

                                        <NavLink to={`/2HandWarehouse/Order/${item.id}`}>
                                            <Button className="div-wrapper" >Add to Cart</Button>
                                        </NavLink>


                                        <NavLink to={`/2HandWarehouse/Order/${item.id}`}>
                                            <Button className="button-instance">Buy It Now!</Button>
                                        </NavLink>

                                        <div className="group-5">
                                            <div className="text-wrapper-13">Quantity:  {item.prodQuantity}</div>
                                            {/* <div className="group-6">
                                                <AddToCart product={{ id: item.id, stock: item.prodQuantity }} />
                                                
                                            </div> */}
                                        </div>

                                    </div>
                                    <img className="frame-3" alt="Frame" src="https://cdn.pixabay.com/photo/2016/06/15/15/02/info-1459077_1280.png" />
                                    <p className="contacts-phone-no">
                                        <span className="text-wrapper-10">Contacts:</span>
                                        <span className="text-wrapper-11">
                                            {" "}
                                            <br />
                                            Phone no: {item.prodPhone}
                                            <br />
                                            Address: {item.location.address}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="product-grid">
                            <div className="product-grid-2">
                                <div className="text-wrapper-15">Related Products</div>

                                <div className="product-2">
                                    <Product key={items[0].id} curElem={{ id: items[0].id, item: items[0], image: items[0].images[1].url }}></Product>
                                </div>
                                <div className="product-3">
                                    <Product key={items[1].id} curElem={{ id: items[1].id, item: items[1], image: items[1].images[1].url }}></Product>
                                </div>
                                <div className="product-4">
                                    <Product key={items[2].id} curElem={{ id: items[2].id, item: items[2], image: items[2].images[1].url }}></Product>
                                </div>
                                <div className="product-5">
                                    <Product key={items[3].id} curElem={{ id: items[3].id, item: items[3], image: items[3].images[1].url }}></Product>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            );
        }


    }



};

export default ProductViewing;