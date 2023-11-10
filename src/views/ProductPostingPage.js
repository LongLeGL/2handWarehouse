
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./ProductPostingPage.css";
import AddToCart from "./components/AddToCard";

function ProductPosting(props) {
    return (
        <div className="product-posting">
            <div className="div-2">
                <div className="group-3">
                    <div className="overlap-2">

                        <div className="overlap-3">
                            <div className="group-4">
                                <div className="overlap-4">
                                    <div className="group-5">
                                        <div className="C">PRODUCT&#39;S NAME</div>
                                        <input className="div-3" />
                                    </div>
                                    <div className="group-6">

                                        <div className="text-wrapper-16">CATEGORY</div>
                                        <select className="select-category">
                                            <option className="select-category" value="1">
                                                Option 1
                                            </option>
                                            <option className="select-category" value="2">
                                                Option 2
                                            </option>
                                            <option className="select-category" value="3">
                                                Option 3
                                            </option>
                                        </select>

                                    </div>
                                    <div className="group-7">
                                        <div className="text-wrapper-15">ASKING PRICE</div>
                                        <input className="div-3" />
                                    </div>
                                    <div className="group-8">
                                        <div className="text-wrapper-15">QUANTITY</div>
                                        <div className="div-31">
                                        <AddToCart product={{ id: '1', stock: 100 }} />
                                        </div>
                                    </div>
                                    <div className="group-9">
                                        <div className="text-wrapper-15">DESCRIPTION</div>

                                        <textarea className="rectangle-2" />
                                    </div>
                                    <label className="reveal-contact">
                                        REVEAL CONTACT INFORMATION
                                    </label>
                                    <input type="checkbox" id="" name="" value="" className="vector-3"></input>
                                    
                                    <div className="group-10">
                                        <div className="shop-ADDRESS">SHOP ADDRESS</div>
                                        <input className="rectangle-3" />
                                    </div>
                                    <div className="overlap-group-wrapper">
                                        <div className="overlap-6">
                                            <div className="phone-number">PHONE NUMBER</div>
                                            <input className="rectangle-3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="group-11">
                                    <div className="confirm-wrapper">
                                        <div className="confirm">CONFIRM</div>
                                    </div>
                                </div>
                            </div>
                            <div className="group-12">
                                <div className="overlap-7">
                                    <div className="product-s-location">PRODUCT’S LOCATION</div>
                                </div>
                            </div>

                            <div className="group-15">
                                <div className="input-1">
                                    <p className="text-wrapper-18">Country*</p>
                                    <input
                                        type="text"
                                        class="with-icon-button-wrapper"
                                        placeholder="Insert Country"
                                    />
                                </div>
                                <div className="input-2">
                                    <div className="text-wrapper-18">Province*</div>
                                    <input
                                        type="text" s
                                        class="with-icon-button-wrapper"
                                        placeholder="Insert Province"
                                    />
                                </div>
                                <div className="input-3">
                                    <div className="text-wrapper-18">City*</div>
                                    <input
                                        type="text"
                                        class="with-icon-button-wrapper"
                                        placeholder="Insert City"
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="group-16">
                            <input
                                type="file"
                                accept="image/*"
                                multiple

                            />

                        </div>

                    </div>
                    <div className="add-new-item">ADD NEW ITEM</div>
                    <div className="group-21">
                        <div className="overlap-7">
                            <div className="product-s-images">PRODUCT’S IMAGES</div>
                        </div>
                    </div>
                    <div className="group-22">
                        <div className="overlap-7">
                            <div className="product-s-DETAIL">PRODUCT’S DETAIL</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default ProductPosting;