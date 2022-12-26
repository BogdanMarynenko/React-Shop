import { useContext } from "react";
import { ShopContext } from "../context";

function Cart (props) {
    const {order, handleBasket = Function.prototype} = useContext(ShopContext);

    const quantity = order.length;
    return (
        <div className="cart #00897b teal darken-1 white-text"
        onClick={handleBasket}>
          <i className="material-icons">shopping_cart</i>
          {quantity ? (
          <span className="cart-quantity ">{quantity}</span>) : null}
        </div>
    )

}

export { Cart }