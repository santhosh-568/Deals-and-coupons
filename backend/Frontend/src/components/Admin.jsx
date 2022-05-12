import React from "react";
import axios from 'axios';
import base_url from "../api/bootapi";
import { useEffect } from 'react';
import { useState } from 'react';
import "./Card.css";
import { Link } from 'react-router-dom';
import { Card,CardBody } from "reactstrap";
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

          <CardBody>
                <Card className="text-center">

            <div style={{ backgroundColor: "#d0e6f3" }}>
                <div>
                    <center> <h1>All coupons are as follows</h1></center><hr />
                </div>


                <div>


                    {/* <div style={{ backgroundColor: "#62bef6", width: "90%", marginLeft: "5%" }}/> */}

                    {data.map((detail) =>
                        <div className='cards'>
                            <div className='cards_Info'>
                                <div key={detail.id}>
                                    
            <CardBody>
                <Card className="text-center">
                                    <h5 className='card_category'>Coupon id:- {detail.id}</h5>
                                    <h5 className='card_category'>Coupon code:-{detail.code}</h5>
                                    <h5 className='card_category'>Provider :- {detail.provider}</h5>
                                    <h5 className='card_category'>Offer:- {detail.description}</h5>
                                    <h5 className="card_category">price:{detail.price}</h5>

                                    <center> <button style={{ backgroundColor: "#d0e6f3", color: "red" }} ><Link to="/AddCoupon">Append</Link></button></center>


                                    <center><button onClick={() => deleteCoupon(detail.id)} style={{ color: "purple" }}>Delete</button></center>

                                        </Card>
            </CardBody>






                                </div>
                            </div>
                        </div>


                    )}
                </div>
            </div>
           
            </Card>
            </CardBody>

        </>
    )
}


export default Admin;