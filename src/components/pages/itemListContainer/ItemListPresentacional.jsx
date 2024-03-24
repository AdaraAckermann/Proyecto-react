import { ProductCard } from "../../common/ProductCard";
import "./ItemListContainer.css"


const ItemListPresentacional = ({ products }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 mx-auto my-2 align-items-stretch">
 
      {products.map(({ id, img, title, description, price }) => {
        return (
          <div className="col" key={id}>
            <ProductCard
              img={img}
              title={title}
              description={description}
              price={price}
              id={id}
            />
          </div>
        );
      })}
    </div>

    
  );
};

export default ItemListPresentacional;

