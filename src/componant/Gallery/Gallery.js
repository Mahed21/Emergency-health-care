import React from 'react';

const Gallery = (props) => {
    return (
        <div>
            <div className="col">
             <img src={props.imgs.img} className="img-fluid" alt="" />
            </div>
        </div>
    );
};

export default Gallery;