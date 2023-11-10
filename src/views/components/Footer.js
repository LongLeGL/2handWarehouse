import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import './Footer.css';


function Footer() {
    return (
        <div className='footer'>
            <div className='FooterLogo'>
                <div id='upBar_Logo'>
                    <div id='logoRedCircle'>
                        <div id='logoNumber'>2</div>
                    </div>
                    <div id='footerLogoText'>hand</div>
                </div>
            </div>

            <div id='footer3cols'>
                <div id='footerContacts'>
                    <p>Address: 2231 Princess Street, London, UK</p>
                    <p>Phone: (+123)1122-345-67</p>
                    <p>Email: info@gmail.com</p>
                </div>
                <div id='footerLinks'>
                    <a href=''>About us</a>
                    <a href=''>Features</a>
                    <a href=''>Shipping</a>
                    <a href=''>Help</a>
                    <a href=''>Privacy Policy</a>
                    <a href=''>FAQs</a>
                </div>
                <div id='footerNewsletter'>
                    <h3>Newsletter</h3>
                    <p>Sign up for our Newsletter to get more events, promotions & news from us!</p>
                    <form action="" id="newsletterInputbox">
                        <input type="text" id ="newsEmailInput" placeholder="Enter your email" onChange={null}/>
                        <button id="registerNewsLetterBtn" type="submit" onClick={null}><FontAwesomeIcon icon={faPaperPlane} /></button>
                    </form>
                </div>
            </div>

            <div className='footerCopyrights'>
                Copyright © All rights Reserved
            </div>
        </div>
    );
}

export default Footer;

{/* <div class="footer">
    <p class="sign-up-for-our">Sign up for our Newsletter to get more events, promotions &amp; news from us!</p>
    <p class="text-wrapper">Address: 17 Princess Road, London, Greater London NW1 8JR, UK</p>
    <p class="div">Phone: (800) 8001-8588, (0600) 874 548</p>
    <div class="flexcontainer">
        <p class="text-i">
        <span class="span">About Us<br /></span>
        </p>
        <p class="text-i">
        <span class="span">Shop<br /></span>
        </p>
        <p class="text-i">
        <span class="span">Features<br /></span>
        </p>
        <p class="text-i">
        <span class="span">Sale<br /></span>
        </p>
        <p class="text-i"><span class="span">Contact</span></p>
    </div>
    <div class="flexcontainer-i">
        <p class="text-i">
        <span class="span">Shipping<br /></span>
        </p>
        <p class="text-i">
        <span class="span">Help<br /></span>
        </p>
        <p class="text-i">
        <span class="span">Privacy Policy<br /></span>
        </p>
        <p class="text-i"><span class="span">FAQs</span></p>
    </div>
    <div class="text-wrapper-2">Email: info@gmail.com</div>
    <p class="p">Copyright © All rights Reserved</p>
    <div class="text-wrapper-3">Company</div>
    <div class="text-wrapper-4">Newsletter</div>
    <div class="input">
        <div class="overlap-group">
        <div class="rectangle"></div>
        <div class="icbutton-primary"><img class="ic-send-line" src="img/line.svg" /></div>
        <input class="enter-your-email" placeholder="Enter your email" type="email" />
        </div>
    </div>
    <img class="line" src="img/line-2.svg" />
    <img class="ic-facebook" src="img/ic-facebook.svg" />
    <img class="ic-google" src="img/ic-google.svg" />
    <div class="ic-instagram"><img class="subtract" src="img/subtract.svg" /></div>
    <img class="ic-twitter" src="img/ic-twitter.svg" />
    <img class="ic-payment-visa" src="img/visa.svg" />
    <img class="ic-payment" src="img/master-card.svg" />
    <img class="ic-payment-paypal" src="img/pay-pal.svg" />
    <div class="logo">
        <img class="OME" src="img/OME.svg" />
        <div class="overlap"><div class="text-wrapper-5">2</div></div>
        <div class="text-wrapper-6">time</div>
    </div>
</div> */}