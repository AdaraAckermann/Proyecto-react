import ItemListPresentacional from "./ItemListPresentacional";
import { getProducts } from "../../../productsMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]); //1ero,es sincronico
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((resp) => {
      if (category) {
        const productsFilter = resp.filter(
          (product) => product.category === category
        );
        setProducts(productsFilter);
      } else {
        setProducts(resp);
      }

      setIsLoading(false);
    });
  }, [category]);

  return (
    <>
      {isLoading ? (
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ItemListPresentacional products={products} />
      )}
    </>
  );
};

export default ItemListContainer;

/*const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    //creamos o solicitamos

    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      //resolve ("Todo salio bien, te devuelvo lo que me pediste")

      //reject ("Error,algo salio mal");
    });

    //Manejar

    tarea
      .then((res) => {
        setItems(res);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(items);

  return (
    <>
      <ItemListPresentacional items={items} />
    </>
  );
};

export default ItemListContainer;*/

/*const ItemListContainer = () => {
  const [items, setItems ] = useState ( [ ] );

  useEffect (() => {
    getItems()
      .then( resp => {
        setItems (items);
      })

  }, [ ] )
  
  return (
    <>
    <ItemListPresentacional items={items} />
    </>
  );
};

export default ItemListContainer;*/
