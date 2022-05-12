import React from 'react'
import Navbar from './Navbar';

const Aboutus = () => {
  return (
    <>
      <Navbar />
      <div>

        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">ABOUT US</h1>
        </div>

        <div className='card'>
          <div class='cardbody'>
            <h1>OUR AIM</h1>
            Manufacturers and stores benefit from the coupons they offer to consumers. Loyalty cards are a form of coupon that allows stores to keep a record of scanned purchases. Offering coupons is a way to market products and engage consumers. Coupons can entice customers to build loyalty with a specific company or product.
            <p className=' col-sm d-felx display fw-bloder '></p>
            <hr />
            <div class="nice">
              <div class="card-body">
                <h1>OUR COMMISSION</h1>
                Our main mission is to be Earth’s most customer-centric company, where customers can find and discover anything they might want to buy online, and endeavors to offer its customers the lowest possible prices. And to serve consumers through online and physical stores and focus on selection, price, and convenience.
              </div>
            </div>
            <hr/>
            <h1>LEADING PARTNERS ASSOCIATED WITH US.</h1>

            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <div class="nice">
                  <img src="assets/cousera.png" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">COURSERA.com</h5>
                    <p class="card-text">Coursera partners with more than 200 leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide. We offer a range of learning opportunities—from hands-on projects and courses to job-ready certificates and degree programs. </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="nice">
                  <img src="assets/zomota.png" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">ZOMATO.com</h5>
                    <p class="card-text">Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants.</p>
                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </>


  )
}

export default Aboutus;