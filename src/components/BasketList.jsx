import { BasketItem } from "./BasketItem";

function BasketList (props) {
    const {
       order = [],
       handleBasket = Function.prototype,
       removeFromBasket = Function.prototype,
       addGoods,
       removeGoods
      } = props;

    const totalPrice = order.reduce((sum, el) => {
      return sum + el.price * el.quantity
    }, 0)

  return  <ul className="collection basket-list">
  <li className="collection-item active">Корзина</li>
  {
    order.length ? order.map(item => (
      <BasketItem key={item.id} removeFromBasket={removeFromBasket} addGoods={addGoods} removeGoods={removeGoods} {...item} />
    )) : <li className="collection-item ">Корзина пуста</li>
    
  }
  
  <li className="collection-item ">Общая стоимость: {totalPrice}UAH</li>
  <button className="second-content btn btn-buy btn-flat #4db6ac teal lighten-2">Оформить</button>
  <i className="material-icons basket-close" onClick={handleBasket}>close</i>
  
</ul>

}

export {BasketList}