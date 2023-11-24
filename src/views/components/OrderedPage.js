import './OrderedPage.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CheckoutItem from '../../icons/checkoutItem.png'


function OrderedPage() {
    const parsedUrl = new URL(window.location.href);
	let orderId = parsedUrl.searchParams.get("id");

    const [itemName, setitemName] = useState("");
	const [purQuantity, setpurQuantity] = useState(0);
	const [totalPrice, settotalPrice] = useState(0.0);
	const [shipFee, setshipFee] = useState();
	const [shipMethod, setshipMethod] = useState("");
	const [shipAddress, setshipAddress] = useState({});

    const fetchOrder = async (id) => {
		const response = await fetch(
		  `https://twohandwarehouse-v1.onrender.com/api/get-orders?id=${id}`
		);
		var data = await response.json();
		data = data.orders;
		setitemName(data.product.prodName);
		setpurQuantity(data.purQuantity);
		settotalPrice(data.userProposedPrice);
		setshipFee(data.purShippingFee);
		setshipMethod(data.shipMethod);
		setshipAddress(data.receivingPlace);
	};

	fetchOrder(orderId);

    return (
        <div class="OrderedPage">
            <h1>Ordered</h1>
            <div class="reset">
                {/* <h1 class="reset-heading">Ordered</h1> */}
                <div class="summary">Order details</div>
                <div class="detail">
                    <div class="detail-attribute">Address</div>
                    <div class="detail-value">{shipAddress.address +", "+ shipAddress.city +", "+ shipAddress.province +", "+ shipAddress.country}</div>
                </div>
                <div class="detail">
                    <div class="detail-attribute">Payment method</div>
                    <div class="detail-value">Paypal</div>
                </div>
                
                <hr
                    style={{
                        marginTop: '20px',
                        background: '#c7c7c7',
                        height: '0.5px',
                    }}
                />
                <div class="detail">
                    <div class="detail-attribute">Price</div>
                    <div class="detail-value">${parseFloat(totalPrice)}</div>
                </div>
                <div class="detail">
                    <div class="detail-attribute">Shipping cost</div>
                    <div class="detail-value">${parseFloat(shipFee)}</div>
                </div>
                <hr
                    style={{
                        marginTop: '20px',
                        background: '#c7c7c7',
                        height: '0.8px',
                    }}
                />
                <div class="detail">
                    <div class="detail-attribute">Total</div>
                    <div class="detail-value">${parseFloat(totalPrice)+parseFloat(shipFee)}</div>
                </div>
                <a href='/2HandWarehouse/DeliveryStatus'>
                    <button type="button" class="cursor-pointer bg-[#000000] rounded-[30px] text-sm font-light h-[45px] mt-[20px] w-[100%] font-serif">View order status</button>
                </a>
            </div>
        </div>

    );
}

export default OrderedPage;