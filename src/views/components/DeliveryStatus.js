import './DeliveryStatus.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Ava from "../../icons/maleava.jpg"
import Phone from "../../icons/phone.jpg"
function DeliveryStatus() {

    return (
        <div class="DeliveryStatus">
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
                    <div class="nav-2" style={{ color: "#FF5F00" }}>Delivering orders</div>
                    <div class="nav-2">Waiting approval</div>
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
                                <div class="product-data">
                                    <div class="product-name"> OPPO A5</div>
                                    <div class="quantity">x2</div>
                                    <div class="delivering-status">Your order has arrived in HCM city</div>
                                </div>
                            </div>
                            <div class="upper-right">
                                <div class="upper-right-half">
                                    <div class="time">14-2-2023 09:59</div>
                                    <div class="status">Delivering</div>
                                </div>
                                {/* <div class="upper-right-half">
                                    <div class="asking">Asking price:</div>
                                    <div class="price">đ 2.500.00</div>
                                </div> */}
                                <div class="upper-right-half">
                                    <div class="asking" style={{ marginTop: "50px", color: "#F0F0F0" }}>Proposed price:</div>
                                    <div class="price" style={{ marginTop: "50px" }}>đ 2.300.00</div>
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
                            <div class="upper-left">

                            </div>
                            <div class="lower-right">

                                {/* <div class="upper-right-half">
                                    <div class="asking">Asking price:</div>
                                    <div class="price">đ 2.500.00</div>
                                </div> */}
                                <div class="lower-right-half">
                                    <div class="shipping" style={{ marginTop: "50px" }}>Shipping cost: </div>
                                    <div class="cost" style={{ marginTop: "50px" }}> đ 20.000</div>
                                </div>
                                <div class="lower-right-half">
                                    <div class="shipping" style={{ marginTop: "50px" }}>Order total: </div>
                                    <div class="cost" style={{ marginTop: "50px" }}> đ 4.620.000</div>
                                </div>
                                <button class="btn" style={{cursor: "not-allowed", color: "rgb(163, 163, 163)", border: "1px solid rgb(163, 163, 163)"}}>Confirm recieved</button>
                            </div>
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
                                <div class="product-data">
                                    <div class="product-name"> OPPO A5</div>
                                    <div class="quantity">x2</div>
                                    <div class="delivering-status">Your order has arrived</div>
                                </div>
                            </div>
                            <div class="upper-right">
                                <div class="upper-right-half">
                                    <div class="time">14-2-2023 09:59</div>
                                    <div class="status">Delivered</div>
                                </div>
                                {/* <div class="upper-right-half">
                                    <div class="asking">Asking price:</div>
                                    <div class="price">đ 2.500.00</div>
                                </div> */}
                                <div class="upper-right-half">
                                    <div class="asking" style={{ marginTop: "50px", color: "#F0F0F0" }}>Proposed price:</div>
                                    <div class="price" style={{ marginTop: "50px" }}>đ 2.300.00</div>
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
                            <div class="upper-left">

                            </div>
                            <div class="lower-right">

                                {/* <div class="upper-right-half">
                                    <div class="asking">Asking price:</div>
                                    <div class="price">đ 2.500.00</div>
                                </div> */}
                                <div class="lower-right-half">
                                    <div class="shipping" style={{ marginTop: "50px" }}>Shipping cost: </div>
                                    <div class="cost" style={{ marginTop: "50px" }}> đ 20.000</div>
                                </div>
                                <div class="lower-right-half">
                                    <div class="shipping" style={{ marginTop: "50px" }}>Order total: </div>
                                    <div class="cost" style={{ marginTop: "50px" }}> đ 4.620.000</div>
                                </div>
                                <button class="btn">Confirm recieved</button>
                            </div>
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
                                <div class="product-data">
                                    <div class="product-name"> OPPO A5</div>
                                    <div class="quantity">x2</div>
                                    <div class="delivering-status">Shipper is comming to pick up your item</div>
                                </div>
                            </div>
                            <div class="upper-right">
                                <div class="upper-right-half">
                                    <div class="time">14-2-2023 09:59</div>
                                    <div class="status" style={{color: "#00FF47"}}>Picking up</div>
                                </div>
                                {/* <div class="upper-right-half">
                                    <div class="asking">Asking price:</div>
                                    <div class="price">đ 2.500.00</div>
                                </div> */}
                                <div class="upper-right-half">
                                    <div class="asking" style={{ marginTop: "50px", color: "#F0F0F0" }}>Proposed price:</div>
                                    <div class="price" style={{ marginTop: "50px", color: "#00FF47" }}>đ 2.300.00</div>
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
                            <div class="upper-left">

                            </div>
                            <div class="lower-right">

                                {/* <div class="upper-right-half">
                                    <div class="asking">Asking price:</div>
                                    <div class="price">đ 2.500.00</div>
                                </div> */}
                                <div class="lower-right-half">
                                    <div class="shipping" style={{ marginTop: "50px"}}>Shipping cost: </div>
                                    <div class="cost" style={{ marginTop: "50px", color: "#00FF47"  }}> đ 20.000</div>
                                </div>
                                <div class="lower-right-half">
                                    <div class="shipping" style={{ marginTop: "50px" }}>Order total: </div>
                                    <div class="cost" style={{ marginTop: "50px", color: "#00FF47"  }}> đ 4.620.000</div>
                                </div>
                                {/* <button class="btn">Confirm recieved</button> */}
                            </div>
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
                                <div class="product-data">
                                    <div class="product-name"> OPPO A5</div>
                                    <div class="quantity">x2</div>
                                    <div class="delivering-status">Your order has arrived in HCM city</div>
                                </div>
                            </div>
                            <div class="upper-right">
                                <div class="upper-right-half">
                                    <div class="time">14-2-2023 09:59</div>
                                    <div class="status" style={{color: "#00FF47"}}>Deliviering</div>
                                </div>
                                {/* <div class="upper-right-half">
                                    <div class="asking">Asking price:</div>
                                    <div class="price">đ 2.500.00</div>
                                </div> */}
                                <div class="upper-right-half">
                                    <div class="asking" style={{ marginTop: "50px", color: "#F0F0F0" }}>Proposed price:</div>
                                    <div class="price" style={{ marginTop: "50px", color: "#00FF47" }}>đ 2.300.00</div>
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
                            <div class="upper-left">

                            </div>
                            <div class="lower-right">

                                {/* <div class="upper-right-half">
                                    <div class="asking">Asking price:</div>
                                    <div class="price">đ 2.500.00</div>
                                </div> */}
                                <div class="lower-right-half">
                                    <div class="shipping" style={{ marginTop: "50px"}}>Shipping cost: </div>
                                    <div class="cost" style={{ marginTop: "50px", color: "#00FF47"  }}> đ 20.000</div>
                                </div>
                                <div class="lower-right-half">
                                    <div class="shipping" style={{ marginTop: "50px" }}>Order total: </div>
                                    <div class="cost" style={{ marginTop: "50px", color: "#00FF47"  }}> đ 4.620.000</div>
                                </div>
                                {/* <button class="btn">Confirm recieved</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DeliveryStatus;