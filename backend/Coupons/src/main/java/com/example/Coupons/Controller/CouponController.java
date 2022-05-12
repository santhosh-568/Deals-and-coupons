package com.example.Coupons.Controller;

import com.example.Coupons.Model.Coupon;
import com.example.Coupons.Service.CouponService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/coupons")
public class CouponController {
	
	  private final CouponService couponService;

	    @Autowired
	    public CouponController(CouponService couponService) {
	        this.couponService = couponService;
	    }

    @GetMapping(value = "/list")
    public List<Coupon> getAllCoupons(){
        return couponService.getAllCoupons();
    }
    
    @GetMapping("/findcoupon/{company}")

	public List<Coupon> findBycompany(@PathVariable("company") String company)
	{
	  return couponService.findBycompany(company);
	}
    

    @PostMapping(value = "/add")
    public String addCoupon(@RequestBody Coupon coupon){
    	couponService.addCoupon(coupon);
        return "Coupon Added Successfully";
    }

    @DeleteMapping(value = "/delete/{id}")
    public String deleteProduct(@PathVariable String id) {
    	couponService.deleteCoupon(id);
        return "Coupon Deleted Successfully";
    }

    @PutMapping(value = "/update/{id}")
    public Coupon updateCoupon(@RequestBody Coupon coupon, @PathVariable String id){
        return couponService.updateCoupon(coupon, id);

    }
}
