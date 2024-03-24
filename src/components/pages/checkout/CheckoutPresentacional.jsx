import { Link } from "react-router-dom"; 

export const CheckoutPresentacional = ({envioDeFormulario, capturar, orderId,}) => {
  return (
    <div>
      {orderId ? (
        <div>
          <h1>Gracias por tu compra! Tu numero de comprobante es {orderId} </h1>
          <Link to="/">Seguir comprando</Link>
        </div>
      ) : (
        <form onSubmit={envioDeFormulario}>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            onChange={capturar}
            name="name"
          />

          <input
            type="text"
            placeholder="Ingrese su telefono"
            onChange={capturar}
            name="phone"
          />

          <input
            type="text"
            placeholder="Ingrese su email"
            onChange={capturar}
            name="email"
          />

          <button type="submit" className="btn btn-success">
            Comprar ahora
          </button>
        </form>
      )}
    </div>
  );

};
