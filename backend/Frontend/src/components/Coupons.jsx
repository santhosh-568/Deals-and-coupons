import React from "react";
import "./Card.css";
import { Card, CardBody } from "reactstrap";

const Coupons = ({ coupon }) => {
    return (

        <>


            <CardBody>
                <Card className="text-center">



                    <table>

                        <tr>

                            <td><strong>Coupon Id</strong></td>

                            <td>{coupon.id}</td>

                        </tr>

                        <tr>

                            <td><strong>Provider Name</strong></td>

                            <td>{coupon.provider}</td>

                        </tr>

                        <tr>

                            <td><strong>Coupon Redeem Code</strong></td>

                            <td>{coupon.code}</td>

                        </tr>
                        <tr>

                            <td><strong>Description/Offer</strong></td>

                            <td>{coupon.description}</td>

                        </tr>
                        <tr>

                            <td><strong>price</strong></td>

                            <td>{coupon.price}</td>

                        </tr>

                    </table>
      
                    <div class=" d-grid gap-2 d-md-flex justify-content-md-center">
                        <a href='http://localhost:8081/paymentDetails'>
                            <button class="btn btn-dark btn-lg me-md-2" onClick={() => { localStorage.setItem("code", coupon.code) }}>BUY THIS COUPON!!!</button>
                        </a>

                    </div>




                </Card>
            </CardBody>

        </>
    )
}
export default Coupons;

