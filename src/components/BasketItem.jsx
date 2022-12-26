import { useContext } from "react";
import { ShopContext } from "../context";

function BasketItem (props) {
  const {
    id,
    name,
    price,
    quantity,
   } = props;

   const { removeGoods, addGoods, removeFromBasket} = useContext(ShopContext);

    return <li  className="collection-item ">
    {name} <i className="material-icons circle " onClick={()=> removeGoods(id)}>remove_circle</i> x{quantity}{' '}<i className="material-icons circle" onClick={()=> addGoods(id)}>add_circle</i> = {price * quantity} UAH
    <span  className="secondary-content">
      <i className="material-icons delete-icon" onClick={()=> removeFromBasket(id)}>delete_forever</i>
      </span>
    </li>
}

export {BasketItem}