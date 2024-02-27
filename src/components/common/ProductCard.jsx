import { Link } from "react-router-dom";

 
 export const ProductCard = ({ id, img, title, description, price }) => {
  //ya desestructurado
  
  return (
    <div className=" card h-100 d-flex flex-column" >
      <img src={img} className="card-img-top" alt="" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <h6 className="card-subtitle mb-2 text-muted">${price}</h6>
        <Link to={`/item/${id}`}>
          <button className="btn btn-primary">Ver detalles</button>
        </Link>

      </div>

    </div>
  );
};


