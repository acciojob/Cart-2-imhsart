function cartReducer(state, action){

  switch(action.type){
    case 'INCREASE':
      let arr = []
      for(let i of state.cart){
        if(i.id === action.payload){
          arr.push({...i,quantity: i.quantity+1})
        }else{
          arr.push(i)
        }
      }
      return {
        ...state,
        cart: arr 
      }

    case 'DECREASE':
      let brr = []
      for(let i of state.cart){
        if(i.id === action.payload){
          if(i.quantity > 1){
            brr.push({...i,quantity: i.quantity-1})
          }else{
            brr.push(i)
          }
        }else{
          brr.push(i)
        }
      }
      return {
        ...state,
        cart: brr 
      }

    case 'REMOVE_ITEM':
      return {...state,cart: state.cart.filter(val => val.id !== action.payload)}

    case 'CLEAR_CART':
      return {...state,cart: []}

    default:
      return state
  }
}

export default cartReducer