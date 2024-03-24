import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  //  const b = useContext( DarkModeContext )

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
