import { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Details = () => {
    const {departmentId}=useParams();
    const [loadData, setLoadData]=useState([]);
    useEffect(()=>
    {
        fetch('./data.JSON')
        .then(res=>res.json())  
        .then(data=>console.log(data))
    },[])

    return (
        <div>
            <h1>these is booking: {departmentId}</h1>
            <h1>{loadData.length}</h1>
        </div>
    );
};

export default Details;