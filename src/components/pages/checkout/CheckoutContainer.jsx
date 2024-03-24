import { useState } from "react";
import { CheckoutPresentacional } from "./CheckoutPresentacional";

export const CheckoutContainer = () => {
    const [userInfo, setUserInfo] = useState( {
        name: "",
        lastName:"",
    });

    const envioDeFormulario = (event) => {
        event.preventDefault();
        //Aca manipulo lo que quiera hacer con los datos del formulario
        console.log("se envio el formulario");
        console.log(userInfo);

    };


    const capturar = (event) => {
        setUserInfo( {...userInfo, [event.target.name] : event.target.value } )
    };


  return <CheckoutPresentacional envioDeFormulario={envioDeFormulario} capturar={capturar} />;
};
