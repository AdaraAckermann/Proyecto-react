import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import "./Cart.css"



export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const vaciarCarritoConAlerta = () => {
    Swal.fire({
      icon: "warning",
      title: "Seguro desea vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: "No eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Eliminado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Tu carrito quedo como estaba", "", "info");
      }
    });
  };

  return (
    <div>
      <div className="cart-container">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>¡Tu carrito está vacío!</h2>
            <p>Agrega productos para continuar comprando.</p>
            <Link to="/" className="btn btn-primary">
              Agregar productos al carrito
            </Link>
          </div>
        ) : (
          <>
            <div className="container-items">
              {cart.map((product) => {
                return (
                  <div key={product.id} className="cart-item">
                    <img src={product.img} alt="" />
                    <div className="cart-item-info">
                      <h2>Nombre: {product.title} </h2>
                      <h2>Cantidad: {product.quantity} </h2>
                      <h2>Precio unitario: ${product.price} </h2>
                    </div>
  
                    <button
                      onClick={() => removeById(product.id)}
                      className="btn btn-secondary"
                    >
                      Eliminar <RiDeleteBinLine />
                    </button>
                  </div>
                );
              })}
            </div>
  
            <div className="cart-info">
              <h2>Descripcion del carrito</h2>
              <h3>Cantidad de productos: {cart.length}</h3>
              <h3>Descuentos: </h3>
              <h3>Precio final: </h3>
  
              <div className="btn-cart">
                <button
                  onClick={vaciarCarritoConAlerta}
                  className="btn btn-danger"
                >
                  Vaciar carrito
                </button>
  
                <Link to="/checkout">
                  <button type="button" className="btn btn-primary">
                    Finalizar compra
                  </button>
                </Link>
              </div>
  
              <h2>El total a pagar es: ${total} </h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
  
};

/*

export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const vaciarCarritoConAlerta = () => {
    Swal.fire({
      icon: "warning",
      title: "Seguro desea vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: "No eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Eliminado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Tu carrito quedo como estaba", "", "info");
      }
    });
  };

  return (

    <div>
      <div className="cart-container">
        <div className="container-items">
          {cart.map((product) => {
            return (
              <div key={product.id} className="cart-item">
                <img  src={product.img} alt="" />
                <div className="cart-item-info">
                <h2>Nombre: {product.title} </h2>
                <h2>Cantidad: {product.quantity} </h2>
                <h2>Precio unitario:  ${product.price} </h2>
                </div>
                
                <button onClick={() => removeById(product.id)} className="btn btn-secondary">
                  Eliminar <RiDeleteBinLine />
                </button>
              </div>
            );
          })}
        </div>

        <div className="cart-info">
          <h2>Descripcion del carrito</h2>
          <h3>Cantidad de productos: </h3>
          <h3>Descuentos: </h3>
          <h3>Precio final: </h3>

          {cart.length > 0 ? (
            <div className="btn-cart">
              <button onClick={vaciarCarritoConAlerta} className="btn btn-danger">
                Vaciar carrito
              </button>

              <Link to="/checkout">
                <button type="button" className="btn btn-primary">
                  Finalizar compra
                </button>
              </Link>
            </div>
          ) : (
            <link to="/">
              <button type="button" className="btn btn-primary">
                Agregar productos al carrito
              </button>
            </link>
          )}

          <h2>El total a pagar es: ${total} </h2>
        </div>
      </div>
    </div>
  );
};
 */