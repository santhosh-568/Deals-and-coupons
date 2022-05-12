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
                        <img src="assets/news1.png" className="card-img" alt="Backgroung" height="300px" />
                        <h1 className='display fw-bolder'>Myntra Exchange Offer (March 2022): Save Rs. 300 On Clothing, Makeup & More</h1>
                        <h1>Valid-Till:01-04-2022</h1>
                        <div class="d-grid gap-2 d-md-flex ">
                            <button class="btn btn-warning btn-sm me-md-2 " type="button">Clothing</button>
                            <button class="btn btn-warning btn-sm me-md-2 " type="button">Makeup</button>
                            <button class="btn btn-warning btn-sm me-md-2" type="button">Electronics</button>
                        </div>
                        <p className='col-sm  d-flex'>Elevate your style quotient by bagging the latest picks from Myntra. Shop for trendy apparel, accessories, and more while grabbing astounding savings of up to Rs. 300 using Myntra Exchange Offer.</p>
                        <hr />
                    </div>
                    <div>
                        <img src="assets/news2.png" className="card-img" alt="Backgroung" height="300px" />
                        <h1 className='display fw-bolder'>Flipkart Upcoming Sale 2022 | Next Sale Dates, Top Offers, Saving Tips, And More</h1>
                        <h1>Valid-Till:30-03-2022</h1>
                        <button class="btn btn-warning btn-sm me-md-2" type="button">Sweets</button>
                        <button class="btn btn-warning btn-sm me-md-2" type="button">SkinCare</button>
                        <button class="btn btn-warning btn-sm me-md-2" type="button">Electronics</button>
                        <button class="btn btn-warning btn-sm me-md-2" type="button">Clothing & Footwear</button>
                        <p className="col-sm  d-flex ">Looking to save big on your next Flipkart order? Stay in tune with the Flipkart Upcoming Sales and Offers 2022 to get the biggest savings on electronics, fashion, home goods, and more.</p>
                        <hr />.
                    </div>
                    <div>
                        <img src="assets/new3.png" className="card-img" alt="Backgroung" height="300px" />
                        <h1 className='display fw-bolder'>Udemy Free Coupons 2022 | March Special | Access Free Online Courses | Coding, AWS, Interior Design, And More</h1>
                        <h1>Valid-Till:10-04-2022</h1>
                        <button class="btn btn-warning btn-sm me-md-2" type="button">Services</button>
                        <button class="btn btn-warning btn-sm me-md-2" type="button">Courses</button>
                        <p className=" col-sm  d-flex">Give your career the long-awaited taste of success at no cost at all. Steer your wheel towards the Udemy Free Coupons to get access to a multitude of free courses such as coding, interior design and much more!</p>
                        <hr />
                    </div>
                    <div>
                        <img src="assets/news4.png" className="card-img" alt="Backgroung" height="300px" />
                        <h1 className='display fw-bolder'>The Souled Store Coupons For Mugs (March 2022): Flat 20% Off On Your Next Order</h1>
                        <h1>Valid-Till:29-03-2022</h1>
                        <button class="btn btn-warning btn-sm me-md-2" type="button">Refrigerators</button>
                        <button class="btn btn-warning btn-sm me-md-2" type="button">Laptops</button>
                        <button class="btn btn-warning btn-sm me-md-2" type="button">Mobiles</button>
                        <p className=" col-sm  d-flex">If you have been on a low-key lookout for cool mugs for your home or gifting, The Souled Store Coupons For Mugs will surely nudge you to buy the perfect one at up to 20% off. Exploit The Souled Store Coupons extra saving tips below to save even more.</p>
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