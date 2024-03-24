import { useState } from "react";
import ItemCountPresentacional from "./ItemCountPresentacional";
import Swal from "sweetalert2";

const ItemCountContainer = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  const addOne = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Stock maximo",
        text: "No es posible agregar mas unidades",
      });
    }
  };

  const subOne = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      alert("No puede ser menos de 1");
    }
  };

  const reset = () => {
    setCounter(1);
  };

  return (
    <ItemCountPresentacional
      counter={counter}
      addOne={addOne}
      subOne={subOne}
      reset={reset}
      onAdd={onAdd}
    />
  );
};

export default ItemCountContainer;
