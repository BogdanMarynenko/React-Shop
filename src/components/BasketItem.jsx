
function BasketItem (props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    addGoods = Function.prototype,
    removeGoods = Function.prototype
   } = props;
    return <li  className="collection-item ">
    {name} <i className="material-icons circle " onClick={()=> removeGoods(id)}>remove_circle</i> x{quantity}{' '}<i className="material-icons circle" onClick={()=> addGoods(id)}>add_circle</i> = {price * quantity} UAH
    <span  class="secondary-content">
      <i class="material-icons delete-icon" onClick={()=> removeFromBasket(id)}>delete_forever</i>
      </span>
    </li>
}

export {BasketItem}