import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  
  let total = getTotalItems()

  return (
    <Link to="/cart">
      <h6>
        {total}
        <FaShoppingCart color="blue" />
      </h6>
    </Link>
  );
};

export default CartWidget;
