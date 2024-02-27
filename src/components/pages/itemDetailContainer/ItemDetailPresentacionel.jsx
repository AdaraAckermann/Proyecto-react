import ItemCountContainer from "../../common/itemCount/ItemCountContainer";
import "./ItemDetail.css";

export const ItemDetailPresentacionel = ({ item, onAdd }) => {
  console.log(item);
  return (
    <div>
      <div className={"containerItemDetail"}>
        
        <div className={"containerImage"}>
          <img src={item.img} alt="" />
        </div>

        <div className={"containerDetail"}>

          <h2>Nombre: {item.title}</h2>
          <h2>Descripcion: {item.description}</h2>
          <h2>Precio: ${item.price}.-</h2>
      
        </div>
      </div>
      <div>
        <ItemCountContainer stock={item.stock} onAdd={onAdd} />;
      </div>
    </div>
  );
};
