import { useState} from "react";
import ItemCountPresentacional from "./ItemCountPresentacional";

const ItemCountContainer = ( {stock} ) => {
  const [ counter, setCounter ] = useState (1);

  const addOne = () =>{
   // if (counter < stock ) {
      setCounter (counter + 1);
    //} else {
      //alert ("Stock maximo");
//}
  };

  const subOne = () =>{
    if (counter > 1 ) {
      setCounter (counter - 1);
    } else {
      alert ("No puede ser menos de 1");
    }
  };

  const reset = () => {
    setCounter(1);
  };


  return <ItemCountPresentacional counter= {counter} addOne={addOne}  subOne={subOne} reset={reset}/>;

};

export default ItemCountContainer;
