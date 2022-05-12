import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='main-footer ' >
            <div className='container'>
                <div className='row '>
                    {/*Coloum1 */}
                    <div className='col'>
                        <h4>LOCATE US AT</h4>
                        <ul className='list-unstyles'>
                            <li>1800-177-888</li>
                            <li>Banglore,India</li>
                            <li>WHITEFIELD,BANGLORE</li>
                        </ul>
                    </div>
                    {/*Column2*/}
                    <div className='col'>
                        <h4>HELP</h4>
                        <ul className='list-unstyles'>
                            <li>FAQs</li>
                            <li>How it works</li>
                            <li>Cashback Claims</li>
                        </ul>
                    </div>
                    {/*Column3*/}
                    <div className='col'>
                        <h4>COUPONS APP</h4>
                        <ul className='list-unstyles'>
                            <li>Terms</li>
                            <li>Privacy Policy</li>
                            <li> List your business</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>ASSOCIATES</h4>
                        <ul className='list-unstyles'>
                            <li>AJIO</li>
                            <li>MAKEMYTRIP</li>
                            <li>COURSERA</li>
                            <li>ZOMATO</li>
                            <li>OLA</li>
                            <li>AND MANY OTHER GLOBAL PARTNERS</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className='row'>
                <p className='col-sm  d-flex justify-content-center'>
                    &copy;{new Date().getFullYear()} Copoun App! All rights reserved.
                </p>
            </div>
        </div>
    )
}
export default Footer;