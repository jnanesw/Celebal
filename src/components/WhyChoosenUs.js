import React from "react";
import "./file.css"

function Why() {
    return(
        <div>

        <div className="bg-container">
        <div className="container">
            <div className="mt-4">
                <p className="choosen-us">Why Choosen Us?</p>
                <p className="choosen-content">We use both original recipes and classic version of famous food items.</p>
            </div>
            <div className="bg-container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="wcu-card-container mb-3 p-4">
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-serve.png" alt = "service" className="food-serve-image mb-2" />
                            <h1 className="food-header mb-2">Food Service</h1>
                            <p className="choosen-content mb-2 pb-4">
                                Experience fine dining at your comfort of your home.All orders are carefully packed and arranged to your home in just 10 minitues.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="wcu-card-container mb-3 p-4">
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/fruits-img.png" alt = "Food" className="food-serve-image mb-2" />
                            <h1 className="food-header mb-2">Fresh Food</h1>
                            <p className="choosen-content mb-2">
                                The Fresh Food group provides fresh-cut fruits and vegetables
                                directly picked from our partner farms and farm houses so that
                                you always get them tree to plate.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="wcu-card-container mb-3 p-4">
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/offers-img.png" alt = "offers" className="food-serve-image mb-2" />
                            <h1 className="food-header mb-2">Best Offers</h1>
                            <p className="choosen-content mb-2">
                                Food Coupons & Offers upto <span className="Span">50% OFF</span> and Exclusive Promo Codes on All Online Food Orders and Register for more amazing rewards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="fruits-container pt-4 pb-4">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5">
                    <div className="text-center">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/healthy-food-plate-img.png" alt="FruitsImage" className="fruits-image" />
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <h1 className="fresh-heading"> Fresh, Healthy, Organic, Delicious Fruits</h1>
                    <p className="health-heading">Say no to harmful chemicals and go fully organic with our range of fresh fruits and veggies. Pamper your
                        body and your senses with the true and unadulterated gifts from mother nature. with the true
                        and unadulterated gifts from mother nature.</p>
                    <button className="health-button">Watch Video</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Why;