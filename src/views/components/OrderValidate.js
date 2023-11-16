import './OrderValidate.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Ava from "../../icons/maleava.jpg"
import Phone from "../../icons/phone.jpg"
function OrderValidate() {

    return (
        <div class="OrderValidate">
            <div class="profile">
                <img src={Ava} style={{
                    width: "200px",
                    height: "200px",
                    marginTop: "80px",

                }} />
                <div class="profile-data">Le Hoang Long</div>
                <div class="profile-data">0923423235</div>
                <div class="profile-data">lehoanglong@gmail.com</div>
            </div>
            <div class="Content">
                <div class="nav-bar-1">
                    <div class="nav-1">Selling posts</div>
                    <div class="nav-1">Buy History</div>
                    <div class="nav-1">Sold History</div>
                    <div class="nav-1" style={{ color: "#FF5F00" }}>Delivering</div>
                </div>
                <div class="nav-bar-2">
                    <div class="nav-2">Delivering orders</div>
                    <div class="nav-2" style={{ color: "#FF5F00" }}>Waiting approval</div>
                </div>
                <div class="waiting-orders">
                    <div class="order">
                        <div class="upper-half">
                            <div class="upper-left">
                                <img src={Phone} style={{
                                    height: "120px",
                                    marginTop: "8px",
                                    marginLeft: "8px"
                                }} />
                                <div class="product-name"> OPPO A5</div>
                            </div>
                            <div class="upper-right">
                                <div class="upper-right-half">
                                    <div class="time">14-2-2023 09:59</div>
                                    <div class="status">Approving</div>
                                </div>
                                <div class="upper-right-half">
                                    <div class="asking">Asking price:</div>
                                    <div class="price">đ 2.500.00</div>
                                </div>
                                <div class="upper-right-half">
                                    <div class="asking" style={{ marginTop: "0px" }}>Proposed price:</div>
                                    <div class="price" style={{ marginTop: "0px" }}>đ 2.300.00</div>
                                </div>
                            </div>
                        </div>
                        <hr
                            style={{

                                background: '#5F5F5F',
                                height: '0.5px',
                            }}
                        />
                        <div class="lower-half">
                            <button class="btn" style={{ color: "#00FF47" }}>Approve</button>
                            <button class="btn" style={{ color: "#F00" }}>Reject</button>
                            <button class="btn">Contact Buyer</button>
                        </div>
                    </div>
                    <div class="order">
                        <div class="upper-half">
                            <div class="upper-left">
                                <img src={Phone} style={{
                                    height: "120px",
                                    marginTop: "8px",
                                    marginLeft: "8px"
                                }} />
                                <div class="product-name"> OPPO A5</div>
                            </div>
                            <div class="upper-right">
                                <div class="upper-right-half">
                                    <div class="time">14-2-2023 09:59</div>
                                    <div class="status">Approving</div>
                                </div>
                                <div class="upper-right-half">
                                    <div class="asking">Asking price:</div>
                                    <div class="price">đ 2.500.00</div>
                                </div>
                                <div class="upper-right-half">
                                    <div class="asking" style={{ marginTop: "0px" }}>Proposed price:</div>
                                    <div class="price" style={{ marginTop: "0px" }}>đ 2.300.00</div>
                                </div>
                            </div>
                        </div>
                        <hr
                            style={{

                                background: '#5F5F5F',
                                height: '0.5px',
                            }}
                        />
                        <div class="lower-half">
                            
                            <button class="btn" style={{marginLeft:"480px"}}>Contact Seller</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default OrderValidate;