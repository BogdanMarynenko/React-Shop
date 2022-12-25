import { GoodsItem } from "./GoodsItem";

function GoodList (props) {
   const { goods = [], countOrder = Function.prototype } = props;

   if(!goods.length) {
      return <h3>Not found!</h3>
   }

   return <div  className="goods">
      {goods.map(item => (
         <GoodsItem key={item.id} {...item} countOrder={countOrder}/>
      ))}
   </div>
}

export {GoodList}