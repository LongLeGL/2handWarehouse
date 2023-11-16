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
                <div class="detail">
                    <div class="detail-attribute">Address</div>
                    <div class="detail-value">27, Street 8, District 7, HCM City</div>
                </div>
                <div class="detail">
                    <div class="detail-attribute">Payment method</div>
                    <div class="detail-value">Cash</div>
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
                    <div class="detail-value">$69.36</div>
                </div>
                <div class="detail">
                    <div class="detail-attribute">Shipping cost</div>
                    <div class="detail-value">$0</div>
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
                    <div class="detail-value">$69.36</div>
                </div>
                <button type="button" class="cursor-pointer bg-[#000000] rounded-[30px] text-sm font-light h-[45px] mt-[20px] w-[100%] font-serif">View order status</button>
            </div>
        </div>

    );
}

export default OrderedPage;