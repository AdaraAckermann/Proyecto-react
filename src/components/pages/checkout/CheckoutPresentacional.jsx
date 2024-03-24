 
export const CheckoutPresentacional = ( { envioDeFormulario, capturar} ) => {
  return (
    <div>
        <form onSubmit={envioDeFormulario}>
            <input
             type="text"
             placeholder="Ingrese su nombre" 
             onChange={capturar}
             name="name"
            />

            <input 
            type="text"
             placeholder="Ingrese su apellido"
             onChange={capturar}
             name="lastName"
            />

            <button type="submit" className="btn btn-success">Enviar</button>

        </form>
    </div>
  )
};
