import React from 'react'
import "./file.css"
import {Link} from 'react-router-dom';
// import "./NavBar.css";


function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light color-piker ">
    <div className="container-fluid d-flex flex-row justify-content-between">
        
            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png" alt='main' className="logo-image order-md-1" />
       
        
        <button className="navbar-toggler bg-color-nav" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse order-md-2 pt-3" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
             <Link  to= "/" className='Color'>
             <button className=" extra-edit" >
                    <p className='color'>Home</p>
                    </button>
             </Link>
            
                <Link to="/offers">
                    <button className=" extra-edit" >
                        <p className='color'>Payments & Foodie Points</p>
                    </button>
                </Link>
                <Link to="/menu">
                    <button className=" extra-edit" >
                            <p className='color'>Menu</p>
                    </button>
                </Link>
                <Link to='/chooseus'>
                    <button className=" extra-edit" >
                        
                        <p className='color'>WhyChoosenUs</p>
                    </button>
                </Link>
               </div>
        
        </div>
    </div>
</nav>
</div>
  )
}

export default Navbar

// import React from "react";
// import { Link } from "react-router-dom";
// import "./NavBar.css";

// function NavBar() {

//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-container">
//           <Link exact to="/" className="nav-logo">
//             CodeBucks
//             <i className="fas fa-code"></i>
//           </Link>

//           <ul >
//             <li className="nav-item">
//               <Link
               
//                 to="/"
                
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
               
//                 to="/Menu"
                
//               >
//                 Menu
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
                
//                 to="/offers"
                
//               >
//                 Offers
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
                
//                 to="/choosenus"
               
//               >
//                 Why Choosen Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavBar;
