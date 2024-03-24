import ItemListPresentacional from "./ItemListPresentacional";
//import { getProducts } from "../../../productsMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]); //1ero,es sincronico
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = productsCollection ;

    if (category) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", category)
      );

      consulta = productsCollectionFiltered;
    } 

    getDocs(consulta)
      .then((res) => {
        let arrayDesencriptado = res.docs.map((elemento) => {
          //[]

          return { ...elemento.data(), id: elemento.id };
        });

        setProducts(arrayDesencriptado);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  return (
    <>
      {isLoading ? (
        <div className="spinner-border text-primary " role="status">
          <span className="visually-hidden">Loading...</span>
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
