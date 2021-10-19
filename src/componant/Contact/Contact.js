import React from 'react';


const Contact = () => {
    return (
        <div className="container mt-5">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d268117.0859565451!2d91.75495039658834!3d24.657513203094833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751a5f2d125cfa7%3A0xc0aca3d5a7cf402d!2sFenchuganj%20Upazila!5e0!3m2!1sen!2sbd!4v1634573448373!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"> */}
            <h3 className="line">Online Appointment Form</h3>
            <div className="row">
                <div className="col-lg-8 col-md-12 col-12 ">
                <form className=" row g-3 form-design">
                    <div className="col-md-6">
                        <label for="name" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="inputname"/>
                    </div>
                    <div className="col-md-6">
                    <label for="name" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="inputname"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputtext" className="form-label">Doctor Name</label>
                        <input type="text" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputtext" className="form-label">Type Secret Code</label>
                        <input type="text" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-md-12">
                   
                    <textarea id="w3review" name="w3review" rows="4" cols="30"/>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>

                </form>
                
                </div>
                <div class="col-lg-4 col-md-12 col-12 mt-4">
                  <div>
                   
                      <h4>Hot line: +8788997852</h4>
                   </div>
                   <div>
                      <h4>Email:mahed255261@gmail.com</h4>
                   </div>
                   <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-google ms-3"></i>
                    <i className="fab fa-instagram-square ms-3"></i>
                    <i className="fab fa-twitter-square ms-3"></i>

                </div>

            </div>
        </div>
    );
};

export default Contact;