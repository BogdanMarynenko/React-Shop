import { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";
import { ShopContext } from "../context";
import { Preloader } from "./Preloader";
import { GoodList } from "./GoodList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";



function Shop () {
        const  { loading, order, BasketShow, alertName, setGoods} = useContext(ShopContext);

        useEffect(function getGoods() {
             fetch(API_URL, {
              headers: {
                Authorization: API_KEY,
               },
             })
             .then((res) => res.json())
             .then((data) => {
              data.featured && setGoods(data.featured);
             })
             //eslint-disable-next-line
        }, []);


      return <main className="container content">
        <Cart quantity={order.length }/>
        {loading ? <Preloader/> : (<GoodList/>
        )}
        {
          BasketShow && <BasketList/>
        }
        {
          alertName && <Alert/>
        }
      </main>
}


export {Shop}