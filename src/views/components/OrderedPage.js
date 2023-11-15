import './OrderedPage.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CheckoutItem from '../../icons/checkoutItem.png'


function OrderedPage() {

    return (
        <div class="OrderedPage">
            <h1>Ordered</h1>
            <div class="reset">
                {/* <h1 class="reset-heading">Ordered</h1> */}
                <div class="summary">Order details</div>
                <div class="total-final-price">
                    <div class="total-final">Address</div>
                    <div class="price">27, Street 8, District 7, HCM City</div>
                </div>
                <div class="shipping">
                    <div class="shipping-text">Payment method</div>
                    <div class="price">Cash</div>
                </div>
                <hr
                    style={{
                        marginTop: '20px',
                        background: '#c7c7c7',
                        height: '0.5px',
                    }}
                />
                <div class="total-final-price">
                    <div class="total-final">Price</div>
                    <div class="price">$69.36</div>
                </div>
                <div class="shipping">
                    <div class="shipping-text">Shipping</div>
                    <div class="price">$40</div>
                </div>
                <hr
                    style={{
                        marginTop: '20px',
                        background: '#c7c7c7',
                        height: '0.5px',
                    }}
                />
                <div class="total">
                    <div class="total-text">Total</div>
                    <div class="price">$109.36</div>
                </div>
                <button type="button" class="cursor-pointer bg-[#000000] rounded-[30px] text-sm font-light h-[45px] mt-[20px] w-[100%] font-serif">View order status</button>
            </div>
        </div>

    );
}

export default OrderedPage;