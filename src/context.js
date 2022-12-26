import { createContext , useReducer} from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const intialState = {
    goods: [],
    loading:true,
    order: [],
    BasketShow: false,
    alertName: ''
  }

export const ContextProvider = ({children}) => {
  const [value, dispatch] = useReducer(reducer, intialState)
   
  value.closeAlert = () => {
      dispatch({type: 'CLOSE_ALERT'})
   }

   value.removeFromBasket = (itemId) => {
      dispatch({type: 'REMOVE_FROM_BASKET', payload:{id:itemId}})
   }

   value.addGoods = (itemId) => {
    dispatch({type:'ADD_GOODS', payload:{id: itemId}})
   }

   value.removeGoods = (itemId) => {
    dispatch({type:'REMOVE_GOODS', payload:{id: itemId}})
   }


   value.countOrder = (item) => {
    dispatch({type: 'COUNT_ORDER', payload:item})
   }

   value.handleBasket = () => {
    dispatch({type: 'HANDLE_BASKET'})
   }

   value.setGoods = (data) =>{
    dispatch({type: 'SET_GOODS', payload: data})
   }
   
  return <ShopContext.Provider value={value}>
    {children}
  </ShopContext.Provider>
}