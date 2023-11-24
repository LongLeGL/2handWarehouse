import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AddToCart from './AddToCard';
import CheckoutItem from '../../icons/checkoutItem.png'


function OrderPage() {

    const [amount, setAmount] = useState(0);
    const [data, setData] = useState(null)
    const [country, setCountry] = useState('');
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [proposedPrice, setPropPrice] = useState(0);
    const [shipFee, setShipFee] = useState(0);
    const [shipMethod, setShipMethod] = useState(0);
    // const [contact, setContact] = useState(0);
    // const [deliver, setDeliver] = useState(0);
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const [err, setErr] = useState('');
    const product = {
        description: "Bucklo Wrop Wooden Table",
        price: "109.36"
    }

    let userId = sessionStorage.getItem("userId");
    console.log(userId)
    const handleChildClick = (childState) => {

        setAmount(childState);
    };
    useEffect(() => {
        // Function to fetch data when the component mounts
        fetchData(id);

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



    const handlefetch = async () => {
        setIsLoading(true);

        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    proposedPrice: proposedPrice,
                    quantity: amount,
                    shippingFee: shipFee,
                    shipMethod: shipMethod,
                    buyerId: userId,
                    productId: id,
                    receivePlace: {
                        country: country,
                        province: province,
                        city: city,
                        address: address
                    }
                })
            };
            fetch('https://twohandwarehouse-v1.onrender.com/api/create-order', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (!data.errCode) {
                        window.alert("Order success !");
                    }

                });

        } catch (err) {
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        let newtotal = 0
        if (data) {

            newtotal = (amount) ? amount * parseFloat(data.items.prodAskPrice) + shipFee : parseFloat(data.items.prodAskPrice) + shipFee;
            console.log(data.items.prodAskPrice)
        }
        setTotal(newtotal)
    }, [amount, data]);

    if (data) {
        let item = data.items

        return (
            <div className='CheckOutPage'>

                <div className="ml-[290px] mb-[30px] text-3xl font-light text-gray-600 mt-[40px]">
                    Shopping Cart
                </div>

                <div class="ml-[80px] flex gap-[20px]">
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
                                            {item.prodName}
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
                                            <div className='rounded-2xl bg-white text-slate-950 flex items-center justify-between gap-[10px]'>
                                                {/* <div>
                                                    1
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M9 9L12 6L15 9" stroke="#042616" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M9 15L12 18L15 15" stroke="#042616" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg> */}
                                                <AddToCart product={{ stock: 100 }} onChildClick={handleChildClick} />

                                            </div>

                                        </div>
                                    </div>
                                    <div className='grow flex justify-center'>
                                        ${item.prodAskPrice}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='bg-[#e3e3e3] mr-[20px] p-[2px] min-w-[400px] rounded-lg'>
                        <div class="flex flex-col w-full p-[20px] bg-white rounded-lg">
                            <div class="summary">Summary</div>
                            <div class="detail">
                                <div class="detail-attribute">Price</div>
                                <div class="detail-value">{item.prodAskPrice}</div>
                            </div>
                            <div class="detail">
                                <div class="detail-attribute">Shipping cost</div>
                                <div class="detail-value">${shipFee}</div>
                            </div>
                            <hr
                                style={{
                                    marginTop: '10px',
                                    background: '#c7c7c7',
                                    height: '0.8px',
                                }}
                            />
                            <div class="detail">
                                <div class="detail-attribute">Total</div>
                                <div class="detail-value">${total}</div>
                            </div>
                            <button type="button" class="cursor-pointer bg-[#000000] rounded-[30px] text-sm font-light h-[35px] mt-[20px] font-serif"
                                onClick={handlefetch}>Send order for approval</button>
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
                                <input type="radio" name="delivery-method" onClick={() => { setShipFee(0); setShipMethod('self contacts') }} />
                                <span class="checkmark-delivery"></span>
                            </label>
                            <label class="container-delivery">Shipment service
                                <input type="radio" name="delivery-method" onClick={() => { setShipFee(50000); setShipMethod('delivery service') }} />
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

                                <input name="myInput" className='bg-slate-100  py-[14px] pl-[24px] w-[450px] rounded-2xl  mb-[20px]'
                                    value={country}
                                    onChange={event => setCountry(event.target.value)} />

                                <label for="province" class="province-label" className='text-2xl mb-[20px]'>Province<span className='text-red-600 mx-[4px]'>*</span></label>
                                {/* <select id="province" name="province" class="province-input">
                                    <option value="HCM">Ho Chi Minh city</option>
                                    <option value="Danang">Da Nang</option>
                                    <option value="Hanoi">Ha Noi</option>
                                    <option value="Haiphong">Hai Phong</option>
                                </select> */}
                                <input name="myInput" className='bg-slate-100  py-[14px] pl-[24px] w-[450px] rounded-2xl mb-[20px]' value={province}
                                    onChange={event => setProvince(event.target.value)} />
                                <label for="city" class="city-label" className='text-2xl mb-[20px]'>City<span className='text-red-600 mx-[4px]'>*</span></label>
                                {/* <select id="city" name="city" class="city-input">
                                    <option value="Thuduc">Thu Duc</option>
                                    <option value="Binhduong">Binh Duong</option>	
                                    <option value="Dian">Di An</option>
                                    <option value="Phunhuan">Phu Nhuan</option>
                                </select> */}
                                <input name="myInput" className='bg-slate-100  py-[14px] pl-[24px] w-[450px] rounded-2xl mb-[20px]'
                                    value={city}
                                    onChange={event => setCity(event.target.value)} />
                                <label for="address" class="address-label" className='text-2xl mb-[20px]'>Address<span className='text-red-600 mx-[4px]'>*</span></label>
                                {/* <input type="text" name="address" id="address" class="address-input" required></input> */}
                                <input name="myInput" className='bg-slate-100  py-[14px] pl-[24px] w-[450px] rounded-2xl mb-[20px]'
                                    value={address}
                                    onChange={event => setAddress(event.target.value)} />
                            </div>
                            <div className="flex flex-col">
                                <label for="proposed-price" className='text-2xl mb-[20px]'>Proposed price</label>
                                <input name="myInput" className='bg-slate-100  py-[14px] pl-[24px] w-[450px] rounded-2xl  mb-[20px]'
                                    value={proposedPrice}
                                    onChange={event => setPropPrice(event.target.value)} />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }

}

export default OrderPage;