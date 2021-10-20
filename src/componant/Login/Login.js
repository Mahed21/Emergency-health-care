import React from 'react';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import UseAuth from '../../Context/UsAuth';




const Login = () => {
    const {googleSignIn,signInEmail} =UseAuth();
    const location=useLocation();
    const history=useHistory();
    console.log(location.state?.from );
    const redirect_uri=location.state?.from || '/home';
    const handleGoogle=()=>
    {
        googleSignIn().then((result)=>
        {
            history.push(redirect_uri);
        })
    }
 
   
    return (
        <div className=" mt-3 pb-5">
        
         <div className="container">
           <h1 className="pt-5">Login Form</h1>
            <form className=" row g-3 w-50">
                    <div className="col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div className="col-12">
                        <button onClick={signInEmail}

                   
                        type="submit" className="btn">Sign in</button>
                    </div>
                    <div className="col-12">
                    <button className="btn" onClick={(e)=>{
                        e.preventDefault();
                        handleGoogle();

                    }}>login With Google</button>
                   </div>
                   <NavLink className="writing"to="/registerd">
                    Not Registeed?
                  </NavLink>
                   

          </form>
            
        </div>
        </div>
    );
};

export default Login;