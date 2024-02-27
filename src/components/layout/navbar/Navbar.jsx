import CartWidget from "../../common/CartWidget";
import { Link } from "react-router-dom";
import "./Navbar.css";


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <h3 className="navbar-brand">Tienda App</h3>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">

        <ul className=" navbar-nav mx-auto">

          <Link to="/" className="nav-opciones" >
            <button className="btn mx-4 barra">Home</button>
          </Link>

          <Link to="/category/Sin tacc"  className="nav-opciones">
            <button className="btn mx-4">Sin TACC</button>
          </Link>

          <Link to="/category/Personalizados"  className="nav-opciones" >
            <button className="btn mx-4 ">Personalizados</button>
          </Link>
          <Link  className="nav-opciones" >
            <button className="btn mx-4 " >Contacto</button>
          </Link>

        </ul>
      </div>

      <Link to="/Cart" className="nav-link">
        <CartWidget />
      </Link>
    </div>
  </nav>
  
  );
};


/*
  <nav>

      <h3>Tienda App</h3>
      <ul>
        <li className="btn btn-outline-dark mx-2">Home</li>
        <li className="">Productos</li>
        <li>servicios</li>
        <li>contacto</li>
      </ul>

      <Link to="/Cart" >
        <CartWidget />
      </Link>
        
    </nav>
 */
