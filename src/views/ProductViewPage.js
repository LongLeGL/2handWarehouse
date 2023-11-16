import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import MyImage from "./components/myImage";
import "./ProductViewPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Star from "./components/Star";
import AddToCart from "./components/AddToCard";
import { Button } from "./components/button";
import Product from "./components/Product";

const API = ""

function ProductViewing(props) {
    console.log(props)
    return (
        <div className="product-viewing">
            <div className="div-2">
                <div className="frame">
                    <div className="overlap-wrapper">
                        <div className="overlap-3">
                            <div className="product">
                                <div className="rectangle">
                                    <MyImage imgs={props.mainImage} />
                                </div>
                                <p className="p">Oppo A57 Ram 6/128G xanh</p>
                                <div className="rating-large-solid-instance">
                                    <Star stars={4.7} reviews={90} />
                                </div>
                                <div className="text-wrapper-9">2.550.000 đ</div>
                                <div className="overlap-group-2">
                                    <div className="flexcontainer">
                                        <p className="text">
                                            <span className="span">
                                                OPPO A57 Máy mới nguyên hộp Giá 2TR550K <br />
                                            </span>
                                        </p>
                                        <p className="text">
                                            <span className="span">
                                                <br />
                                            </span>
                                        </p>
                                        <p className="text">
                                            <span className="span">
                                                Ram 6/128g pin khỏe 5000mAh,Android 12
                                                <br />
                                            </span>
                                        </p>

                                    </div>

                                </div>

                                <div className="rectangle-2" />
                                <p className="product-location-da">
                                    <span className="text-wrapper-10">Product location:</span>
                                    <span className="text-wrapper-11"> Da Nang, Vietnam</span>
                                </p>

                                <NavLink to="">
                                    <Button className="div-wrapper" >Add to Cart</Button>
                                </NavLink>


                                <NavLink to="">
                                    <Button className="button-instance">Buy It Now!</Button>
                                </NavLink>

                                <div className="group-5">
                                    <div className="text-wrapper-13">Quantity:</div>
                                    <div className="group-6">
                                        <AddToCart product={{ id: '1', stock: 100 }} />

                                    </div>
                                </div>

                            </div>
                            <img className="frame-3" alt="Frame" src="https://cdn.pixabay.com/photo/2016/06/15/15/02/info-1459077_1280.png" />
                            <p className="contacts-phone-no">
                                <span className="text-wrapper-10">Contacts:</span>
                                <span className="text-wrapper-11">
                                    {" "}
                                    <br />
                                    Phone no: 099999999
                                    <br />
                                    Address: Hung Vuong str.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="product-grid">
                    <div className="product-grid-2">
                        <div className="text-wrapper-15">Related Products</div>

                        <div className="product-2">
                            <Product curElem={{ id: 1, name: "Iphone 15", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "20,000,000,000", location: "TP HCM" }}></Product>
                        </div>
                        <div className="product-3">
                            <Product curElem={{ id: 1, name: "Iphone 15", image: "https://down-vn.img.susercontent.com/file/807da9291d743019ec02fa95ac392b6c", price: "20,000,000,000", location: "TP HCM" }}></Product>
                        </div>
                        <div className="product-4">
                            <Product curElem={{ id: 1, name: "Iphone 15", image: "https://down-vn.img.susercontent.com/file/208db6bb03eb0a3b2dbebce4f25c2242", price: "20,000,000,000", location: "TP HCM" }}></Product>
                        </div>
                        <div className="product-5">
                            <Product curElem={{ id: 1, name: "Iphone 15", image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lheblg07odf72b", price: "20,000,000,000", location: "TP HCM" }}></Product>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default ProductViewing;