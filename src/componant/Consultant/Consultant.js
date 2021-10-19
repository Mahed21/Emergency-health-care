import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import AllConsultant from '../AllConsultant/AllConsultant';

const Consultant = () => {
    const [consultants,setConsultant]=useState([]);
    useEffect(()=>
    {
        fetch('./consult.JSON')
        .then(res=>res.json())  
        .then(data=>setConsultant(data))
    },[])

    return (
        <div className="container">
            <h1>All Consultant</h1>
          
         <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1">
           {
               consultants.map(consult=><AllConsultant consult={consult}>

               </AllConsultant>)
           } 
        </div>
            
        </div>
    );
};

export default Consultant;