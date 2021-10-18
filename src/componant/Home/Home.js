
import { useEffect, useState } from 'react';
import img from '../../banner-1.jpg';
import img1 from'../../banner-2.jpg';
import img2 from '../../banner-3.jpg';
import img3 from '../../banner-4.jpg';
import doc from '../../doctor.jpg';
import doc1 from '../../doctor-1.jpg';
import doc2 from '../../doctor-2.jpg';
import doc3 from '../../doctor-3.jpg';
import doc4 from '../../doctor-4.jpg';
import doc5 from '../../doctor-5.jpg';

import Departments from '../Department/Departments';
import './Home.css';

const Home = () => {
    const [products,setProducts]= useState([])
    useEffect(()=>
    {
        fetch('./data.JSON')
        .then(res=>res.json())  
        .then(data=>setProducts(data))
    },[])
 
    return (
    <div>
            {/* showing image by carosel */}
        <div className="row row-cols-lg-3 row-cols-md-2 row-col-1">
        <div className="cols">
            <div id="carouselExampleControls" className="carousel slide carosel" data-bs-ride="carousel">
             <div className="carousel-inner carosel-img ">
            <div className="carousel-item active">
            <img src={img} className="d-block " alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={img1} className="d-block " alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={img2} className="d-block" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={img3} className="d-block" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
         </button>
       </div>
     </div>

     <div className="cols">
            <div id="carouselExampleControls1" className="carousel slide carosel" data-bs-ride="carousel">
             <div className="carousel-inner carosel-img ">
            <div className="carousel-item active">
            <img src={img1} className="d-block " alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={img2} className="d-block " alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={img3} className="d-block" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={img} className="d-block" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
         </button>
       </div>
     </div>
     <div className="cols">
            <div id="carouselExampleControls2" className="carousel slide carosel" data-bs-ride="carousel">
             <div className="carousel-inner carosel-img ">
            <div className="carousel-item active">
            <img src={img2} className="d-block " alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={img3} className="d-block " alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={img} className="d-block" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={img1} className="d-block" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
         </button>
       </div>
     </div>
    </div>
        {/* showing image by carosel end */}

         {/* showng all services */}
        
         <div className=" container mt-5 ">
             <h1 className="line">Our all department related Doctor Services</h1> 
         <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
             {
              products.map(product=><Departments 
              product={product} key={product.key}
              ></Departments>)
             }
        </div>
        </div>
        {/* showng all services end*/}
        {/* few Doctor Information */}
        <div className="container mt-3">
        <div className="row row-cols-lg-2 row-cols-1">
            <div className="col">
            <div id="carouselExampleControls4" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={doc} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={doc1}class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={doc2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={doc3} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={doc4} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={doc5} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            <div className="cols">
                <h3 className="line">Meet Our Doctor</h3>
                <h5 className="line">We have talent, experienced, reputed and dynamic doctors in our team working in a growing practice. All the doctors are whole heartedly waiting to help out the patients with majestic treatments. Our doctors are supported by practice nurses, management and clerical staff all providing high quality care to our patients.</h5>
                <br/>
                <button className="btn">All doctor</button>

            </div>

            {/* our sevices */}
            <div className="container mt-3">
            <div className="row row-cols-lg-2 row-col-1">
                <div className="col">
                <h3>hii</h3>
                </div>
                <div className="col">
                <h1>hi</h1>
                </div>
                
 
            </div>
            </div>
            {/* our services end */}
         
        </div>
        </div>
        {/* few Doctor Information end */}
        
            
    </div>
    );
};

export default Home;