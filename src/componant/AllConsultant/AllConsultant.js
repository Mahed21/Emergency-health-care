import React from 'react';

const AllConsultant = (props) => {
    const {img,name,time,contact}=props.consult;

    return (
        <div>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={img} class="img-fluid rounded-start h-100" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Name: {name}</h5>
                        <p class="card-text">Time: {time} </p>
                        <p class="card-text">Contact: {contact} </p>
                        
                    </div>
                    </div>
                </div>
                </div>
        </div>
        
    );
};

export default AllConsultant;