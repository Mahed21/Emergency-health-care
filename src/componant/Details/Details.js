import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import DetailsDepartment from '../DetailsDepartment/DetailsDepartment';


const Details = () => {
    const {departmentId}=useParams();
    const [loadData, setLoadData]=useState([]);
    //const [loadDatas, setLoadDatas]=useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Mahed21/json1/main/data.JSON')
        .then(res=>res.json())
        .then(data=>setLoadData(data));
    },[])
 

    return (
        <div>
            
        </div>
    );
};

export default Details;