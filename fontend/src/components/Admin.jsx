import React from "react";
import axios from 'axios';
import base_url from "../api/bootapi";
import { useEffect } from 'react';
import { useState } from 'react';
import "./Card.css";
import { Link } from 'react-router-dom';
import { Card, CardBody } from "reactstrap";
import Navbar1 from "./Navbar1";


const Admin = () => {



    const [data, setData] = useState([]);

    const getCoupon = () => {


        try {

            axios.get(`${base_url}/coupons/list`)
                .then(response => {
                    console.log(response.data);
                    setData(response.data)
                })
        }
        catch (error) {
            console.log(error)
        };

    }
    const deleteCoupon = (id) => {

        try {
            if (
                axios.delete(`${base_url}/coupons/delete/${id}`)
                    .then(response => {
                        console.log(response);
                        getCoupon();

                    })) { alert("Coupon with id " + id + " is removed") }
        }
        catch (error) {
            console.log("error is", error)
        };

    }
    useEffect(() => {
        getCoupon();



    }, []);
    return (
        <>
            <Navbar1 />

            <div>
               <div className="text-center">

                    <div style={{ backgroundColor: "#C0C0C0" }}>
                        <div>
                            <center> <h1 >Coupons Here</h1></center><hr />
                        </div>


                        <div>


                            {/* <div style={{ backgroundColor: "#62bef6", width: "90%", marginLeft: "5%" }}/> */}

                            {data.map((detail) =>
                                <div className='cards'>
                                    <div className='cards_Info'>
                                        <div key={detail.id}>

                                            <CardBody>
                                               <div className="text-center">
                                                <div className="text-center">
                                                    <h6 className='card_category'>Coupon id:- {detail.id}</h6>
                                                    <h6 className='card_category'>Coupon code:-{detail.code}</h6>
                                                    <h6 className='card_category'>company:- {detail.company}</h6>
                                                    <h6 className='card_category'>offer_details:- {detail.offer_details}</h6>
                                                    <h6 className="card_category">price:{detail.price}</h6>

                                                    <center> <button style={{ backgroundColor: "#d0e6f8", color: "green" }} ><Link to="/AddCoupon">ADD</Link></button></center>


                                                    <center><button onClick={() => deleteCoupon(detail.id)} style={{ color: "red" }}>REMOVE</button></center>
                                                 </div><hr/>
                                                
                                                </div>
                                            </CardBody>






                                        </div>
                                    </div>
                                </div>


                            )}
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}


export default Admin;