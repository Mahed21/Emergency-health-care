
import { useEffect, useState } from 'react';
import AllConsultant from '../AllConsultant/AllConsultant';

const Consultant = () => {
    const [consultants,setConsultant]=useState([]);
    useEffect(()=>
    {
        fetch('./consult.json')
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