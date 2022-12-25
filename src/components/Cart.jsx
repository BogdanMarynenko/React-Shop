function Cart (props) {
    const {quantity = 0, handleBasket = Function.prototype} = props;
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