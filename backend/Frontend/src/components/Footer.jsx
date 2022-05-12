import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='main-footer ' >
            <div className='container'>
                <div className='row '>
                    {/*Coloum1 */}
                    <div className='col'>
                        <h4>FIND US AT!</h4>
                        <ul className='list-unstyles'>
                            <li>1800-170-170</li>
                            <li>Mumbai,India</li>
                            <li>TECH PARK,MUMBAI</li>
                        </ul>
                    </div>
                    {/*Column2*/}
                    <div className='col'>
                        <h4>HELP</h4>
                        <ul className='list-unstyles'>
                            <li>FAQs</li>
                            <li>How it works</li>
                            <li>Cashback Claims</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    {/*Column3*/}
                    <div className='col'>
                        <h4>COUPONAPP</h4>
                        <ul className='list-unstyles'>
                            <li>Terms</li>
                            <li>Privacy Policy</li>
                            <li> List your business</li>
                            <li>Switch to Desktop Site</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>PARTNERS</h4>
                        <ul className='list-unstyles'>
                            <li>AMAZON</li>
                            <li>FLIPKART</li>
                            <li>EBAY</li>
                            <li>MYNTRA</li>
                            <li>AND MANY OTHER GLOBAL PARTNERS</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className='row'>
                <p className='col-sm  d-flex justify-content-center'>
                    &copy;{new Date().getFullYear()} Deals & Copoun App! All rights reserved.
                </p>
            </div>
        </div>
    )
}
export default Footer;