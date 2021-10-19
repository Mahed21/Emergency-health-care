import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
<div className=" footer mt-5">
    <div className="container">
    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 pt-5 pb-5">
        <div className="cols">
            <h4>Contact Us</h4>
            <br/>
            <h5>House no-16 Road No-3,Fenchugonj,Sylhet,Bangladesh</h5>
            <h5>phone Number:017556489745</h5>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-google ms-3"></i>
            <i className="fab fa-instagram-square ms-3"></i>
            <i className="fab fa-twitter-square ms-3"></i>
        </div>
        <div className="cols">
            <h4>Our Branches</h4>
            <br/>
            <h5>Dhanmondi, Dhaka</h5>
            <h5>uposohor,Sylhet</h5>
            <h5>Mejortilla,Sylhet</h5>
            
        </div>
        <div className="cols">
            <h4>Services</h4>
            <br/>
            <h5>Doctor Chamber</h5>
            <h5>Free Ambulance</h5>
            <h5>Phramecy</h5>
        </div>

       </div>
       <footer className="pb-1">
           Emergency Healthcare started 2019
       </footer>
    </div>
</div>
    );
};

export default Footer;