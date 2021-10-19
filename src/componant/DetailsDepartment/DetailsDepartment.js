import React from 'react';

const DetailsDepartment = (props) => {
    console.log(props.loaddatas);
    
    return (
        <div>
            <h1>hello</h1>
             <h1>{props.loaddatas.name}</h1>
        </div>
    );
};

export default DetailsDepartment;