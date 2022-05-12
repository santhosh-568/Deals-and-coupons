import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import axios from "axios";
import Coupons from "./Coupons";


const Allcoupons=()=>{
    
    const getAllCouponsFromServer=()=>{
        axios.get(`${base_url}/coupons/list`).then(
            (response)=>{
                console.log(response.data);
                setCoupons(response.data);
            },
            (error)=>{
                console.log(error.data);
            }
        )
    };
    useEffect(()=>{
        getAllCouponsFromServer();
    },[]);
    
    const[coupon, setCoupons]=useState([]);


    return (

        <div className="text-center">
<h1>COUPONS? COME GRABB'EM!!!!</h1>

{coupon.length>0
? coupon.map((item)=><Coupons key={item.id} coupon={item}/>)
: "No Coupons"}

        </div>
    )



}
export default Allcoupons;