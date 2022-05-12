import React from 'react'
import Navbar from './Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div>

        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">ABOUT US</h1>
        </div>

        <div className='card'>
          <div class='card-body'>
            <h1>OUR VISION</h1>
            If you're like the average shopper, you're still going through the same time-consuming routine just to find the products you want at great prices.Constantly checking your favorite online stores for deals. Leaving items in dozens of open tabs and bookmarks. Cross-referencing wishlists on multiple sites. Only to miss out again and again when the specific items you want finally go on sale.
            <p className=' col-sm d-felx display fw-bloder '></p>
            <hr />
            <div class="card">
              <div class="card-body">
                <h1>OUR MISSION</h1>
                Delivering our best to enrich the consumer experience and help our users get discounts every time they experience a shopping splurge for all their purchases and transactions. Basically, letting themselves indulge in this saving spree with Our App to literally switch the Loot on!
              </div>
            </div>
            <h1>LEADING PARTNERS ASSOCIATED WITH US.</h1>

            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div class="col">
                <div class="card">
                  <img src="assets/amazon1.png" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">AMAZON.com</h5>
                    <p class="card-text">One of the leading platform globally which poses the purpose of delivering the products wrapped in happiness of its each consumer,Irrespective of locality and avlaiblity.Amazon promises an safer delivery of Produts & Services with well-known brands.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="assets/flip2.png" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">FLIPKART.com</h5>
                    <p class="card-text">The well known indian service platfoem recognized foer its value and variety in its own field, competiting for its all other field experts, Flipkart has enriched its roots in vast spread environment for delivering the products within shorter period of Time.</p>
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

export default About;