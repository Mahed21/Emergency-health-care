
import { Link } from 'react-router-dom';
import './Departments.css';

const Departments = (props) => {
   
    const {img,name,id}= props.product;
    return (
        
    <div>
      
       
         <div className="col">
         
            <div className="card">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Department Name: <span className="line">{name}</span></h5>
                <p className="card-text">Click below buuton to check all doctor related {name} department</p>
               <Link to={`/details/${id}`}>
               <button className="btn">More Detail</button>
               </Link>
            </div>
            </div>
        </div>
        
   </div>
    );
};

export default Departments;