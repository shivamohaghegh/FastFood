import { FaBasketShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const ShoppingCard = () => {
  return (
    <NavLink to="/shoppingcard">
      <FaBasketShopping type="button" className="me-3 text-dark" />
    </NavLink>
  );
};

export default ShoppingCard;
