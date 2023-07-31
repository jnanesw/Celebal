import React from "react";
import "./file.css"

function Menu() {
    return (
        <div className="background" id="SectionMenu">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p className="menu pt-3">Explore Menu</p>
                </div>
                <div className="col-12 col-md-6 col-lg-3 menu-card">
                    <div className="shadow Non-veg-list p-3 mb-3 mt-4">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png" alt="Non-Veg" className="non-veg-image w-100 mb-2" />
                        <h1 className="starters">Non-Veg-Starters</h1>
                        {/* <a className="view-all" >View-All</a> */}
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="shadow Non-veg-list p-3 mb-3 mt-4">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png" alt="Starters" className="non-veg-image w-100 mb-2" />
                        <h1 className="starters">Veg-Starters</h1>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="shadow Non-veg-list p-3 mb-3 mt-4">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png" alt ="Soups" class="non-veg-image w-100 mb-2" />
                        <h1 class="starters">Soups</h1>
                        {/* <a class="view-all" href="#">View-All
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a> */}
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="shadow Non-veg-list p-3 mb-3 mt-4">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png" alt="seafood" className="non-veg-image w-100 mb-2" />
                        <h1 className="starters">Sea-Food</h1>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="shadow Non-veg-list p-3 mb-3 mt-4">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png" alt="biryani" className="non-veg-image w-100 mb-2" />
                        <h1 className="starters">Hyderabadi-Biryani</h1>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="shadow Non-veg-list p-3 mb-3 mt-4">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png" alt="noodles" className="non-veg-image w-100 mb-2" />
                        <h1 className="starters">Chinese</h1>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="shadow Non-veg-list p-3 mb-3 mt-4">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-gluten-img.png" alt="gluten" className="non-veg-image w-100 mb-2" />
                        <h1 className="starters">Gluten</h1>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="shadow Non-veg-list p-3 mb-3 mt-4">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png" alt="iceCream" className="non-veg-image w-100 mb-2" />
                        <h1 className="starters">Desserts</h1>
                    </div>
                </div>

              </div>
            </div>
        </div>
    )
}
               
   

export default Menu