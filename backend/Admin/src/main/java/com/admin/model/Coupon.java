package com.admin.model;




public class Coupon {

 
    private String id;
    private String company;
    private String code;
    private String offer_details;
    private String expiryDate;
    private String price;
    

    public Coupon() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getOffer_details() {
        return offer_details;
    }

    public void setOffer_details(String offer_details) {
        this.offer_details = offer_details;
    }

    public String getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Coupon(String id, String company, String code, String offer_details, String expiryDate, String price) {
        this.id = id;
        this.company = company;
        this.code = code;
        this.offer_details = offer_details;
        this.expiryDate = expiryDate;
        this.price = price;
    }

    @Override
    public String toString() {
        return "Coupon{" +
                "id='" + id + '\'' +
                ", company='" + company + '\'' +
                ", code='" + code + '\'' +
                ", offer_details='" + offer_details + '\'' +
                ", expiryDate='" + expiryDate + '\'' +
                ", price='" + price + '\'' +
                '}';
    }
}
