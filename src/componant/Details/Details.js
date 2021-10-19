import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';



const Details = () => {
    const {departmentId}=useParams();
    const [loadData, setLoadData]=useState([]);
    const  [loadDatas, setLoadDatas]=useState([]);
    useEffect(()=>{
        if(!loadData.length){
        fetch('https://raw.githubusercontent.com/Mahed21/json1/main/data.JSON')
        .then(res=>res.json())
        .then(data=>setLoadData(data));
        }
        if(loadData.length)
        {
            const now=loadData.find((load)=>load.id==departmentId)
            setLoadDatas(now);
        }


    },[loadData])

      return (
        <div className="container mt-5">
              <div className="row">
                  <div className="col-lg-8">
                   <img src={loadDatas?.img} alt=""/>
                </div>
                <div className="col-lg-4">
                <h1 className="line">Name: {loadDatas?.name}</h1>
                <p>Health care Hospital Sylhet Limited, part of Ibn Sina Trust, a renowned health care provider in Bangladesh. With the latest cutting edge technology, top physicians, and an established management system, Ibn Sina Hospital Sylhet Limited brings World Class healthcare to Sylhet at an affordable price With the latest cutting edge technology, top physicians, and an established management system, Ibn Sina Hospital Sylhet Limited brings World Class healthcare to Sylhet at an affordable price</p>
                <h3 className="line">chamber time: 10AM to 10PM</h3> 

                </div>

              </div>
                
                
            
        </div>
    );
};

export default Details;