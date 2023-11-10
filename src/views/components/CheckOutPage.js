import './CheckOutPage.css';
import logoImg from '../../icons/logo.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CheckOutPage() {

    return (
        <div className='CheckOutPage'>
            <div className="label">
				<div className="text-wrapper">Check out</div>
			</div>
			<div class="pay-price">
				<div class="price-table">
					<div class="grid-container">
						<div class="item1">Product</div>
						<div class="item2">Quantity</div>
						<div class="item3">Asking price total</div>
					</div>
					<div class="grid-container-product">
						<div class="item4">
							<div class="product-picture">
								<image src="C:\Users\DELL\Downloads\table.png"></image>
								This is product picture
							</div>
							<div class="product-info">
								<div class="product-name">Mini table</div>
								<div class="product-color">Color: brown</div>
								<div class="product-size">Dimension: 40cm x 60cm </div>
							</div>
						</div>
						<input class="item5" type="number" min="1"></input>

						<div class="item6">$69.36</div>
					</div>
				</div>
				<div class="pay-summary">
					<div class="summary">Summary</div>
					<div class="total-final-price">
						<div class="total-final">Total final price</div>
						<div class="price">$50.14</div>
					</div>
					<div class="shipping">
						<div class="shipping-text">Shipping</div>
						<div class="price">$40</div>
					</div>
					<hr
						style={{
							marginTop: '10px',
							background: '#c7c7c7',
							height: '0.5px',
						}}
					/>
					<div class="total">
						<div class="total-text">Total</div>
						<div class="price">$94.14</div>
					</div>
					<button class="checkout">Check out</button>
				</div>
			</div>
			<div class="delivery-payment">
				<div class="delivery">
					<div class="delivery-payment-tittle">
						Delivery method
					</div>
					<label class="container-delivery">Self contacts
						<input type="radio" name="delivery-method" />
						<span class="checkmark-delivery"></span>
					</label>
					<label class="container-delivery">Shipment service
						<input type="radio" name="delivery-method" />
						<span class="checkmark-delivery"></span>
					</label>
					<label for="country" class="country-label">Country</label>
					<select id="country" name="country" class="country-input">
						<option value="Vietnam">VietNam</option>
						<option value="America">America</option>
						<option value="China">China</option>
						<option value="Korea">Korea</option>
					</select>
					<label for="province" class="province-label">Province</label>
					<select id="province" name="province" class="province-input">
						<option value="HCM">Ho Chi Minh city</option>
						<option value="Danang">Da Nang</option>
						<option value="Hanoi">Ha Noi</option>
						<option value="Haiphong">Hai Phong</option>
					</select>
					<label for="city" class="city-label">City</label>
					<select id="city" name="city" class="city-input">
						<option value="Thuduc">Thu Duc</option>
						<option value="Binhduong">Binh Duong</option>
						<option value="Dian">Di An</option>
						<option value="Phunhuan">Phu Nhuan</option>
					</select>
					<label for="address" class="address-label">Address</label>
					<input type="text" name="address" id="address" class="address-input" required></input>
				</div>
				<div class="payment">
					<div class="delivery-payment-tittle">
						Payment method
					</div>
					<label class="container-payment">Cash
						<input type="radio" name="payment-method" />
						<span class="checkmark-payment"></span>
					</label>
					<label class="container-payment">Viettel Money
						<input type="radio" name="payment-method" />
						<span class="checkmark-payment"></span>
					</label>
					<label class="container-payment">MoMo
						<input type="radio" name="payment-method" />
						<span class="checkmark-payment"></span>
					</label>
					<label class="container-payment">Zalopay
						<input type="radio" name="payment-method" />
						<span class="checkmark-payment"></span>
					</label>
					<label class="container-payment">VNPay
						<input type="radio" name="payment-method" />
						<span class="checkmark-payment"></span>
					</label>
				</div>
			</div>
        </div>
    );
}

export default CheckOutPage;