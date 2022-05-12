import React from "react";
import "./Card.css";
import { Card, CardBody } from "reactstrap";

const Coupons = ({ coupon }) => {
    return (

        <>


            <div style={{ backgroundColor: "azure" }}>
                <div className="text-center">



                    <table>

                        <tr>

                            <td><strong>Coupon Id</strong></td>

                            <td>{coupon.id}</td>

                        </tr>

                        <tr>

                            <td><strong>company</strong></td>

                            <td>{coupon.company}</td>

                        </tr>

                        <tr>

                            <td><strong>Coupon Code</strong></td>

                            <td>{coupon.code}</td>

                        </tr>
                        <tr>

                            <td><strong>offer_details</strong></td>

                            <td>{coupon.offer_details}</td>

                        </tr>
                        <tr>

                            <td><strong>price</strong></td>

                            <td>{coupon.price}</td>

                        </tr>

                    </table>
      
                    <div class=" d-grid gap-2 d-md-flex justify-content-md-center">
                        <a href='http://localhost:8082/paymentDetails'>
                            <button class="btn btn-dark btn-lg me-md-2" onClick={() => { localStorage.setItem("code", coupon.code) }}>BUY NOW!!!</button>
                        </a>

                    </div><hr/>
                



                </div>
            </div>

        </>
    )
}
export default Coupons;

