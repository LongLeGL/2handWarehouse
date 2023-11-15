import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CheckoutItem from '../../icons/checkoutItem.png'


function OrderPage() {


    const product = {
        description: "Bucklo Wrop Wooden Table",
        price: "109.36"
    }



    return (
        <div className='CheckOutPage'>
            
            <div className="ml-[290px] mb-[30px] text-3xl font-light text-gray-600 mt-[40px]">
                Shopping Cart 
            </div>

            <div class="ml-[235px] flex gap-[20px]">
                <div className='w-[932px] h-[202px] p-[2px] bg-[#e3e3e3] mb-[30px] flex flex-col items-center rounded-lg'>
                    <div className='flex flex-col w-full bg-white rounded-lg'>
                        <div className='flex items-center justify-between '>
                            <div className='flex w-[450px] items-center justify-start py-[12px] pl-[94px]'>
                                Product
                            </div>
                            <div className='grow flex justify-between items-center'>
                                <div className='w-[240px]	 flex justify-center'>
                                    Quantity
                                </div>
                                <div className='grow flex justify-center'>
                                    Asking Price Total
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='w-full h-full p-[1px]'>
                        <div className='w-full h-full bg-white flex items-center justify-between'>
                            <div className=' flex items-center justify-start pl-[94px] w-[450px]'>
                                <img
                                    src={CheckoutItem}
                                    alt='checkout item table'
                                />
                                <div className='flex flex-col gap-[8px]'>
                                    <div className='text-xl text-[#1d1f1f]'>
                                        Bucklo Wrop Wooden Table
                                    </div>
                                    <div className=' text-base text-[#5d5f5f]'>
                                        Color: Brown
                                    </div>
                                    <div className='text-base text-[#5d5f5f]'>
                                        Dimension: 40 x 60 cm
                                    </div>
                                </div>
                            </div>
                            <div className='grow flex justify-between items-center'>
                                <div className='w-[240px] flex justify-center'>
                                    <div className='rounded-2xl bg-slate-100  p-[2px]'>
                                        <button className='rounded-2xl bg-white text-slate-950 flex items-center justify-between gap-[10px]'>
                                            <div>
                                                1
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M9 9L12 6L15 9" stroke="#042616" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M9 15L12 18L15 15" stroke="#042616" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className='grow flex justify-center'>
                                    $69.36
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='bg-[#e3e3e3] mr-[20px] p-[2px] min-w-[400px] rounded-lg'>
                    <div class="flex flex-col w-full p-[20px] bg-white rounded-lg">
                        <div class="summary">Summary</div>
                        <div class="total-final-price">
                            <div class="total-final">Total final price</div>
                            <div class="price">$69.36</div>
                        </div>
                        <div class="shipping">
                            <div class="shipping-text">Shipping</div>
                            <div class="price">$0.0</div>
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
                            <div class="price">$69.36</div>
                        </div>
                        <button type="button" class="cursor-pointer bg-[#000000] rounded-[30px] text-sm font-light h-[35px] mt-[20px] font-serif">Send order for approval</button>
                    </div>
                </div>
            </div>


            <div class="flex items-start justify-between ml-[248px] w-[940px] mb-[60px]">
                <div class="delivery">
                    <div class="delivery-payment-tittle font-light text-gray-600">
                        Delivery method
                    </div>
                    <div className='ml-[10px] text-gray-500'>
                        <label class="container-delivery">Self contacts
                            <input type="radio" name="delivery-method" />
                            <span class="checkmark-delivery"></span>
                        </label>
                        <label class="container-delivery">Shipment service
                            <input type="radio" name="delivery-method" />
                            <span class="checkmark-delivery"></span>
                        </label>
                        <div className='ml-[74px] flex flex-col'>
                            <label for="country" class="country-label" className='text-2xl mb-[20px]'>Country<span className='text-red-600 mx-[4px]'>*</span></label>
                            {/* <select id="country" name="country" class="country-input">
								<option value="Vietnam">VietNam</option>
								<option value="America">America</option>
								<option value="China">China</option>
								<option value="Korea">Korea</option>
							</select> */}

                            <input name="myInput" className='bg-slate-100  py-[14px] pl-[24px] w-[450px] rounded-2xl  mb-[20px]' value={"Vietnam"} />

                            <label for="province" class="province-label" className='text-2xl mb-[20px]'>Province<span className='text-red-600 mx-[4px]'>*</span></label>
                            {/* <select id="province" name="province" class="province-input">
								<option value="HCM">Ho Chi Minh city</option>
								<option value="Danang">Da Nang</option>
								<option value="Hanoi">Ha Noi</option>
								<option value="Haiphong">Hai Phong</option>
							</select> */}
                            <input name="myInput" className='bg-slate-100  py-[14px] pl-[24px] w-[450px] rounded-2xl mb-[20px]' value={"none"} />
                            <label for="city" class="city-label" className='text-2xl mb-[20px]'>City<span className='text-red-600 mx-[4px]'>*</span></label>
                            {/* <select id="city" name="city" class="city-input">
								<option value="Thuduc">Thu Duc</option>
								<option value="Binhduong">Binh Duong</option>	
								<option value="Dian">Di An</option>
								<option value="Phunhuan">Phu Nhuan</option>
							</select> */}
                            <input name="myInput" className='bg-slate-100  py-[14px] pl-[24px] w-[450px] rounded-2xl mb-[20px]' value={"Ho Chi Minh city"} />
                            <label for="address" class="address-label" className='text-2xl mb-[20px]'>Address<span className='text-red-600 mx-[4px]'>*</span></label>
                            {/* <input type="text" name="address" id="address" class="address-input" required></input> */}
                            <input name="myInput" className='bg-slate-100  py-[14px] pl-[24px] w-[450px] rounded-2xl mb-[20px]' value={"52/26/2 Lu Gia street"} />
                        </div>
                        <div className="flex flex-col">
                        <label for="proposed-price"  className='text-2xl mb-[20px]'>Proposed price</label>
                        <input name="myInput" className='bg-slate-100  py-[14px] pl-[24px] w-[450px] rounded-2xl  mb-[20px]' />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default OrderPage;