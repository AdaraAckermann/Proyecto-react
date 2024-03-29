
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetailPresentacionel } from "./ItemDetailPresentacionel";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig"; 
import { collection, doc, getDoc } from "firebase/firestore";


export const ItemDetailContainer = () => {
  const { id } = useParams();
  

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const initial = getTotalQuantityById (id)


  useEffect(() => {
    setIsLoading(true)

    let productsCollection = collection( db, "products");

    let refDoc = doc(productsCollection, id)
    getDoc( refDoc ).then( res=> {
      setItem ( {...res.data(), id: res.id })
    }).finally( ()=> setIsLoading(false))

  }, [id]);

  //agregar al carrito

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };

    addToCart(infoProducto); //ejecuto la funcion

    // Quiero navegar al carrito:que se dispare automaticamente el dirigirme al carrito,cuando agrego algun producto.
    // navigate("/cart")
  };

  return (
    <div>
      {isLoading ? (
                <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
      ) : (
        <ItemDetailPresentacionel item={item} onAdd={onAdd} initial= {initial} />
      )}
    </div>
  );
};
