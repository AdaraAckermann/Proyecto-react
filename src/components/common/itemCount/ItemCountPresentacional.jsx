const ItemCountPresentacional = ( { counter, addOne, subOne, onAdd, reset} ) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
    <button className="btn btn-primary me-2" onClick={addOne}>+</button>
    <h3 className="me-2">{counter}</h3>
    <button className="btn btn-primary me-2" onClick={subOne} disabled={counter === 1}>-</button>
    <button className="btn btn-primary me-2">Agregar al carrito</button>
    <button className="btn btn-primary" onClick={reset}>Reset</button>
  </div>
  
  );
};

export default ItemCountPresentacional;
