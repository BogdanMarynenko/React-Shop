import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodList } from "./GoodList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";



function Shop () {
        const [goods, setGoods] = useState([]);
        const [loading, setLoading] = useState(true);
        const [order, setOrder] = useState([]);
        const [BasketShow, setBasketShow] = useState(false);
        const [alertName, setAlertname] = useState('');
        
        const handleBasket = () => {
          setBasketShow(!BasketShow);
        }

        const countOrder = (item) =>  {
              const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
                 
            if(itemIndex < 0) {
              const newItem = {
                ...item,
                quantity: 1,
              }
               setOrder([...order, newItem])
              } else {
               const newOrder = order.map((orderItem, index) => {
                  if(index === itemIndex) {
                      return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                      }
                  } else {
                   return orderItem;
                  }
               })

               setOrder(newOrder);
              }
              setAlertname(item.name);
        };

        
        useEffect(function getGoods() {
             fetch(API_URL, {
              headers: {
                Authorization: API_KEY,
               },
             })
             .then((res) => res.json())
             .then((data) => {
              data.featured && setGoods(data.featured);
              setLoading(false);
             })
        }, []);

        const removeFromBasket = (itemId) =>{
          const newOrder = order.filter(el => el.id !== itemId)
          setOrder(newOrder);
        }

        
        const  addGoods = (itemId) => {
           const newOrder = order.map(el => {
             if(el.id === itemId) {
              const newQuantity = el.quantity + 1
              return {
                ...el,
                quantity: newQuantity,
              };
             }else {
              return el;
             }
           });
           setOrder(newOrder)
         }
        

        const removeGoods = (itemId) => {
             const minusGood = order.map(el => {
              if(el.id === itemId) {
               const newQuantity = el.quantity - 1
               return {
                 ...el,
                 quantity: newQuantity >= 0 ? newQuantity : 0,
               };
              }else {
               return el;
              }
            });
            setOrder(minusGood)
        }
        
        const closeAlert = () => {
             setAlertname('');
        }

      return <main className="container content">
        <Cart quantity={order.length } handleBasket={handleBasket}/>
        {loading ? <Preloader/> : (<GoodList goods={goods} countOrder={countOrder} />
        )}
        {
          BasketShow && <BasketList order={order} handleBasket={handleBasket} removeFromBasket={removeFromBasket} addGoods={addGoods} removeGoods={removeGoods}/>
        }
        {
          alertName && <Alert name={alertName} closeAlert={closeAlert}/>
        }
      </main>
}


export {Shop}