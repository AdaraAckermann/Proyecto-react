//traer de a 1 producto por ID

import { useEffect, useState } from "react";
import { getProduct} from "../../../productsMock" ;
import { useParams } from "react-router-dom";
import {ItemDetailPresentacionel} from "./ItemDetailPresentacionel";


/*
TAREA: lo mismo que con el itemListContainer y
guardar en un estado el objeto del producto.

import{ products} from "../../../productsMock";*/


export const ItemDetailContainer = () => {
    const {id} = useParams ();
    //console.log(id)

    const[item, setItem] = useState (null);
    const[isLoading, setIsLoading] = useState (true);


    useEffect (() => { 
        getProduct(+id)
            .then (resp => {
            setItem (resp);
            setIsLoading(false);
        });
    } , [  ] )

    //agregar al carrito
   /*
    const onAdd = (cantidad) => {
   
        let infoProducto = {
          ...item,
          quantity: cantidad
        }
        console.log(infoProducto)
        // Quiero navegar al carrito 
        // navigate("/cart")
      }; */

    return (
        <div>
            {isLoading ? <h2>Cargando producto...</h2> : <ItemDetailPresentacionel item={item} /> }
        </div>
    );
};
