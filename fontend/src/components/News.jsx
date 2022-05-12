import React from 'react'
import { Nav } from 'reactstrap';
import Navbar from './Navbar';

const News = () => {
    return (
        <div>
            <Navbar />
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">NEWS AND DEALS!!!!</h1>
                        <hr />
                        <img src="assets/Ajio1.png" className="card-img" alt="Backgroung" height="300px" />
                        <h1 className='display fw-bolder'>AJIO Mania Sale 50-90% Off* - Offers Ending In 8 daysOn Clothing, Makeup & More</h1>
                        <h1>Valid-Till:29-04-2022</h1>
                        <div class="d-grid gap-2 d-md-flex ">
                            <button class="btn btn-warning btn-sm me-md-2 " type="button">Clothing</button>
                            <button class="btn btn-warning btn-sm me-md-2 " type="button">Makeup</button>
                            <button class="btn btn-warning btn-sm me-md-2" type="button">Electronics</button>
                        </div>
                        <p className='col-sm  d-flex'>Elevate your style quotient by bagging the latest picks from Myntra. Shop for trendy apparel, accessories, and more while grabbing astounding savings of up to Rs. 300 using Myntra Exchange Offer.</p>
                        <hr />
                    </div>
                    <div>
                        <img src="assets/coursera1.png" className="card-img" alt="Backgroung" height="300px" />
                        <h1 className='display fw-bolder'>Coursera Discount: Extra 50% off any course Saving Tips, And More</h1>
                        <h1>Valid-Till:25-04-2022</h1>
                        <button class="btn btn-warning btn-sm me-md-2" type="button">Python</button>
                        <button class="btn btn-warning btn-sm me-md-2" type="button">MachineLearing</button>
                        <button class="btn btn-warning btn-sm me-md-2" type="button">Cloud Technology</button>
                        <button class="btn btn-warning btn-sm me-md-2" type="button">Full Stack Courses</button>
                        <p className="col-sm  d-flex ">Looking to save big on your next Coursera subscription Stay in tune with the Coursera Upcoming Offers 2022 to get the biggest savings on Courses.</p>
                        <hr />.
                    </div>
                    <div>
                        <img src="assets/new3.png" className="card-img" alt="Backgroung" height="300px" />
                        <h1 className='display fw-bolder'>Udemy Free Coupons 2022 | March Special | Access Free Online Courses | Coding, AWS, Interior Design, And More</h1>
                        <h1>Valid-Till:19-05-2022</h1>
                        <button class="btn btn-warning btn-sm me-md-2" type="button">Services</button>
                        <button class="btn btn-warning btn-sm me-md-2" type="button">Courses</button>
                        <p className=" col-sm  d-flex">Give your career the long-awaited taste of success at no cost at all. Steer your wheel towards the Udemy Free Coupons to get access to a multitude of free courses such as coding, interior design and much more!</p>
                        <hr />
                    </div>
                    <div>
                        <img src="assets/ola1.png" className="card-img" alt="Backgroung" height="300px" />
                        <h1 className='display fw-bolder'>Ola Coupons & Offers | 50% Off Promo Codes – April 2022: Flat 20% Off On Your Next Ride</h1>
                        <h1>Valid-Till:29-05-2022</h1>
                        <button class="btn btn-warning btn-sm me-md-2" type="button">Cars</button>
                        <button class="btn btn-warning btn-sm me-md-2" type="button">Bikes</button>
                        <button class="btn btn-warning btn-sm me-md-2" type="button">Auto</button>
                        <p className=" col-sm  d-flex">Ola Cabs offers to book cabs nearby your location for best fares. For best taxi service at lowest fares, say Ola!</p>
                        <hr />
                    </div>
                    {/* <div>
            <img src="assets/news5.png" className="card-img" alt="Backgroung" height="300px" />
                <h1 className='display fw-bolder'>Myntra Holi Sale 2022: Get Up To 70% + Extra 10% Off On Fashion, Beauty, Accessories, Home Decor & More</h1>
                <h1>Valid-Till:30-03-2022</h1>
                <button class="btn btn-warning btn-sm me-md-2" type="button">Fashions</button>
                          <button class="btn btn-warning btn-sm me-md-2" type="button">Beauty Products</button>
                          <button class="btn btn-warning btn-sm me-md-2" type="button">Accessories</button>
                <p className= " col-sm  d-flex">Indulge in the festival of colors with Myntra's Holi Sale and make this season extra special with products from your favorite brands at up to 70% off. Check out trending bargains now!</p>
                <hr />
            </div> */}
                    {/* <div>
            <img src="assets/news6.png" className="card-img" alt="Backgroung" height="300px" />
                <h1 className='display fw-bolder'>Holi Offers On Mobiles 2022: Up To 85% Off On Amazon, Flipkart, Tata Cliq, And More</h1>
                <h1>Valid-Till:30-03-2022</h1>
                <button class="btn btn-warning btn-sm me-md-2" type="button">Tata Cliq</button>
                          <button class="btn btn-warning btn-sm me-md-2" type="button">Amazon</button>
                          <button class="btn btn-warning btn-sm me-md-2" type="button">Flipkart</button>
                <p className= " col-sm  d-flex">The time to upgrade to the next best smartphone is here! Shop the latest Holi offers on Mobiles to save up to 80% on smartphones and accessories from Amazon, Flipkart, and more.</p>
                <hr />
            </div> */}
                </div>
            </div>
        </div>
    )
}

export default News