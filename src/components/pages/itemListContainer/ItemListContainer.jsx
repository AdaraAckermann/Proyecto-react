import ItemListPresentacional from "./ItemListPresentacional";

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

