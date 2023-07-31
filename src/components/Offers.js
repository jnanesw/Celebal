import React from "react";
import "./file.css"

function Offer(){
    return (
        <div>

        <div className="fruits pt-5 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 order-1 order-md-2">
                    <div className="text-center">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png" alt="Delivery" className="fruits-image mt-3" />
                    </div>
                </div>
                <div className="col-12 col-md-7 order-2 order-md-1 pb-3">
                    <h1 className="fresh-heading">Delivery's & Payments</h1>
                    <p className="health-heading">Enjoy hassle-free payment with the plenitude of payment options available for you.
                        Get live tracking and locate your food on a live map. It's quite a sight to see your
                        food arrive to your door.Plus, you get a 5% discount on every order every time you
                        pay online.</p>
                    <button className="health-button">Pay Now</button>
                    <div className="mt-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/visa-card-img.png" alt="Visa" className="visa-card" />
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/master-card-img.png" alt="Master" className="visa-card ml-4" />
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/paypal-card-img.png" alt="Paypal" className="visa-card ml-4" />
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/american-express-img.png" alt="american" className="visa-card ml-4" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="thank-container pb-3 pt-3">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
                    <h1 className="Thank-Heading">Thanku for being a valuble customer to us.</h1>
                    <p className="Thank-paragraph mb-3">We have a surprise gift for you</p>
                    <button className="gift-redeem d-none d-md-inline">Redeem</button>
                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png" alt="Customer" className="Gift-image d-md-none" />
                    <div className="d-md-none">
                        <button className="gift-redeem ">Redeem</button>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png" alt="Thanku" className="Gift-image mb-3 d-none d-md-block" />
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Offer;