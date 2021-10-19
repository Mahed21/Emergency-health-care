
import { Link } from 'react-router-dom';
import './Departments.css';

const Departments = (props) => {
   
    const {img,name,id}= props.product;
    return (
        
    <div>
      
       
         <div className="col">
         
            <div className="card h-100">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"><span className="line">{name}</span></h5>
                <br/>
               <Link to={`/details/${id}`}>
               <button className="btn">CLick For More Detail</button>
               </Link>
            </div>
            </div>
        </div>
        
   </div>
    );
};

export default Departments;