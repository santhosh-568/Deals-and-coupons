import React from 'react'
import { useState } from 'react'
import axios from "axios"
import "./Card.css";
import base_url from '../api/bootapi'
import { Card, CardBody, CardTitle, CardSubTitle, CardText, CardFooter, Cardheader, Button, Container, CardSubtitle } from "reactstrap";
import { Link } from 'react-router-dom';
const AddCoupon = () => {
    const [input, setInput] = useState({
        "id": "",
        "code": "",
        "company": "",
        "offer_details": "",
        "price": "",
        


    });


    const inputEvent = (event) => {

        const { name, value } = event.target;
        setInput((previousvalue) => {
            console.log(previousvalue.data);
            return {
                ...previousvalue,
                [name]: value,
            }



        });
    };
    const showdata = (event) => {
        event.preventDefault();

        try {
            if (
                axios.post(`${base_url}/coupons/add`, {
                    id: input.id,
                    code: input.code,
                    company: input.company,
                    offer_details: input.offer_details,
                    price: input.price,
                  
                })
                    .then(response => {
                        console.log(response.data);


                    })) { alert("uploaded") }
        }
        catch (error) {
            console.log("error is", error)
        };

    }
    // ..............................................................
    const updateCoupon = (event,id) => {
        event.preventDefault();

        try {
            if (
                axios.put(`${base_url}/coupons/update${id}`, {
                    id: input.id,
                    code: input.code,
                    company: input.company,
                    offer_details: input.offer_details,
                    price: input.price,
                   
                })
                    .then(response => {
                        console.log(response);


                    })) { alert("Data updated") }
        }
        catch (error) {
            console.log("error is", error)
        };

    }



    return (
        <>
            
            <CardBody>
                <Card className="text-center">
           
            
            <div class="text-center mt-4 name"> <h1>Add and Update Coupon Details</h1></div>

            {/* Basic form here */}


            <div class="wrapper" >
                <div class="text-center mt-4 name"> Add/Update </div>

                <div class="card">
                    <div class="card-deck col-sm-3">
 
                <form class="p-3 mt-3">
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="id" id="id" placeholder='id' onChange={inputEvent} value={input.id} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="code" id="code" placeholder=' CouponCode' onChange={inputEvent} value={input.code} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="company" id="company" placeholder='company' onChange={inputEvent} value={input.company} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="offer_details" id="offer_details" placeholder='offer_details' onChange={inputEvent} value={input.offer_details} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="price" id="price" placeholder='price' onChange={inputEvent} value={input.price} required /> </div>
                   
                    <button class="btn mt-1" type="submit" onClick={showdata}><Link to="/admin">ADD</Link></button>
                    <button class="btn mt-1" type='submit' onClick={updateCoupon} >Update</button>
                </form>
            </div>
            </div>
            </div>
            
            </Card>
            </CardBody>
            




        </>
    )
}

export default AddCoupon;
