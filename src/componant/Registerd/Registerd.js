
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Context/UsAuth';

const Registerd = () => {
    const {signInEmail,error}=UseAuth();
    const [email,setEmail]=useState({});
    const [pass,setPass]=useState({});
   
    const handleRegistration=(e)=>
    {
        console.log('reg is added')
        e.preventDefault();
    }
    const handleEmail=(e)=>
    {
        setEmail(e.target.value)
    }
    const HandlePassword=(e)=>
    {
        setPass(e.target.value)
    }
  
    return (
        <div>
            <h1 className="text-center mt-5">Registration Form</h1>
            <form className="row g-3 w-50 mx-auto form-design" onSubmit={handleRegistration}>
                 <div className="col-md-6">
                    <label for="inputEmail4" className="form-label"> First Name</label>
                    <input type="name" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label"> Last Name</label>
                    <input type="name" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-12">
                    <label for="inputEmail4" className="form-label"> Full Name</label>
                    <input type="name" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail4" required/>
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input onBlur={HandlePassword} type="password" className="form-control" id="inputPassword4"/>
                </div>
                <div>{error}</div>
                
                  <div className="col-12">
                    <button onClick={(e)=>{
                        e.preventDefault();
                        signInEmail(email,pass);

                    }} type="submit" className="btn btn-primary">Registerd</button>
                    <NavLink to="login" className="ms-3 writing">Already Registerd?</NavLink>
                </div>
            </form>
        </div>
    );
};

export default Registerd;